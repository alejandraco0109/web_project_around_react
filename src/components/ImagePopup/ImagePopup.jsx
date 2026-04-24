import React from "react";

export default function ImagePopup({ card, onClose }) {
  return (
    <div className="popup popup_type_image">
      <div className="popup__content popup__content_content_image">
        <button
          type="button"
          className="popup__close"
          aria-label="Close popup"
          onClick={onClose}
        >
          🞩
        </button>

        <img
          className="popup__image"
          src={card.link}
          alt={card.name}
        />

        <p className="popup__paragraph">{card.name}</p>
      </div>
    </div>
  );
}
