import styles from './header.module.css'

function Header() {
    return(
             
        <div className={styles.headerMsg}>
        <h1>Este é meu projeto final</h1>
        <p>É o registro de meus aprendizados na Pretalab.</p>
        </div>
       
    )
}

export default Header