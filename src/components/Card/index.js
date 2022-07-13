import React from 'react';
import styles from './Card.module.scss';


function Card({ id, imageURl, title, price, onFavorite, onPlus, favorited = false }) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onClickPlus = () => {
    onPlus({ imageURl, title, price });
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorite({ id, imageURl, title, price })
    setIsFavorite(!isFavorite)
  }

    return (
        <div className={styles.card}>
          <div className={styles.favorite} onClick={onClickFavorite}>
            <img src={isFavorite ? "img/heart-liked.svg" : "img/heart-unliked.svg"} alt="heart-unliked" />
            </div>
            <img src={imageURl}  alt="sneakers_1" width="123px" height="112px" />
           <h5>{title}</h5>
           <div className="block ">
           <div className="d-flex ">
            <span >Price:</span>
            <b> {price} $</b>
           <button className="ml-40 card-button" onClick={onClickPlus}>
                <img className={styles.plus} 
                src={isAdded ? "img/btn-checked.svg" : "img/plus.svg"} 
                alt="plus" width="21px" height="21px" />
           </button>
            </div>
          </div>
        </div>
        
    )
}

export default Card;