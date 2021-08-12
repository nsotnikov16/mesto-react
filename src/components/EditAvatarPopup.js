import React from "react";
import PopupWithForm from "./PopupWithForm";
import { contentPopupAvatar } from "../utils/utils";
function EditAvatarPopup(props) {
  const avatarRef = React.useRef();
  const [buttonText, setButtonText] = React.useState("Сохранить");

  const { isOpen, onClose, handleOverlay } = props;

  function handleSubmit(e) {
    e.preventDefault();
    setButtonText("Сохранение...");
    props.onUpdateAvatar(
      {
        avatar: avatarRef.current.value,
      },
      setButtonText,
      e.target
    );
  }

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      children={contentPopupAvatar(avatarRef)}
      handleOverlay={handleOverlay}
      buttonText={buttonText}
      onSubmit={handleSubmit}
    />
  );
}

export default EditAvatarPopup;
