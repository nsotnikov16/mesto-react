export function contentPopupAvatar(avatarRef) {
  return (
    <>
      <fieldset className="popup__fieldset">
        <input
          type="url"
          name="link"
          id="link-update-input"
          placeholder="Ссылка на аватар"
          className="popup__input popup__input_field_link"
          ref={avatarRef}
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

export function contentPopupProfile(name, description, handleChange) {
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
          value={name || ''}
          onChange={handleChange}
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
          value={description  || ''}
          onChange={handleChange}
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

export function contentPopupAddPlace(nameCardRef, linkCardRef) {
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
          ref = {nameCardRef}
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
          ref={linkCardRef}
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


export function hideInputErrorForm (form, validator) {
  form.querySelectorAll('input').forEach(input => {
      validator.hideInputError(input)
  })
}