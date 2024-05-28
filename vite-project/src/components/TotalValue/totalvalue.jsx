import styles from './style.module.scss'

export const TotalValue = ({valueTotal}) =>{
    return(
        <section className={styles.section}>
            <h2>Valor total: <span>R$ {valueTotal}</span></h2>
            <p>O valor se refere ao saldo</p>
            
        </section>
    )
}