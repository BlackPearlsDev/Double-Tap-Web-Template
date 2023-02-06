import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container }  from 'rsuite';
import ImgError from '../assets/img/maintenance.jpg';

function Error() {

    const navigate = useNavigate();

    return (
        <main>
            <Container className='section-error'>
                <h1>Serveur hors ligne</h1>
                <p>La page que vous essayez d'atteindre n'est pas disponible car le serveur est hors ligne.</p>
                <img src={ImgError} alt="Erreur 404" />
                <button onClick={() => navigate("/")}>Retour à l'accueil</button>
            </Container>
        </main>
    )
}

export default Error;