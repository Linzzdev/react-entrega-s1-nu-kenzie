import styles from './style.module.scss'

export const Header = () =>{
    return(
        <header className={styles.header} >
            <div className={styles.container}>
            <h1>Nu <span>Kenzie</span></h1>
            </div>
        </header>
    )
}