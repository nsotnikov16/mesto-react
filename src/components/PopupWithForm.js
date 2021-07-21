function PopupWithForm (props) {
    return (
        <div className={`popup popup-${props.name} ${props.isOpen}`} onClick={props.handleOverlay}>
              <div className="popup__container container-profile">
                  <button type="button" className="popup__close" onClick={props.onClose}></button>
                  <h2 className="popup__title">{props.title}</h2>
                    
                <form className={`popup__form form-${props.name}`} name={`form-${props.name}`} noValidate>
                    
                    {props.children}
                    
                    <button type="submit" className="popup__save">Сохранить</button>
                </form>
              </div>
          </div>
    )
}

export default PopupWithForm