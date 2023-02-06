import { useEffect, useState } from 'react';
import { Container } from 'rsuite';
import { Link } from 'react-router-dom';
import ImgTopHome from '../../../assets/img/img_top_home.png';
import PieChartIcon from '@rsuite/icons/PieChart';

function Play() {

    const [widthScreen, setWidthScreen] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidthScreen(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    const ChartIcon = ({ color }) => (
        <PieChartIcon style={{ color, marginRight: 0, fontSize: '4em' }} />
    );

    return (
        <main>
            <Container className='play-dofus'>
                <aside className='play-note'>
                    <h2>NOTE</h2>
                    <p>Double Tap est un serveur privé non autorisé par Ankama. Nous vous recommandons de jouer sur les serveurs officiels de <a href="https://www.dofus.com/fr/dofus-retro" target={'_blank'} rel="noreferrer">Dofus</a> si vous souhaitez profiter pleinement de l'expérience du jeu. Aucun contenu n'est monétisé et donc non achetable pour obtenir quelconque avantage en jeu.</p>
                </aside>
           </Container>

           <Container className='play-download'>
                <h2>Comment jouer ?</h2>

                <p>Pour nous rejoindre il vous faudra télécharger notre version du jeu.</p>

                {widthScreen > 767 ? (
                <>
                    <div className='para-pos'>
                        <div className='para-download'>
                            <p>Vous pouvez télécharger le <strong className='strong-txt'>launcher</strong> en cliquant sur ce bouton</p>
                            <p>Vous pouvez télécharger le <strong className='strong-txt'>client complet</strong> en cliquant sur ce bouton</p>
                        </div>

                        <div className='para-download'>
                            <Link to="/" className='btn-download'>Launcher</Link>
                            <Link to="/" className='btn-download'>Client complet</Link>
                        </div>
                    </div>
                </>
                ) : (
                <>
                    <div className='para-pos'>
                        <ChartIcon color="red" />
                        <p>Vous êtes actuellement sur un appareil mobile, si vous souhaitez télécharger le jeu, faites le depuis un ordinateur.</p>
                    </div>
                </>
                )}
            </Container>

            <Container className='play-deco'>
                <div className='image-bg'></div>
                <img src={ImgTopHome} alt="L'éniripsa le soigneur de dofus, en version fan art. (fanart dofus)" className='img-top-home'/>         
            </Container>
        </main>
    )
}

export default Play;