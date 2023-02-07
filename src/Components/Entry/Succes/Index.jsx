import React, { useEffect } from 'react';
import { Container } from 'rsuite';
import { Link } from 'react-router-dom';
import ImgWelcome from '../../../assets/img/welcome.png';
import { Notification, Placeholder, useToaster } from 'rsuite';

const Message = React.forwardRef(({ type, ...rest }, ref) => {
    return (
      <Notification ref={ref} {...rest} type={"success"} header={"Inscription terminée !"} duration={5000}>
        <Placeholder.Paragraph style={{ width: 320 }} rows={0} />
        <p>Vous pouvez désormais jouer sur le serveur.</p>
      </Notification>
    );
  });

function Succes() {

    const toaster = useToaster();

    useEffect(() => {
        toaster.push(<Message></Message>, {
            placement: 'topEnd'
        });
    });

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