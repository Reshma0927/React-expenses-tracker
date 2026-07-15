import React, { useEffect, useState } from 'react'
import "./App.css"

import Summary from './components/Summary';
import ExpenseForm from './components/ExpenseForm';
import SearchBar from './components/SearchBar';
import ExpenseList from './components/ExpenseList';

const App = () => {

  const [budget, setBudget] = useState(10000);

  const [expenses, setExpenses] = useState([]);

  const [search, setSearch] = useState('');

  function addExpense(expense) {
    setExpenses((prev) => [...prev, expense])
  }

  function deleteExpense(id) {
    setExpenses(
      expenses.filter(
        (expense) => expense.id !== id
      )
    );
  }

  useEffect(()=>{
    localStorage.setItem(
      "expenses",
      JSON.stringify(expenses)
    )
  },[expenses]);

  useEffect(() => {

  const savedExpenses = JSON.parse(
    localStorage.getItem("expenses")
  );

  if (savedExpenses) {
    setExpenses(savedExpenses);
  }

}, []);



  return (
    <div className='containers'>

      <h1>Expenses Tracker</h1>

      <Summary
        budget={budget}
        expenses={expenses} />

      <ExpenseForm addExpense={addExpense} />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <ExpenseList
        expenses={expenses.filter((expense) =>
          expense.title.toLowerCase().includes(search.toLowerCase()))}

        deleteExpense={deleteExpense}
      />
    </div>
  )
}

export default App
