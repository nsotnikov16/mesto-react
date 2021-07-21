export function contentPopupAvatar() {
  return (
    <>
      <fieldset className="popup__fieldset">
        <input
          type="url"
          name="link"
          id="link-update-input"
          placeholder="Ссылка на аватар"
          className="popup__input popup__input_field_link"
          required
        />
        <span
          className="popup__input-error"
          id="link-update-input-error"
        ></span>
      </fieldset>
    </>
  );
}

export function contentPopupProfile() {
  return (
    <>
      <fieldset className="popup__fieldset">
        <input
          type="text"
          name="name"
          id="name-profile-input"
          placeholder="Имя"
          className="popup__input popup__input_field_username"
          minLength="2"
          maxLength="40"
          required
        />
        <span
          className="popup__input-error"
          id="name-profile-input-error"
        ></span>
      </fieldset>
      <fieldset className="popup__fieldset">
        <input
          type="text"
          name="info"
          id="info-profile-input"
          placeholder="О себе"
          className="popup__input popup__input_field_info"
          minLength="2"
          maxLength="200"
          required
        />
        <span
          className="popup__input-error"
          id="info-profile-input-error"
        ></span>
      </fieldset>
    </>
  );
}

export function contentPopupAddPlace() {
  return (
    <>
      <fieldset className="popup__fieldset">
        <input
          type="text"
          name="name"
          id="name-newplace-input"
          placeholder="Название"
          className="popup__input popup__input_field_nameplace"
          minLength="2"
          maxLength="30"
          required
        />
        <span
          className="popup__input-error"
          id="name-newplace-input-error"
        ></span>
      </fieldset>
      <fieldset className="popup__fieldset">
        <input
          type="url"
          name="link"
          id="link-newplace-input"
          placeholder="Ссылка на картинку"
          className="popup__input popup__input_field_link"
          required
        />
        <span
          className="popup__input-error"
          id="link-newplace-input-error"
        ></span>
      </fieldset>
    </>
  );
}
