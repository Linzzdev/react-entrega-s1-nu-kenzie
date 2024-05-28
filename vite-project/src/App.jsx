import { useState } from 'react';
import { Header } from './components/Header/header';
import Styles from './index.module.scss';
import { FinanceForm } from './components/FinanceForm/fincanceForm';
import { FinanceList } from './components/FinanceList/financelist';
import { TotalValue } from './components/TotalValue/totalvalue';

function App() {
  const [finance, setFinance] = useState([]);
  const [totalBalance, setTotalBalance] = useState(0);

  function calculateTotalBalance(financeData = []) {
    return financeData.reduce((total, item) => {
      if (item.type === 'Entrada') {
        return total + item.amount;
      } else if (item.type === 'Saida') {
        return total - item.amount;
      } else {
        return total;
      }
    }, 0);
  }


  function handleSaveUser(user) {
    setFinance(prevFinance => {
      const updatedFinance = [...prevFinance, user];
      setTotalBalance(calculateTotalBalance(updatedFinance));
      return updatedFinance;
    });
  }

  function handleDeleteFinance(index) {
    setFinance(prevFinance => {
      const updatedFinance = prevFinance.filter((_, i) => i !== index);
      setTotalBalance(calculateTotalBalance(updatedFinance));
      return updatedFinance;
    });
  }

  return (
    <>
      <Header />
      <main className={Styles.container}>
        <FinanceForm onAddFinance={handleSaveUser} />
        <FinanceList finances={finance} onDeleteFinance={handleDeleteFinance} />
        {finance.length > 0 && <TotalValue valueTotal={totalBalance} />} 
      </main>
    </>
  );
}

export default App;