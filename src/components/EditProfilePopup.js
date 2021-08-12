import React from "react";
import PopupWithForm from "./PopupWithForm";
import { contentPopupProfile } from "../utils/utils";

import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const { isOpen, onClose, handleOverlay } = props;
  const [buttonText, setButtonText] = React.useState("Сохранить");

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleChange(evt) {
    evt.target.name === "name"
      ? setName(evt.target.value)
      : setDescription(evt.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setButtonText("Сохранение...");
    props.onUpdateUser(
      {
        name,
        about: description,
      },
      setButtonText
    );
  }

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
      children={contentPopupProfile(name, description, handleChange)}
      handleOverlay={handleOverlay}
      buttonText={buttonText}
      onSubmit={handleSubmit}
    />
  );
}

export default EditProfilePopup;
