import React from 'react';
import ContentLoader from "react-content-loader";

import AppContext from '../../context';

import styles from './Card.module.scss';


function Card({ id, imageURl, title, price, onFavorite, onPlus, favorited = false, added = false, loading = false }) {

  const { isItemAdded } = React.useContext(AppContext);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onClickPlus = () => {
    onPlus({ id, title, imageURl, price });
  };

  const onClickFavorite = () => {
    onFavorite({ id, imageURl, title, price })
    setIsFavorite(!isFavorite)
  }

    return (
        <div className={styles.card}>
          {
            loading ? <ContentLoader 
            speed={2}
            width={155}
            height={250}
            viewBox="0 0 155 265"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb">
            <rect x="1" y="0" rx="10" ry="10" width="155" height="155" /> 
            <rect x="0" y="167" rx="5" ry="5" width="155" height="15" /> 
            <rect x="0" y="187" rx="5" ry="5" width="100" height="15" /> 
            <rect x="1" y="234" rx="5" ry="5" width="80" height="25" /> 
            <rect x="124" y="230" rx="10" ry="10" width="32" height="32" /> 
            </ContentLoader> : 
            <>
            <div className={styles.favorite} onClick={onClickFavorite}>
                <img src={isFavorite ? "img/heart-liked.svg" : "img/heart-unliked.svg"} alt="heart-unliked" />
              </div>
                <img src={imageURl}  alt="sneakers_1" width="100%" height="135px" />
              <h5>{title}</h5>
              <div className="block ">
              <div className="d-flex ">
                  <span >Price:</span>
                  <b> {price} $</b>
              <button className="ml-30 card-button" onClick={onClickPlus}>
                <img className={styles.plus} 
                src={isItemAdded(id) ? "img/btn-checked.svg" : "img/plus.svg"} 
                alt="plus" width="21px" height="21px" />
              </button>
            </div>
          </div>
            </>
          }

          
      </div>
        
    )
}

export default Card;

