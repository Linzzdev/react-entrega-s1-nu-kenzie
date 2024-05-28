import { FinanceOne } from "./finance"


export const FinanceList = ({finances}) =>{
    return(
        <ul>
            {finances.map((user,index) =>(
                <FinanceOne key={index}  desc={user.desc} valueP={user.valueP} type={user.type} index={index} />
            ))}
        </ul>
    )
}