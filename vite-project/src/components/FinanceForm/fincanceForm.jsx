import { useState } from "react";
import style from "./style.module.scss";

export const FinanceForm = ({ onAddFinance }) => {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState(""); 
  const [type, setType] = useState("");

  function handleSaveUser() {
    const data = {
      desc, amount, type
    };
    onAddFinance(data);
    setDesc("");
    setAmount("");
    setType("");
  }

    return(
        <form className={style.form} onSubmit={(e) =>{
            e.preventDefault();
            handleSaveUser();
        }} >
            <label>Descrição</label>
            <br/>
            <input required value={desc}  onChange={e => setDesc(e.target.value)} type="text" placeholder="Digite aqui sua descrição" ></input>
            <p>Ex: Compra de roupas</p>
            <label>Valor (R$)</label>
            <br/>
            <input required value={amount}  onChange={e => setAmount(parseFloat(e.target.value))}  type="number" placeholder="1" ></input>
            <br/>
            <label>Tipo de valor</label>
            <br/>
            <select  required value={type}  onChange={e => setType(e.target.value)} >
                <option></option>
                <option value="Entrada">Entrada</option>
                <option value="Saida">Saida</option>
            </select>
            <br/>
            <button type="submit">Inserir valor</button>
        </form>
    )
}