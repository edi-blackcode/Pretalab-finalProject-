import styles from './footer.module.css'

function Footer() {
    return(
        <div className={styles.footerMsg}>
        <p>Author: Edile Rodrigues</p>
        <p>
        <a href="mailto:edilerodrigues89@gmail.com">contact-me</a>
        </p>
        </div>
    )
}

export default Footer