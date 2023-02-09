import { useEffect, useState } from 'react';
import { Container, Tooltip, Whisper, Modal, Button } from 'rsuite';
import CardPlayer from '../../UI/CardPlayer/Index';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loadPlayers } from '../../../store/slices/players.slice';
import { getAllPlayers } from '../../../services/API/players';

// Import classes images
import ImgAccount from '../../../assets/img/account-placeholder.png';
import ImgCra from '../../../assets/classes/cra.png';
import ImgEcaflip from '../../../assets/classes/ecaflip.png';
import ImgEniripsa from '../../../assets/classes/eniripsa.png';
import ImgEnutrof from '../../../assets/classes/enutrof.png';
import ImgFeca from '../../../assets/classes/feca.png';
import ImgIop from '../../../assets/classes/iop.png';
import ImgOsamodas from '../../../assets/classes/osamodas.png';
import ImgPandawa from '../../../assets/classes/pandawa.png';
import ImgSacrieur from '../../../assets/classes/sacrieur.png';
import ImgSadida from '../../../assets/classes/sadida.png';
import ImgSram from '../../../assets/classes/sram.png';
import ImgXelor from '../../../assets/classes/xelor.png';

function Account({userInfos, playersInfos}) {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const lastConnection = userInfos?.lastConnectionDate.replace(/[~]/g,'/').substring(0, 10);

    const [open, setOpen] = useState(false);
    const [overflow] = useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [modalContent, setModalContent] = useState(null);

    const tooltip = (
        <Tooltip>
            <p>{playersInfos.map ((player, index) => {
                return (
                    <span key={index}>{player.name} <strong className='txt-yellow'>|</strong> {player.level} <br /></span>
                )
            })}</p>
        </Tooltip>
    );

    useEffect(() => {
        if (playersInfos?.length === 0) {
            navigate("/");
        }
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (playersInfos?.length !== 0 ) {
            const interval = setInterval(() => {
                async function fetchData() {
                    const res = await getAllPlayers(userInfos?.account, userInfos?.guid);
                    if (res.status !== 200) {
                        console.log('EROOR. Please contact the administrator.');
                        return;
                    }
                    dispatch(loadPlayers(res.data));
                }
                fetchData();
            }, 10000); // envoi de la requête toutes les 10 secondes pour pas surcharger le serveur
            return () => clearInterval(interval);
        }
        // eslint-disable-next-line
    }, []);

    const handleClickCharacter = (e) => {
        const targetIndex = e.target.alt;
        let targetCharacter = playersInfos[targetIndex];

        if(targetCharacter !== undefined && targetCharacter !== null) {
            setModalContent(targetCharacter);
            handleOpen();
        } else
            return;
    }

    return (
        <main>
            <Container className='account-infos'>
                <h1>Soyez au plus proche de vous-même</h1>
                <p>Vous êtes sur votre compte, vous y retrouverez toutes les informations nécessaires concernant votre aventure.</p>
            </Container>

            <Container className='all-details-account-infos'>
                <article className='card-account-infos'>
                    <img src={ImgAccount} alt="Une incarnation Dofus pour représenter l'avatar du compte connécté." />
                    <div className='account-infos-card'>
                        <h2>{userInfos?.account}</h2>
                        <p>Compte créer le <strong className='txt-yellow'>{userInfos?.dateRegister}</strong></p>
                        <p>Dernière connexion le <strong className='txt-yellow'>{lastConnection}</strong></p>
                        <Whisper placement="top" controlId="control-id-hover" trigger="hover" speaker={tooltip}>
                            <p>Nombre de personnages: <strong className='txt-yellow'>{playersInfos?.length}</strong></p>
                        </Whisper>
                        <Link to="/logout" className='btn-logout'>Déconnexion</Link>
                    </div>
                </article>

                <div className='card-players-infos-list' onClick={handleClickCharacter}>
                    {playersInfos?.length === 0 ? <p className='txt-center'>Vous n'avez pas encore créé de personnage.</p> :
                    playersInfos.map((player, index) => {
                        return (
                            <CardPlayer
                                key={index}
                                isOnline={player.logged === 1 ? {background: 'green'} : {background: 'red'}}
                                ImgSrc={player.class === 9 ? ImgCra : player.class === 6 ? ImgEcaflip : player.class === 7 ? ImgEniripsa : player.class === 3 ? ImgEnutrof : player.class === 1 ? ImgFeca : player.class === 8 ? ImgIop : player.class === 2 ? ImgOsamodas : player.class === 12 ? ImgPandawa : player.class === 11 ? ImgSacrieur : player.class === 10 ? ImgSadida : player.class === 4 ? ImgSram : player.class === 5 ? ImgXelor : null}
                                imgAlt={index}
                                name={`${player.name}`}
                                level={`Niveau: ${player.level}`}
                                omega={`Oméga: ${player.omega}`}
                            />
                        )
                    })}
                </div>
            </Container>

            {/* now when i click on targeted Character with function handleClickCharacter(), i need to open a Modal contains infos about the target */}
            <Modal overflow={overflow} open={open} onClose={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{modalContent?.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h3>Général</h3>
                    <p>Classe: {modalContent?.class === 9 ? <span className='txt-yellow'>Cra</span> : modalContent?.class === 6 ? <span className='txt-yellow'>Ecaflip</span> : modalContent?.class === 7 ? <span className='txt-yellow'>Eniripsa</span> : modalContent?.class === 3 ? <span className='txt-yellow'>Enutrof</span> : modalContent?.class === 1 ? <span className='txt-yellow'>Feca</span> : modalContent?.class === 8 ? <span className='txt-yellow'>Iop</span> : modalContent?.class === 2 ? <span className='txt-yellow'>Osamodas</span> : modalContent?.class === 12 ? <span className='txt-yellow'>Pandawa</span> : modalContent?.class === 11 ? <span className='txt-yellow'>Sacrieur</span> : modalContent?.class === 10 ? <span className='txt-yellow'>Sadida</span> : modalContent?.class === 4 ? <span className='txt-yellow'>Sram</span> : modalContent?.class === 5 ? <span className='txt-yellow'>Xelor</span> : null}</p>
                    <p>Niveau: <span className='txt-yellow'>{modalContent?.level}</span></p>
                    <p>Oméga:  <span className='txt-yellow'>{modalContent?.omega}</span></p>
                    <p>Expérience: <span className='txt-yellow'>{modalContent?.xp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</span></p>
                    <p>Kamas: <span className='txt-yellow'>{modalContent?.kamas.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</span></p>
                    <h3>PVP</h3>
                    <p>Alignement: {modalContent?.alignement === 0 ? <span className='txt-yellow'>Neutre</span> : modalContent?.alignement === 1 ? <span className='txt-yellow'>Bontarien</span> : modalContent?.alignement === 2 ? <span className='txt-yellow'>Brakmarien</span> : null}</p>
                    <p>Points d'honneur: <span className='txt-yellow'>{modalContent?.honor}</span></p>
                    <p>Points de déshonneur: <span className='txt-yellow'>{modalContent?.deshonor}</span></p>
                    <h3>Artisanat</h3>
                    <p>Métiers | {modalContent?.jobs !== '' && modalContent?.jobs.split(";").map((job, index) => {
                        return (
                            <span key={index}>
                                {job.split(",")[0] === "2" ? <span className="txt-yellow">Bûcheron:</span> : job.split(",")[0] === "11" ? <span className="txt-yellow">Forgeur d'Epées:</span> : job.split(",")[0] === "13" ? <span className="txt-yellow">Sculpteur d'Arcs:</span> : job.split(",")[0] === "14" ? <span className="txt-yellow">Forgeur de Marteaux:</span> : job.split(",")[0] === "15" ? <span className="txt-yellow">Cordonnier:</span> : job.split(",")[0] === "16" ? <span className="txt-yellow">Bijoutier:</span> : job.split(",")[0] === "17" ? <span className="txt-yellow">Forgeur de Dagues:</span> : job.split(",")[0] === "18" ? <span className="txt-yellow">Sculpteur de Bâtons:</span> : job.split(",")[0] === "19" ? <span className="txt-yellow">Sculpteur de Baguettes:</span> : job.split(",")[0] === "20" ? <span className="txt-yellow">Forgeur de Pelles:</span> : job.split(",")[0] === "24" ? <span className="txt-yellow">Mineur:</span> : job.split(",")[0] === "25" ? <span className="txt-yellow">Boulanger:</span> : job.split(",")[0] === "26" ? <span className="txt-yellow">Alchimiste:</span> : job.split(",")[0] === "27" ? <span className="txt-yellow">Tailleur:</span> : job.split(",")[0] === "28" ? <span className="txt-yellow">Paysan:</span> : job.split(",")[0] === "31" ? <span className="txt-yellow">Forgeur de Haches:</span> : job.split(",")[0] === "36" ? <span className="txt-yellow">Pêcheur:</span> : job.split(",")[0] === "41" ? <span className="txt-yellow">Chasseur:</span> : job.split(",")[0] === "43" ? <span className="txt-yellow">Forgemage de Dagues:</span> : job.split(",")[0] === "44" ? <span className="txt-yellow">Forchemage d'Epées:</span> : job.split(",")[0] === "45" ? <span className="txt-yellow">Forgemage de Marteaux:</span> : job.split(",")[0] === "46" ? <span className="txt-yellow">Forgemage de Pelles:</span> : job.split(",")[0] === "47" ? <span className="txt-yellow">Forgemage de Haches:</span> : job.split(",")[0] === "48" ? <span className="txt-yellow">Sculptomage d'Arcs:</span> : job.split(",")[0] === "49" ? <span className="txt-yellow">Sculptomage de Baguettes:</span> : job.split(",")[0] === "50" ? <span className="txt-yellow">Sculptomage de Bâtons:</span> : job.split(",")[0] === "56" ? <span className="txt-yellow">Boucher:</span> : job.split(",")[0] === "58" ? <span className="txt-yellow">Poissonnier:</span> : job.split(",")[0] === "60" ? <span className="txt-yellow">Forgeur de Boucliers:</span> : job.split(",")[0] === "62" ? <span className="txt-yellow">Cordomage:</span> : job.split(",")[0] === "63" ? <span className="txt-yellow">Joaillomage:</span> : job.split(",")[0] === "64" ? <span className="txt-yellow">Costumage:</span> : job.split(",")[0] === "65" ? <span className="txt-yellow">Bricoleur:</span> : null} {job.split(",")[1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " XP |"}
                                {"\n"}
                            </span>
                        )
                    })}</p>
                    <h3>Autres</h3>
                    <p>Sexe: {modalContent?.sexe === 0 ? <span className='txt-yellow'>Mâle</span> : <span className='txt-yellow'>Femelle</span>}</p>
                    <p>Spécialisation: {modalContent?.specialisation === 1 ? <span className='txt-yellow'>Tank</span> : modalContent?.specialisation === 2 ? <span className='txt-yellow'>Heal</span> : modalContent?.specialisation === 3 ? <span className='txt-yellow'>DPS</span> : modalContent?.specialisation === 4 ? <span className='txt-yellow'>Mercenaire</span> : modalContent?.specialisation === 5 ? <span className='txt-yellow'>Explorateur</span> : modalContent?.specialisation === 6 ? <span className='txt-yellow'>Chercheur de Trésor</span> : null}</p>
                    <p>En ligne: {modalContent?.logged === 0 ? <span className='txt-yellow'>Non</span> : <span className='txt-yellow'>Oui</span>}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>
                        Fermer
                    </Button>
                </Modal.Footer>
            </Modal>

        </main>
    )
}

export default Account;