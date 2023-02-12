import { Container } from 'rsuite';
import CardNews from '../../UI/CardNews/Index';

import ImgNews1 from '../../../assets/news/news-1.jpg';
import ImgNews2 from '../../../assets/news/news-2.jpg';
import ImgNews3 from '../../../assets/news/news-3.jpg';
import ImgNews4 from '../../../assets/news/news-4.jpg';

function News() {
    return (
        <main>
            <Container className='news-card-container'>
                <CardNews imgSrc={ImgNews1} imgAlt="Une image du Gladiatrool de Dofus Rétro." title="LE GLADIATROOL EST ARRIVÉ !" para="Le Gladiatrool, ce mode de jeu tant apprécié des joueurs est arrivé ! Nous sommes les premiers à l'avoir recréé à l'identique de l'officiel. Venez le découvrir et vaincre l'arène de la Foire du Trool !" date="Publié le: 01/02/2023"/>
                <CardNews imgSrc={ImgNews2} imgAlt="Une image des armes Shushus (Sushettes) du jeu Dofus." title="LES ARMES SHUSHETTES !" para="Alors que beaucoup ont oublié ce concept, les armes shushettes sont un vrai atout pour votre stuff. Vous pouvez la forger comme bon vous semble et créer l'arme de vos rêves !" date="Publié le: 24/01/2023"/>
                <CardNews imgSrc={ImgNews3} imgAlt="Une image de l'évènement Temporis sur Dofus Rétro." title="L'ÉVÈNEMENT TEMPORIS !" para="48h après sa sortie nous travaillions déjà ardemment à la recréation de ce gameplay, premier également à le réaliser, venez profiter de l'expérience unique qu'était Temporis Rétro !" date="Publié le: 17/06/2022"/>
                <CardNews imgSrc={ImgNews4} imgAlt="Une image pour fêter le nouvel an sur Dofus Rétro." title="DOUBLE TAP FÊTE SES 4 ANS !" para="Heureux et fiers, cette année nous fêtons les 4 ans de Double Tap ! Une longue aventure, semer d'embuches, de longues heures de travail pour préparer la meilleure expérience possible sur Dofus." date="Publié le: 01/01/2022"/>
            </Container>
        </main>
    )
}

export default News;