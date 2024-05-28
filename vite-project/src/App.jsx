import { useState } from 'react'
import { Header } from './components/Header/header'
import Styles from './index.module.scss'
import { FinanceForm } from './components/FinanceForm/fincanceForm'
import { FinanceList } from './components/FinanceList/financelist'





function App() {
  const [finance, setFinance] = useState([])

  function handleSaveUser(user){
    let newFinance = [...finance]

    newFinance.push(user)
    setFinance(newFinance)
  }

  

  return(
    <>
    <Header/>
    <FinanceForm onAddFinance={handleSaveUser} />
    <FinanceList finances={finance} />
    </>
  )
}

export default App
