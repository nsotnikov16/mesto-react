import { popupOpened } from "../utils/constants";

function PopupWithForm (props) {
    return (
        <div className={`popup popup-${props.name} ${(props.isOpen && popupOpened) || ''}`} onClick={props.handleOverlay}>
              <div className="popup__container container-profile">
                  <button type="button" className="popup__close" onClick={props.onClose}></button>
                  <h2 className="popup__title">{props.title}</h2>
                    
                <form className={`popup__form form-${props.name}`} name={`form-${props.name}`}>
                    
                    {props.children}
                    
                    <button type="submit" className="popup__save">{props.buttonText}</button>
                </form>
              </div>
          </div>
    )
}

export default PopupWithForm