import { useEffect, useState } from 'react';
import { Container, Tooltip, Whisper, Modal, Button } from 'rsuite';
import CardPlayer from '../../UI/CardPlayer/Index';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loadPlayers } from '../../../store/slices/players.slice';
import { getAllPlayers } from '../../../services/API/players';
import { Input, InputGroup, Panel, Row, Col } from 'rsuite';
import EyeIcon from '@rsuite/icons/legacy/Eye';
import EyeSlashIcon from '@rsuite/icons/legacy/EyeSlash';

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

// Import jobs images
import ImgJobAlchimiste from '../../../assets/jobs/alchimiste.jpg';
import ImgJobBijoutier from '../../../assets/jobs/bijoutier.jpg';
import ImgJobBricoleur from '../../../assets/jobs/bricoleur.jpg';
import ImgJobBucheron from '../../../assets/jobs/bucheron.jpg';
import ImgJobChasseur from '../../../assets/jobs/chasseur.jpg';
import ImgJobCordomage from '../../../assets/jobs/cordomage.jpg';
import ImgJobCordonnier from '../../../assets/jobs/cordonnier.jpg';
import ImgJobCostumage from '../../../assets/jobs/costumage.jpg';
import ImgJobForgemageDagues from '../../../assets/jobs/forgemage_dagues.jpg';
import ImgJobForgemageEpees from '../../../assets/jobs/forgemage_epees.jpg';
import ImgJobForgemageHaches from '../../../assets/jobs/forgemage_haches.jpg';
import ImgJobForgemageMarteaux from '../../../assets/jobs/forgemage_marteaux.jpg';
import ImgJobForgemagePelles from '../../../assets/jobs/forgemage_pelles.jpg';
import ImgJobForgeurBouclier from '../../../assets/jobs/forgeur_bouclier.jpg';
import ImgJobForgeurDagues from '../../../assets/jobs/forgeur_dagues.jpg';
import ImgJobForgeurEpees from '../../../assets/jobs/forgeur_epees.jpg';
import ImgJobForgeurHaches from '../../../assets/jobs/forgeur_haches.jpg';
import ImgJobForgeurMarteaux from '../../../assets/jobs/forgeur_marteaux.jpg';
import ImgJobForgeurPelles from '../../../assets/jobs/forgeur_pelles.jpg';
import ImgJobJoaillomage from '../../../assets/jobs/joaillomage.jpg';
import ImgJobMineur from '../../../assets/jobs/mineur.jpg';
import ImgJobPaysan from '../../../assets/jobs/paysan.jpg';
import ImgJobPecheur from '../../../assets/jobs/pecheur.jpg';
import ImgJobSculptemageArcs from '../../../assets/jobs/sculptemage_arcs.jpg';
import ImgJobSculptemageBaguettes from '../../../assets/jobs/sculptemage_baguettes.jpg';
import ImgJobSculptemageBatons from '../../../assets/jobs/sculptemage_batons.jpg';
import ImbJobSculpteurArcs from '../../../assets/jobs/sculpteur_arcs.jpg';
import ImgJobSculpteurBaguettes from '../../../assets/jobs/sculpteur_baguettes.jpg';
import ImgJobSculpteurBatons from '../../../assets/jobs/sculpteur_batons.jpg';
import ImgJobTailleur from '../../../assets/jobs/tailleur.jpg';

function Account({userInfos, playersInfos}) {

    const dispatch = useDispatch();
    const lastConnection = userInfos?.lastConnectionDate.replace(/[~]/g,'/').substring(0, 10);

    const [open, setOpen] = useState(false);
    const [overflow] = useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [modalContent, setModalContent] = useState(null);

    const [visible, setVisible] = useState(false);

    const handleChange = () => {
      setVisible(!visible);
    };

    const tooltip = (
        <Tooltip>
            <p>{playersInfos.map ((player, index) => {
                return (
                    <span key={index}>{player.name} <strong className='txt-yellow'>|</strong> {player.level} <br /></span>
                )
            })}</p>
        </Tooltip>
    );

    const tooltipJob = (
        <Tooltip>
            <p>{modalContent?.jobs !== '' ? modalContent?.jobs.split(";").map((job, index) => {
                return (
                    <span key={index}>
                        {job.split(",")[0] === "2" ? 'Bucheron' : job.split(",")[0] === "11" ? 'Forgeur d\'épées' : job.split(",")[0] === "13" ? 'Sculpteur d\'arcs' : job.split(",")[0] === "14" ? 'Forgeur de marteaux' : job.split(",")[0] === "15" ? 'Cordonnier' : job.split(",")[0] === "16" ? 'Bijoutier' : job.split(",")[0] === "17" ? 'Forgeur de Dagues' : job.split(",")[0] === "18" ? 'Sculpteur de Batons' : job.split(",")[0] === "19" ? 'Sculpteur de Baguettes' : job.split(",")[0] === "20" ? 'Forgeur de Pelles' : job.split(",")[0] === "24" ? 'Mineur' : job.split(",")[0] === "25" ? 'Boulanger' : job.split(",")[0] === "26" ? 'Alchimiste' : job.split(",")[0] === "27" ? 'Tailleur' : job.split(",")[0] === "28" ? 'Paysan' : job.split(",")[0] === "31" ? 'Forgeur de Haches' : job.split(",")[0] === "36" ? 'Pecheur' : job.split(",")[0] === "41" ? 'Chasseur' : job.split(",")[0] === "43" ? 'Forgemage de Dagues' : job.split(",")[0] === "44" ? 'Forgemage d\'épées' : job.split(",")[0] === "45" ? 'Forgemage de Marteaux' : job.split(",")[0] === "46" ? 'Forgemage de Pelles' : job.split(",")[0] === "47" ? 'Forgemage de Haches' : job.split(",")[0] === "48" ? 'Sculptemage d\'Arcs' : job.split(",")[0] === "49" ? 'Sculptemage de Baguettes' : job.split(",")[0] === "50" ? 'Sculptemage de Batons' : job.split(",")[0] === "56" ? 'Boucher' : job.split(",")[0] === "58" ? 'Poissonnier' : job.split(",")[0] === "60" ? 'Forgeur de Boucliers' : job.split(",")[0] === "62" ? 'Cordomage' : job.split(",")[0] === "63" ? 'Joaillomage' : job.split(",")[0] === "64" ? 'Costumage' : job.split(",")[0] === "65" ? 'Bricoleur' : null}
                        <strong className='txt-yellow'> | </strong> {job.split(",")[1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} XP<br /> </span>
                )
            }) : 'Aucun métier'}</p>
        </Tooltip>
    );

    const Card = props => (
        <Whisper placement="top" controlId="control-id-hover" trigger="hover" speaker={tooltipJob}>
            <Panel {...props} bordered header={props.title} className={modalContent?.jobs === '' ? 'card-no-job' : ''}>
                {modalContent?.jobs !== '' ? modalContent?.jobs.split(";").map((job, index) => {
                    return (
                        <span key={index}>
                            {job.split(",")[0] === "2" ? <img src={ImgJobBucheron} alt="" /> : job.split(",")[0] === "11" ? <img src={ImgJobForgeurEpees} alt="" /> : job.split(",")[0] === "13" ? <img src={ImbJobSculpteurArcs} alt="" /> : job.split(",")[0] === "14" ? <img src={ImgJobForgeurMarteaux} alt="" /> : job.split(",")[0] === "15" ? <img src={ImgJobCordonnier} alt="" /> : job.split(",")[0] === "16" ? <img src={ImgJobBijoutier} alt="" /> : job.split(",")[0] === "17" ? <img src={ImgJobForgeurDagues} alt="" /> : job.split(",")[0] === "18" ? <img src={ImgJobSculpteurBatons} alt="" /> : job.split(",")[0] === "19" ? <img src={ImgJobSculpteurBaguettes} alt="" /> : job.split(",")[0] === "20" ? <img src={ImgJobForgeurPelles} alt="" /> : job.split(",")[0] === "24" ? <img src={ImgJobMineur} alt="" /> : job.split(",")[0] === "25" ? <img src={ImgJobPaysan} alt="" /> : job.split(",")[0] === "26" ? <img src={ImgJobAlchimiste} alt="" /> : job.split(",")[0] === "27" ? <img src={ImgJobTailleur} alt="" /> : job.split(",")[0] === "28" ? <img src={ImgJobPaysan} alt="" /> : job.split(",")[0] === "31" ? <img src={ImgJobForgeurHaches} alt="" /> : job.split(",")[0] === "36" ? <img src={ImgJobPecheur} alt="" /> : job.split(",")[0] === "41" ? <img src={ImgJobChasseur} alt="" /> : job.split(",")[0] === "43" ? <img src={ImgJobForgemageDagues} alt="" /> : job.split(",")[0] === "44" ? <img src={ImgJobForgemageEpees} alt="" /> : job.split(",")[0] === "45" ? <img src={ImgJobForgemageMarteaux} alt="" /> : job.split(",")[0] === "46" ? <img src={ImgJobForgemagePelles} alt="" /> : job.split(",")[0] === "47" ? <img src={ImgJobForgemageHaches} alt="" /> : job.split(",")[0] === "48" ? <img src={ImgJobSculptemageArcs} alt="" /> : job.split(",")[0] === "49" ? <img src={ImgJobSculptemageBaguettes} alt="" /> : job.split(",")[0] === "50" ? <img src={ImgJobSculptemageBatons} alt="" /> : job.split(",")[0] === "56" ? <img src={ImgJobChasseur} alt="" /> : job.split(",")[0] === "58" ? <img src={ImgJobPecheur} alt="" /> : job.split(",")[0] === "60" ? <img src={ImgJobForgeurBouclier} alt="" /> : job.split(",")[0] === "62" ? <img src={ImgJobCordomage} alt="" /> : job.split(",")[0] === "63" ? <img src={ImgJobJoaillomage} alt="" /> : job.split(",")[0] === "64" ? <img src={ImgJobCostumage} alt="" /> : job.split(",")[0] === "65" ? <img src={ImgJobBricoleur} alt="" /> : null}
                        </span>
                    )
                }) : <span>Aucun métier</span>}
            </Panel>
        </Whisper>
      );

    useEffect(() => {
        if (playersInfos?.length !== 0 ) {
            const interval = setInterval(() => {
                async function fetchData() {
                    const res = await getAllPlayers(userInfos?.account, userInfos?.guid);
                    if (res.status !== 200) {
                        console.error('ERROR. Please contact the administrator.');
                        return;
                    }
                    dispatch(loadPlayers(res.data));
                }
                fetchData();
            }, 5000); // envoi de la requête toutes les 5 secondes pour pas surcharger le serveur
            return () => clearInterval(interval);
        } else {
            async function fetchData() {
                const res = await getAllPlayers(userInfos?.account, userInfos?.guid);
                if (res.status !== 200) {
                    console.error('ERROR. Please contact the administrator.');
                    return;
                }
                dispatch(loadPlayers(res.data));
            }
            fetchData();
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
                        <p>VIP: <strong className='txt-yellow'>{userInfos?.vip === 1 ? 'Oui' : 'Non'}</strong></p>
                        <p>Votre clé secrète</p>
                        <InputGroup inside style={{width: 200}}>
                            <Input type={visible ? 'text' : 'password'} value={userInfos?.email !== null ? userInfos?.email : 'Aucune clé'} disabled />
                            <InputGroup.Button onClick={handleChange}>
                                {visible ? <EyeIcon /> : <EyeSlashIcon />}
                            </InputGroup.Button>
                        </InputGroup>
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
                    <Row>
                        <Col md={8} sm={12} className={modalContent?.jobs === '' ? 'col-no-jobs' : ''}>
                            <Card />
                        </Col>
                    </Row>
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