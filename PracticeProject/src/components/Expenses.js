import React, { useState } from 'react';
import "./Expenses.css"
import ExpenseList from './ExpenseList.js';
import Card from './Card.js';
import ExpensesFilter from './ExpensesFiler.js';
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);
  }
  const filteredExpenses = props.items.filter(expenses =>{
    return expenses.date.getFullYear().toString() === filteredYear;
  });

  }
  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expensesElement) => (
      <ExpenseItem
        key={expensesElement.id}
        title={expensesElement.title}
        amount={expensesElement.amount}
        date={expensesElement.date}
      ></ExpenseItem>
    ))};  
  return (
    <Card className="expenses">
         <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler}></ExpensesFilter>
         {expensesContent}
        <ExpenseList items={filteredExpenses}></ExpenseList>
    </Card>
  );

export default Expenses;