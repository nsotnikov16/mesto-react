import { popupOpened } from "../utils/constants";
import React from "react";
import FormValidator from "../utils/FormValidator";
import { config } from "../utils/constants";

function PopupWithForm(props) {
  const formRef = React.useRef();

  React.useEffect(() => {
    const validator = new FormValidator(config, formRef.current);
    validator.enableValidation();
  }, []);

  return (
    <div
      className={`popup popup-${props.name} ${
        (props.isOpen && popupOpened) || ""
      }`}
      onClick={props.handleOverlay}
    >
      <div className="popup__container container-profile">
        <button
          type="button"
          className="popup__close"
          onClick={props.onClose}
        ></button>
        <h2 className="popup__title">{props.title}</h2>

        <form
          ref={formRef}
          onSubmit={props.onSubmit}
          className={`popup__form form-${props.name}`}
          name={`form-${props.name}`}
        >
          {props.children}

          <button type="submit" name="submit" className="popup__save">
            {props.buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
