import { FinanceOne } from "./finance"
import style from "./financelist.module.scss"


export const FinanceList = ({finances, onDeleteFinance}) =>{
    
    return(
        <ul className={style.ul}>
            <h2>Resumo financeiro</h2>
            {finances.map((user,index) =>(
                <FinanceOne key={index} desc={user.desc} amount={user.amount} type={user.type} onDeleteFinance={onDeleteFinance} index={index} />
            ))}
        </ul>
    )
}