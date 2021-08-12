import React from "react";
import PopupWithForm from "./PopupWithForm";
import { contentPopupAddPlace } from "../utils/utils";

function EditAvatarPopup(props) {
  const nameCardRef = React.useRef();
  const linkCardRef = React.useRef();
  const [buttonText, setButtonText] = React.useState("Создать");
  const { isOpen, onClose, handleOverlay } = props;

  function handleSubmit(e) {
    e.preventDefault();
    setButtonText("Создание...");
    props.onAddPlace(
      {
        name: nameCardRef.current.value,
        link: linkCardRef.current.value,
      },
      setButtonText,
      e.target
    );
  }

  return (
    <PopupWithForm
      name="newplace"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
      children={contentPopupAddPlace(nameCardRef, linkCardRef)}
      handleOverlay={handleOverlay}
      buttonText={buttonText}
      onSubmit={handleSubmit}
    />
  );
}

export default EditAvatarPopup;
