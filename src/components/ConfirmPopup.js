import React from "react";
import PopupWithForm from "./PopupWithForm";

function ConfirmPopup(props) {
  const [buttonText, setButtonText] = React.useState("Да");

  const { isOpen, onClose, handleOverlay } = props;

  function handleSubmit(e) {
    e.preventDefault();
    props.onConfirm(e.target, setButtonText);
  }

  return (
    <PopupWithForm
      name="confirm"
      title="Вы уверены?"
      buttonText={buttonText}
      isOpen={isOpen}
      onClose={onClose}
      handleOverlay={handleOverlay}
      onSubmit={handleSubmit}
    />
  );
}

export default ConfirmPopup;
