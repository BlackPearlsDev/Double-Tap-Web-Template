import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container }  from 'rsuite';

function Error() {

    const navigate = useNavigate();

    return (
        <main>
            <Container>
                <h1>Erreur 404</h1>
                <p>La page que vous recherchez n'existe pas.</p>
                <button onClick={() => navigate("/")}>Retour à l'accueil</button>
            </Container>
        </main>
    )
}

export default Error;