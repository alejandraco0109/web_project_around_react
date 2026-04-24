import React, { useState } from 'react';
import Card from "./component/Card/Card.jsx";
import Popup from './component/Popup/Popup.jsx';
import NewCard from './component/Popup/form/Newcard/NewCard.jsx';
import EditProfile from './component/Popup/EditProfile/EditProfile.jsx';
import EditAvatar from './component/Popup/EditAvatar/EditAvatar.jsx';
import ImagePopup from "../ImagePopup/ImagePopup.jsx";;
import image from "../../images/me.jpg";

// Using Popup component
const PopupComponent = Popup;

const cards = [
  {
    isLiked: true,
    _id: '5d1f0611d321eb4bdcd707dd',
    name: 'Yosemite Valley',
    link: 'src\\images\\moved_yosemite.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:10:57.741Z',
  },
  {
    isLiked: true,
    _id: '5d1f064ed321eb4bdcd707de',
    name: 'Lake Louise',
    link: 'src\\images\\moved_lake-louise.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:11:58.324Z',
  },
  {
    isLiked: true,
    _id: '5d1f0667d321eb4bdcd707df',
    name: 'Bald Mountains',
    link: 'src\\images\\moved_bald-mountains.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:12:39.311Z',
  },
  {
    isLiked: true,
    _id: '5d1f068cd321eb4bdcd707e0',
    name: 'Latemar',
    link: 'src\\images\\moved_latemar.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:13:32.456Z',
  },
  {
    isLiked: true,
    _id: '5d1f06a7d321eb4bdcd707e1',
    name: 'Vanoise National Park',
    link: 'src\\images\\moved_vanoise.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',  
    createdAt: '2019-07-05T08:14:15.606Z',
  },
  {
    isLiked: true, 
    _id: '5d1f06c0d321eb4bdcd707e2',
    name: 'Lago di Braies',
    link: 'src\\images\\moved_lago.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:14:56.906Z',
  },
  
];

console.log(cards);

export default function Main() {
const [selectedCard, setSelectedCard] = useState(null);

function handleCardClick(card) {
  setSelectedCard(card);
}

function handleCloseImagePopup() {
  setSelectedCard(null);
}

  const [popup, setPopup] = useState(null);

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  function handleDeleteClick(cardId) {
    console.log("Delete card", cardId);
  }

  function handleLikeClick(cardId) {
    console.log("Like card", cardId);
  }


  const newCardPopup = {
    title: "Nuevo lugar",
    children: <NewCard />,
  };

  const editProfilePopup = {
    title: "Editar perfil",
    children: <EditProfile />,
  };

  const editAvatarPopup = {
    title: "Cambiar foto de perfil",
    children: <EditAvatar />,
  };



  return (
    <main className="main">
      <div className="main__profile">
        <div
          className="main__content-image"
          onClick={() =>
            handleOpenPopup({
              title: "Cambiar foto de perfil",
              children: <EditAvatar />,
            })
          }
        >
          <img
            src={image}
            alt="avatar"
            className="main__profile-image"
          />
        </div>

        <div className="main__content-paragraph">
          <p className="main__paragraph main__paragraph_name">
            Alejandra Toro Arcila
          </p>
          <p className="main__paragraph main__paragraph_about">
            Estudiante
          </p>

          <button
            className="main__button main__button_edit"
            onClick={() =>
              handleOpenPopup({
                title: "Editar perfil",
                children: <EditProfile />,
              })
            }
          >
            🖌
          </button>
        </div>

        <button
          className="main__button main__button_add"
          onClick={() =>
            handleOpenPopup({
              title: "Nuevo lugar",
              children: <NewCard />,
            })
          }
        >
          🞣
        </button>
      </div>

      <div className="main__gallery">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            handleCardClick={handleCardClick}
            onDeleteClick={handleDeleteClick}
            onLikeClick={handleLikeClick}
          />
        ))}
      </div>

{selectedCard && (
        <ImagePopup card={selectedCard} onClose={handleCloseImagePopup} />
      )}

      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title} isOopen={true}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}