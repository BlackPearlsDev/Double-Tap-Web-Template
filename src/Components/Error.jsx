import { Container }  from 'rsuite';
import { Link } from 'react-router-dom';
import ImgError from '../assets/img/maintenance.jpg';

function Error() {

    return (
        <main>
            <Container className='section-error'>
                <h1>Serveur hors ligne</h1>
                <p>La page que vous essayez d'atteindre n'est pas disponible car le serveur est hors ligne.</p>
                <img src={ImgError} alt="Erreur 404" />
                <Link to="/" className='back-home-btn'>Retour à l'accueil</Link>
            </Container>
        </main>
    )
}

export default Error;