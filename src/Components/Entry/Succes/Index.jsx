import { Container } from 'rsuite';
import { Link } from 'react-router-dom';
import ImgWelcome from '../../../assets/img/welcome.png';

function Succes() {
    return (
        <main>
            <Container className='succes-infos'>
                <h1>Vous voilà prêt !</h1>
                <p>Vous êtes maintenant prêt à rejoindre Double Tap. Nous vous souhaitons une agréable aventure, terrassez tout ce que vous pouvez et amusez-vous bien.</p>
                <img src={ImgWelcome} alt='Dofus Rétro, le MMORPG français édité par Ankama Games.' />
                <Link to="/" className='back-home-btn'>Retour à l'accueil</Link>
            </Container>

        </main>
    )
}

export default Succes;