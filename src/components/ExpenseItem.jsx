import React from 'react'

function ExpenseItem({ expense, deleteExpense }) {

    return (
        <div className='expense-card'>
            <div>
                <h3>{expense.title}</h3>
                <p>{expense.category}</p>
            </div>
            <div>
                <h2>₹{expense.amount}</h2>

                <button
                    onClick={() => deleteExpense(expense.id)}
                > Delete</button>
            </div>
        </div>
    )
}

export default ExpenseItem