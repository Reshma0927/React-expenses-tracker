import React from 'react'
import ExpenseItem from './ExpenseItem'

function ExpenseList({ expenses, deleteExpense }) {

    return (
        <div className='expense-list'>
            {
                expenses.length === 0 ?

                    <p>NO expenses Addes.</p> :

                    expenses.map((expense) => (
                        <ExpenseItem
                            key={expense.id}
                            expense={expense}
                            deleteExpense={deleteExpense} />
                    ))
            }
        </div>
    )
}

export default ExpenseList