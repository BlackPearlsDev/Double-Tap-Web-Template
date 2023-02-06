import { useEffect, useState } from 'react';
import { Container } from 'rsuite';
import { Button, ButtonToolbar } from 'rsuite';
import { Link } from 'react-router-dom';
import Card from '../../UI/Card/Index';

// Import images
import ImgTopHome from '../../../assets/img/img_top_home.png';
import DofusLogo from '../../../assets/img/dofus_emeraude.png';
import IconSword from '../../../assets/img/icon_epee.png';
import IconZaap from '../../../assets/img/icon_zaap.png';
import IconMonster from '../../../assets/img/icon_monster.png';
import IconMap from '../../../assets/img/icon_map.png';
import IconAmalia from '../../../assets/img/icon_amalia.png';

function Home() {

    const [widthScreen, setWidthScreen] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidthScreen(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    return (
        <main>
            <section className='head-section'>
            <Container>
                    <article>
                    {widthScreen < 767 && (
                        <>
                            <div className='image-bg'></div>
                            <img src={ImgTopHome} alt="L'éniripsa le soigneur de dofus, en version fan art. (fanart dofus)" className='img-top-home'/>
                        </>
                        )}
                        <h1 className='title-gradient'>Double Tap</h1>
                        <p className='para-big'>Nouvelle génération</p>
                        <p className='para-big'>de serveur privé</p>
                        <p className='para-medium'>Préparez-vous à un gameplay qui peut enfin vous satisfaire.</p>
                    </article>

                    <aside className='btn-bar-top'>
                        <Container>
                            <ButtonToolbar>
                                <Button appearance="primary" size="lg" className='btn-home btn-gradient'><Link to={"/"} className="link-white">Jouer</Link></Button>
                                <Button appearance="default" size="lg" className='btn-home'><Link to={"/"} className="link-white">Nouveautés</Link></Button>
                                <Button appearance="default" size="lg" className='btn-home'><Link to={"/"} className="link-white">Classement</Link></Button>
                            </ButtonToolbar>
                        </Container>
                    </aside>
                </Container>

                <Container>
                    {widthScreen > 767 && (
                        <>
                            <div className='image-bg'></div>
                            <img src={ImgTopHome} alt="L'éniripsa le soigneur de dofus, en version fan art. (fanart dofus)" className='img-top-home'/>
                        </>
                        )}
                    </Container>
            </section>

            <section className='card-section'>
                <Card imgName={DofusLogo} imgAlt="Le logo de Dofus, le jeu vidéo d'Ankama." title="Redécouvrez le jeu" para="Vous êtes fan de Dofus et vous connaissez le jeu par coeur. Venez le redécouvrir."/>
                <Card imgName={IconSword} imgAlt="Une icône d'épée venant de Dofus." title="Un gameplay fluide" para="Un nouveau gameplay vous y est proposé, de nouvelles choses sont à découvrir et à dévorer."/>
                <Card imgName={IconZaap} imgAlt="Une icône de Zaap venant de Dofus." title="Les dimensions sont ouvertes" para="Partout dans le monde se sont ouvertes des failles menant à des dimensions, seriez-vous les trouver ?"/>
                <Card imgName={IconMonster} imgAlt="Une icône d'un monstre venant de Dofus." title="Un bestiaire plus diversifié" para="Vous connaissez déjà toutes les stratégies de combat ? Venez vous mesurer à des nouveaux monstres."/>
                <Card imgName={IconMap} imgAlt="Une icône de la map venant de Dofus." title="Des nouvelles zones" para="Le Monde des Douzes n'est plus un secret pour vous ? Venez découvrir un nouvel environnement."/>
                <Card imgName={IconAmalia} imgAlt="Une icône d'Amalia venant de Wakfu" title="Contenu officiel" para="Habitué au contenu officiel ? Arène, métiers, Gladiatrool, traques etc .. Tout est là !"/>
            </section>
        </main>
    )
}

export default Home;