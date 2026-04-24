export default function EditProfile() {
  return (
    <form className="popup__form" id="edit-profile-form">
      <h3 className="popup__title">Editar perfil</h3>

      <input
        className="popup__input popup__input_name"
        name="name"
        placeholder="Nombre"
        minLength="2"
        maxLength="40"
        required
        type="text"
      />

      <span className="popup__error popup__input_name-error popup__error_hidden"></span>

      <input
        className="popup__input popup__input_about"
        name="description"
        placeholder="Acerca de mí"
        minLength="2"
        maxLength="200"
        required
        type="text"
      />

      <span className="popup__error popup__input_about-error popup__error_hidden"></span>

      <button className="button popup__button_save" type="submit">
        Guardar
      </button>
    </form>
  );
}