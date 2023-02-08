import { Badge } from 'rsuite';

function CardPlayer(props) {
    return (
        <div className="card-player">
            <Badge style={props.isOnline} />
            <img src={props.ImgSrc} alt={props.imgAlt} />
            <h3 className="card-player-name">{props.name}</h3>
            <p className="card-player-level">{props.level}</p>
            <p className="card-player-omega">{props.omega}</p>
        </div>
    )
}

export default CardPlayer;