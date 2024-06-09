import style from "./financelist.module.scss"

export const FinanceOne =  ({desc, amount, type , onDeleteFinance, index}) => {
    return(
        <li className={type == "Entrada" ? style.li : style.lisaida} >
            <div className={style.div1}>
        <h2>{desc}</h2>
        <p>{type}</p>
        </div>
        <div className={style.div2} >
        <p>{amount} R$</p>
        <button onClick={() => onDeleteFinance(index)}>Excluir</button> 
        </div>
        </li>
    )
};