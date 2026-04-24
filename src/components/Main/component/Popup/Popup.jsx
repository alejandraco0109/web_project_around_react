export default function Popup(props) {
  //los hijos son el contenido de la ventana emergente
  const {onClose, title, children } = props;

  return (
    <div className="popup">
      <div className={`popup__content ${title ? "popup__content_type_form" : ""}`}>
        <button
          aria-label="Close modal"
          className="popup__button popup__button_close"
          type="button"
          onClick={onClose}
        />
        {title && <h3 className="popup__title">{title}</h3>}
        {children}
      </div>
    </div>
  );
}

