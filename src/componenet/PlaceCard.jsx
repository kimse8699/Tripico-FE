import { useNavigate } from 'react-router-dom';
import '../component_style/PlaceCard.css';

function PlaceCard({ title, description, startAddr, destAddr, busTime, carTime }) {

  const navigate = useNavigate();

  const handeClick = () => {
    navigate('/result')
  }

  return (
    <div className="place-card" onClick={handeClick}>
      <div className="place-header">
        <div className="place-dot" />
        <h3 className="place-title">{title}</h3>
        <span className="material-icons icon star-icon">star_border</span>
      </div>
      <p className="place-desc">{description}</p>
      <div className="address-box">{startAddr}</div>
      <div className="address-box arrow-box">→ {destAddr}</div>
      <div className="time-info">
        <div className="time-item">
          <span className="material-icons icon">directions_bus</span> {busTime}
        </div>
        <div className="time-item">
          <span className="material-icons icon">directions_car</span> {carTime}
        </div>
      </div>
    </div>
  );
}

export default PlaceCard;