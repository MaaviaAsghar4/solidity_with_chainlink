import React from 'react'
import styles from './Card.module.css'

const Card = ({product, onClickShoe}) => {
    return (
        <div className={styles.card}>
            <div className={styles.imgContainer}>
                <img src={product.img} alt={product.name} />
            </div>
            <div className={styles.textContainer}>
                <p className={styles.name}>{product.name}</p>
                <p className={styles.price}>{product.price} wei</p>
            </div>
            <div className={styles.btnContainer}>
                <button onClick={() => onClickShoe(product.price)}>Buy</button>
            </div>
        </div>
    )
}

export default Card
