import { useState } from "react"


export const FinanceForm = ({onAddFinance}) =>{
    const [desc, setDesc] = useState("");
    const [valueP, setValueP] = useState("");
    const [type, setType] = useState("");

    function handleSaveUser(){
        const data = {
            desc, valueP,type
        }
        console.log(data)
        onAddFinance(data)
    }

    return(
        <form onSubmit={(e) =>{
            e.preventDefault();
            handleSaveUser();
        }} >
            <label>Descrição</label>
            <input value={desc}  onChange={e => setDesc(e.target.value)} type="text" placeholder="Digite aqui sua descrição" ></input>
            <p>Ex: Compra de roupas</p>
            <label>Valor (R$)</label>
            <input value={valueP}  onChange={e => setValueP(e.target.value)} type="number"></input>
            <label>Tipo de valor</label>
            <select value={type}  onChange={e => setType(e.target.value)} >
                <option></option>
                <option value="entrada">Entrada</option>
                <option value="saida">Saida</option>
            </select>
            <button type="submit">Inserir valor</button>
        </form>
    )
}