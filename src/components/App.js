import React from "react";
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import {
  contentPopupAvatar,
  contentPopupProfile,
  contentPopupAddPlace,
} from "../utils/utils";
import { codeEscape, popupOpened } from "../utils/constants";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState(false)

  const [isHoverAvatar, setIsHoverAvatar] = React.useState(false);
  const [isVisibleEditAvatar, setIsVisibleEditAvatar] = React.useState(false);

  const [srcImagePopup, setSrcImagePopup] = React.useState('')
  const [nameImagePopup, setNameImagePopup] = React.useState('')

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleEscClosePopup(evt) {
    evt.keyCode === codeEscape && closeAllPopups()
  }

  function handleCardClick() {
    setSelectedCard(!selectedCard)
    return selectedCard
  }

  function closeAllPopups() {
    isEditProfilePopupOpen && setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
    isEditAvatarPopupOpen && setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
    isAddPlacePopupOpen && setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
    selectedCard && setSelectedCard(!selectedCard)
  }

  function hoverEditAvatar() {
    setIsVisibleEditAvatar(!isVisibleEditAvatar);
    setIsHoverAvatar(!isHoverAvatar);
  }

  function handleOverlayClick(evt) {
    (evt.target === evt.currentTarget) && closeAllPopups()
  }

  React.useEffect(() => {
    (isEditProfilePopupOpen || isEditAvatarPopupOpen || isAddPlacePopupOpen || selectedCard) &&
      document.addEventListener("keydown", handleEscClosePopup);

    return () => document.removeEventListener("keydown", handleEscClosePopup);
  });

  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Main
          isCardOpen = {handleCardClick}
          cardSrcImg = {setSrcImagePopup}
          cardNameImg = {setNameImagePopup}
          onEditProfile={handleEditProfileClick}
          onEditAvatar={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}
          onHoverAvatar={hoverEditAvatar}
          isHover={isHoverAvatar && "profile__avatar_opacity"}
          isVisible={isVisibleEditAvatar && "profile__edit-avatar_visible"}
        />
        <Footer />
        <PopupWithForm
          name="avatar"
          title="Обновить аватар"
          isOpen={isEditAvatarPopupOpen && popupOpened}
          onClose={closeAllPopups}
          children={contentPopupAvatar()}
          handleOverlay={handleOverlayClick}
        />
        <PopupWithForm
          name="profile"
          title="Редактировать профиль"
          isOpen={isEditProfilePopupOpen && popupOpened}
          onClose={closeAllPopups}
          children={contentPopupProfile()}
          handleOverlay={handleOverlayClick}
        />
        <PopupWithForm
          name="newplace"
          title="Новое место"
          isOpen={isAddPlacePopupOpen && popupOpened}
          onClose={closeAllPopups}
          children={contentPopupAddPlace()}
          handleOverlay={handleOverlayClick}
        />
        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
          name={nameImagePopup}
          link={srcImagePopup}
          isOpen={selectedCard && popupOpened}
          handleOverlay={handleOverlayClick}
        />
      </div>
    </div>
  );
}

export default App;
