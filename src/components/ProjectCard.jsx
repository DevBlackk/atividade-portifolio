/* eslint-disable react/prop-types */
import styles from "./Card.module.css"
export function ProjectCard({title, link, description}) {

    return (
        <div className={styles.div}>
            <h1>{title}</h1>
            <a href={link}>Confira!</a>
            <p>{description}</p>
        </div>
    )
}
