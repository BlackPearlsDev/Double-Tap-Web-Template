import { Container } from 'rsuite';
import CardPlayer from '../../UI/CardPlayer/Index';
import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { getAllPlayers } from '../../../services/API/players';
// import { loadPlayers } from '../../../store/slices/players.slice';

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

    const lastConnection = userInfos?.lastConnectionDate.replace(/[~]/g,'/').substring(0, 10);
    
    
    // For next update maybe..
    
    // const dispatch = useDispatch();
    // const refresh = async () => {
    //     console.log("refresh");
    //     async function fetchPlayers() {
    //         const res = await getAllPlayers();
    //         if(res.status === 200) {
    //             dispatch(loadPlayers(res.data.result));
    //         }
    //     }
    //     fetchPlayers();
    // }

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
                        <p>Nombre de personnages: <strong className='txt-yellow'>{playersInfos?.length}</strong></p>
                        <Link to="/logout" className='btn-logout'>Déconnexion</Link>
                    </div>
                </article>

                <div className='card-players-infos-list'>
                    {playersInfos?.length === 0 ? <p className='txt-center'>Vous n'avez pas encore créé de personnage.</p> : null}
                    {playersInfos?.map((player, index) => {
                        return (
                            <CardPlayer
                                key={index}
                                isOnline={player.logged === 1 ? {background: 'green'} : {background: 'red'}}
                                ImgSrc={player.class === 9 ? ImgCra : player.class === 6 ? ImgEcaflip : player.class === 7 ? ImgEniripsa : player.class === 3 ? ImgEnutrof : player.class === 1 ? ImgFeca : player.class === 8 ? ImgIop : player.class === 2 ? ImgOsamodas : player.class === 12 ? ImgPandawa : player.class === 11 ? ImgSacrieur : player.class === 10 ? ImgSadida : player.class === 4 ? ImgSram : player.class === 5 ? ImgXelor : null}
                                imgAlt={"Votre classe vous définit, voici votre avatar."}
                                name={`${player.name}`}
                                level={`Niveau: ${player.level}`}
                                omega={`Oméga: ${player.omega}`}
                            />
                        )
                    })}
                </div>
            </Container>
        </main>
    )
}

export default Account;