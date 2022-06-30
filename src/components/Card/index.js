import styles from './Card.module.scss';

console.log(styles);

function Card(props) {
    return (
        <div className={styles.card}>
          <div className={styles.favorite}>
            <img src="/img/heart-unliked.svg" alt="heart-unliked" />
            </div>
            <img src={props.imageURl}  alt="sneakers_1" width="123px" height="112px" />
           <h5>{props.title}</h5>
           <div className="block ">
           <div className="d-flex ">
            <span >Price:</span>
            
            <b> {props.price} $</b>
           <button className="ml-40 card-button" >
                <img src="img/plus.svg" alt="plus" width="21px" height="21px" />
           </button>
            </div>
          </div>
        </div>
        
    )
}

export default Card;