import React from 'react'
import styles from './Card.module.css'

const Card = ({product}) => {
    return (
        <div className={styles.card}>
            <div className={styles.imgContainer}>
                <img src={product.img} alt={product.name} />
            </div>
            <div className={styles.textContainer}>
                <p className={styles.name}>{product.name}</p>
                <p className={styles.price}>RS. {product.price}</p>
            </div>
            <div className={styles.btnContainer}>
                <button>Buy</button>
            </div>
        </div>
    )
}

export default Card
