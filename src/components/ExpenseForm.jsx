import React, { useState } from 'react'

function ExpenseForm({ addExpense }) {

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState('Food');

    function handleSubmit(e) {

        e.preventDefault();

        if (title.trim() === '' || amount === '') {
            return;
        }

        addExpense({
            id: Date.now(),
            title: title,
            amount: Number(amount),
            category: category,
        });

        setTitle("")
        setAmount("");
        setCategory("Food");
    }
    return (
        <form className='expenses-form' onSubmit={handleSubmit}>

            <input
                type="text"
                placeholder='Expense Title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />

            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}>
                <option>Food</option>
                <option>Travel</option>
                <option>Shopping</option>
                <option>Bills</option>
                <option>Entertainment</option>
            </select>

            <button type='submit'>Add Expense</button>

        </form>
    )
}

export default ExpenseForm