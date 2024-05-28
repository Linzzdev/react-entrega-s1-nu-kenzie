
export const FinanceOne =  ({desc, valueP, type}) => {
    return(
        <li>
        <h2>{desc}</h2>
        <p>{type}</p>
        <p>{valueP}</p>
        <button>Excluir</button>
        </li>
    )
};