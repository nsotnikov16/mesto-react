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
import { codeEscape } from "../utils/constants";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({name: '', link: ''})

  const [isHoverAvatar, setIsHoverAvatar] = React.useState(false);
  const [isVisibleEditAvatar, setIsVisibleEditAvatar] = React.useState(false);

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

  function handleCardClick(data) {
    setSelectedCard({link: data.link, name: data.name})
  }

  function closeAllPopups() {
    isEditProfilePopupOpen && setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
    isEditAvatarPopupOpen && setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
    isAddPlacePopupOpen && setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
    selectedCard.link && setSelectedCard({name: '', link: ''})
    //Если я правильно исправил ваше замечание, то теперь есть ньанс с плавностью закрытия попапа изображения
    // т.к. данные сбрасываются при закрытии, картинка и титульник пропадают быстрее чем попап закроется плавно, то есть остается один только крестик закрытия, который плавно действительно исчезает. Наглядно это видно
  }

  function hoverEditAvatar() {
    setIsVisibleEditAvatar(!isVisibleEditAvatar);
    setIsHoverAvatar(!isHoverAvatar);
  }

  function handleOverlayClick(evt) {
    (evt.target === evt.currentTarget) && closeAllPopups()
  }

  React.useEffect(() => {
    (isEditProfilePopupOpen || isEditAvatarPopupOpen || isAddPlacePopupOpen || selectedCard.name !== '') &&
      document.addEventListener("keydown", handleEscClosePopup);

    return () => document.removeEventListener("keydown", handleEscClosePopup);
  });

  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Main
          isCardOpen = {handleCardClick}
          onEditProfile={handleEditProfileClick}
          onEditAvatar={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}
          onHoverAvatar={hoverEditAvatar}
          isHover={isHoverAvatar}
          isVisible={isVisibleEditAvatar}
        />
        <Footer />
        <PopupWithForm
          name="avatar"
          title="Обновить аватар"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          children={contentPopupAvatar()}
          handleOverlay={handleOverlayClick}
          buttonText = 'Сохранить'
        />
        <PopupWithForm
          name="profile"
          title="Редактировать профиль"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          children={contentPopupProfile()}
          handleOverlay={handleOverlayClick}
          buttonText = "Сохранить"
        />
        <PopupWithForm
          name="newplace"
          title="Новое место"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          children={contentPopupAddPlace()}
          handleOverlay={handleOverlayClick}
          buttonText = "Создать"
        />
        <ImagePopup
          onClose={closeAllPopups}
          card={selectedCard}
          isOpen={selectedCard.link}
          handleOverlay={handleOverlayClick}
        />
      </div>
    </div>
  );
}

export default App;
