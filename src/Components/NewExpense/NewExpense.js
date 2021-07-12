import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    
    const saveExpenseData = (data) => {
        const expenseData = {
            ...data,
            id: Math.random().toString()
        }

        return props.newExpense(expenseData)
    }
    return (
        <div className="new-expense">
            <ExpenseForm onSaveData={saveExpenseData} />
        </div>
    );
}

export default NewExpense;