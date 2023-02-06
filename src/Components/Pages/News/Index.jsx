import React from 'react';
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
                <CardNews imgSrc={ImgNews4} imgAlt="Une image de l'événement majeur de Dofus Rétro Temporis." title="ANKAMA LIVE : DOFUS RETRO TEMPORIS - RÉSUMÉ DU 23 MARS !" para="Pour ce dernier volet, Djinn, Papinaut, Sastip, Papinaut et DUSK étaient au rendez-vous ! On parlé de la fin du serveur Temporis, du Goultarminator et de sujets un peu houleux ! " date="Publié le: 25/03/2022"/>
                <CardNews imgSrc={ImgNews2} imgAlt="Une image du célèbre jeu Dofus." title="LA FIN DU « DUOCOMPTE » SUR LES SERVEURS" para="Après de trop nombreux abus constatés en jeu, nous revenons sur notre choix de permettre deux comptes à se connecter aux serveurs monocompte Retro." date="Publié le: 11/01/2021"/>
                <CardNews imgSrc={ImgNews3} imgAlt="Une image pour des nouveaux items boutique Dofus Rétro." title="PACK POLYKROME : VOUS ALLEZ EN VOIR DE TOUTES LES COULEURS !" para="N’en déplaise aux conservateurs, cette année le rouge, le doré et le vert ne seront pas les couleurs dominantes de Nowel. La faute à qui ? À vous ! Car le pack Polykrome compte bien vous faire porter le chapeau..." date="Publié le: 17/12/2020"/>
                <CardNews imgSrc={ImgNews1} imgAlt="Une image pour fêter le nouvelle an sur Dofus Rétro." title="DES NOUVELLES SUR DOFUS RÉTRO" para="La semaine dernière, nous vous avons révélé nos plans pour DOFUS Rétro et proposé un sondage pour choisir le nom du nouveau serveur. Venez découvrir le gagnant ainsi que d’autres détails sur la version DOFUS Rétro !" date="Publié le: 12/09/2019"/>
            </Container>
        </main>
    )
}

export default News;