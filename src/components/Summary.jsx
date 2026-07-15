import React from 'react'

const Summary = ({budget,expenses}) => {

    const totalExpense = expenses.reduce(
        (total,item)=> total + item.amount,
        0 
    );

    const balance = budget - totalExpense;

  return (
    <div className='summary'>

        <div className='card'>
            <h3>Budget</h3>
            <h2>₹{budget}</h2>
        </div>

        <div className='card'>
            <h3>Expenses</h3>
            <h2>₹{totalExpense}</h2>
        </div>

        <div className='card'>
            <h3>Balance</h3>
            <h2>₹{balance}</h2>
        </div>

    </div>
  )
}

export default Summary
