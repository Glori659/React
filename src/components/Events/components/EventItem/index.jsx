import { Link } from 'react-router-dom';
import './style.css';

const EventItem = ({ info, id, name, image, onEventClick }) => {

    const handleSeeMoreClick = (evt) => {
        evt.stopPropagation();
        onEventClick(id);
    };

    return (
    <div onClick={() => console.log('padre clickeado')} className='event-item-container'>
        <img src={image} alt={name} width={200} height={200} />
        <div className='event-info-container'>
        <h4 className='event-name'>{name}</h4>
        <p className='event-info'>{info}</p>
        <button onClick={handleSeeMoreClick} className='see-more-btn'>
        {/*<Link to= {`/detail/${id}`}>
        
        Ver mas
    </Link>*/}
        Ver mas
        </button>
        </div>
    </div>
    );
};

export default EventItem;