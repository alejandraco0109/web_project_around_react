export default function NewCard() {
  return (
  <form className="popup__form">
    <h2 className="popup__title">Nuevo lugar</h2>
      <input
        className="popup__input"
        type="text"
        placeholder="Título"
        name="name"
        required
      />
      <input
        className="popup__input"
        type="url"
        placeholder="Enlace a la imagen"
        name="link"
        required
      />
      <button
        className="popup__button"
        type="submit"
      >
        Crear
      </button>
    </form>
  );
}
