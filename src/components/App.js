import React from "react";
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import { codeEscape } from "../utils/constants";
import { api } from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import ConfirmPopup from "./ConfirmPopup";

function App() {
  const [currentUser, setCurrentUser] = React.useState({});

  const [cards, setCards] = React.useState([]);
  const [currentCard, setCurrentCard] = React.useState([]);

  React.useEffect(
    () =>
      api
        .getInitialCards()
        .then((cardsData) => setCards(cardsData))
        .catch((err) => alert(err)),
    []
  );

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) =>
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        )
      );
  }

  function submitConfirmPopup(form, setButtonText) {
    setButtonText("Удаление...");

    api
      .deleteCard(currentCard._id)
      .then(() => {
        setCards(cards.filter((c) => c._id !== currentCard._id));
        closeAllPopups(form);
        setButtonText("Да");
      })
      .catch((err) => {
        alert(err);
        setButtonText("Да");
      });
  }

  function handleCardDelete(card) {
    setIsConfirmPopupOpen(!isConfirmPopupOpen);
    setCurrentCard(card);
  }

  React.useEffect(() => {
    api
      .getUserData()
      .then((userdata) => setCurrentUser(userdata))
      .catch((err) => alert(err));
  }, []);

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({
    name: "",
    link: "",
  });

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
    evt.keyCode === codeEscape && closeAllPopups();
  }

  function handleCardClick(data) {
    setSelectedCard({ link: data.link, name: data.name });
  }

  function closeAllPopups() {
    isEditProfilePopupOpen &&
      setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
    isEditAvatarPopupOpen && setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
    isAddPlacePopupOpen && setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
    isConfirmPopupOpen && setIsConfirmPopupOpen(!isConfirmPopupOpen);
    selectedCard.link && setSelectedCard({ name: "", link: "" });
  }

  function hoverEditAvatar() {
    setIsVisibleEditAvatar(!isVisibleEditAvatar);
    setIsHoverAvatar(!isHoverAvatar);
  }

  function handleOverlayClick(evt) {
    evt.target === evt.currentTarget && closeAllPopups();
  }

  function handleUpdateUser(data, setButtonText) {
    api
      .editProfile(data)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
        setButtonText("Сохранить");
      })
      .catch((err) => {
        alert(err);
        setButtonText("Сохранить");
      });
  }

  function handleUpdateAvatar(data, setButtonText, form) {
    api
      .editAvatar(data)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups(form);
        form.reset();
        setButtonText("Сохранить");
      })
      .catch((err) => {
        alert(err);
        setButtonText("Сохранить");
      });
  }

  function handleAddPlaceSubmit(data, setButtonText, form) {
    api
      .addNewCardServer(data)
      .then((res) => {
        setCards([res, ...cards]);
        closeAllPopups(form);
        form.reset();
        setButtonText("Создать");
      })
      .catch((err) => {
        alert(err);
        setButtonText("Создать");
      });
  }

  React.useEffect(() => {
    (isEditProfilePopupOpen ||
      isEditAvatarPopupOpen ||
      isAddPlacePopupOpen ||
      selectedCard.name !== "") &&
      document.addEventListener("keydown", handleEscClosePopup);

    return () => document.removeEventListener("keydown", handleEscClosePopup);
  });

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__content">
          <Header />
          <Main
            isCardOpen={handleCardClick}
            onEditProfile={handleEditProfileClick}
            onEditAvatar={handleEditAvatarClick}
            onAddPlace={handleAddPlaceClick}
            onHoverAvatar={hoverEditAvatar}
            isHover={isHoverAvatar}
            isVisible={isVisibleEditAvatar}
            onCardDelete={handleCardDelete}
            onCardLike={handleCardLike}
            cards={cards}
          />
          <Footer />
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
            handleOverlay={handleOverlayClick}
          />
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            handleOverlay={handleOverlayClick}
            onUpdateAvatar={handleUpdateAvatar}
          />

          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            handleOverlay={handleOverlayClick}
            onAddPlace={handleAddPlaceSubmit}
          />
          <ImagePopup
            onClose={closeAllPopups}
            card={selectedCard}
            isOpen={selectedCard.link}
            handleOverlay={handleOverlayClick}
          />
          <ConfirmPopup
            isOpen={isConfirmPopupOpen}
            onClose={closeAllPopups}
            handleOverlay={handleOverlayClick}
            onConfirm={submitConfirmPopup}
          />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
