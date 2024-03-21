/* eslint-disable react/prop-types */
import styles from "./Card.module.css"
export function Card({name, email, description}) {
    return (
        <div className={styles.div}>
            <h1>{name}</h1>
            <h1>{email}</h1>
            <p>{description}</p>
        </div>
    )
}