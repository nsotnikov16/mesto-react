import {popupOpened} from '../utils/constants'

function ImagePopup (props) {
    return (
        <div className={`popup-img popup ${(props.isOpen && popupOpened) || ''}`} onClick={props.handleOverlay}>
          <div className="popup-img__container">
            <img className="popup-img__image" src={props.card.link} alt={props.card.name}/>
            <h2 className="popup-img__title">{props.card.name}</h2>
            <button
              type="button"
              className="popup-img__close close-btn"
              onClick={props.onClose}
            ></button>
          </div>
        </div>
    )
}

export default ImagePopup