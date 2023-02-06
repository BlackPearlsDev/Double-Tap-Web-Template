import { Link } from 'react-router-dom';
import ImgTopHome from '../../../assets/img/img_top_home.png';

function NotFound() {
    return (
        <main>
            <section className="error404">
                <div className='image-bg'></div>
                <img src={ImgTopHome} alt="L'éniripsa le soigneur de dofus, en version fan art. (fanart dofus)" className='img-top-home'/>
                <h3>Tous les chemins mènent au monde des Douzes...</h3>
                <h4>sauf celui-là !</h4>

                <Link to="/" className='link-back'>Retour à l'accueil</Link>
            </section>
        </main>
    )
}

export default NotFound;