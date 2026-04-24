export default function Card(props) {
  const { name, link, isLiked } = props.card;
  const { card, handleCardClick, onLikeClick, onDeleteClick } = props;


  return (
    <li className="card">
      <img 
        className="card__image" 
        src={link} 
        alt={name}
        onClick={() => props.handleCardClick(card)}
      />
      <button
        aria-label="Delete card"
        className="card__delete-button"
        type="button"
        onClick={() => onDeleteClick(card._id)}
        ></button>
      
      <div className="card__description">
        <h2 className="card__title">{name}</h2>
        <button
          aria-label="Like card"
          type="button"
          className="card__like-button"
          onClick={() => onLikeClick(card._id)}
        ></button>
      </div>
    </li>
  );
}

