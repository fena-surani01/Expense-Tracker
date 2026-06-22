import { useState,useEffect } from 'react'
import './App.css'
import Expenseform from './Expenseform'
import Expenselist from './Expenselist'


function App() {

  const [expenses,setExpenses] = useState(()=>{
      const saved = localStorage.getItem('expenses')
      return saved ? JSON.parse(saved) : [];
  })

  useEffect(()=>{
    localStorage.setItem("expenses",JSON.stringify(expenses))
  },[expenses])

  const addExpense = (expense) =>{
      setExpenses((prev) => [...prev,expense])
  }
  const deleteExpense = (id) =>{
      setExpenses((prev)=> prev.filter((item) => item.id != id))
  }
  
  const totalAmount = expenses.reduce((sum,index)=>sum + index.amount,0) 

  return (
    <div className="container">
        <h1>💰 Expense Tracker</h1>
       
        <Expenseform onAddExpense={addExpense}/>

        <div className="total">
            <h2>Total Expense: ₹{totalAmount.toFixed(2)}</h2>
        </div>

        <Expenselist expenses={expenses} onDelete={deleteExpense}/>

    </div>
  )
}

export default App
