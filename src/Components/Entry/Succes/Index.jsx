import React, { useEffect } from 'react';
import { Container } from 'rsuite';
import { Link } from 'react-router-dom';
import ImgWelcome from '../../../assets/img/welcome.png';
import { Notification, Placeholder, useToaster } from 'rsuite';
import { useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate();

    const checkInscription = localStorage.getItem("checkInscription");

    useEffect(() => {
        if (checkInscription !== null) {
            toaster.push(<Message></Message>, {
                placement: 'topEnd'
            });
        } else {
            navigate("/");
        }
    });

    const handleBackHome = () => {
        localStorage.removeItem("checkInscription");
    }

    return (
        <main>
            <Container className='succes-infos'>
                <h1>Vous voilà prêt !</h1>
                <p>Vous êtes maintenant prêt à rejoindre Double Tap. Nous vous souhaitons une agréable aventure, terrassez tout ce que vous pouvez et amusez-vous bien.</p>
                <img src={ImgWelcome} alt='Dofus Rétro, le MMORPG français édité par Ankama Games.' />
                <Link to='/' onClick={handleBackHome}><button className='back-home-btn'>Retour à l'accueil</button></Link>
            </Container>
        </main>
    )
}

export default Succes;