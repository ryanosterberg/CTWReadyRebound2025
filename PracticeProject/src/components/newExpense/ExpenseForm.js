import React, {useState} from 'react';
import './ExpenseForm.css';


function ExpenseForm(props){
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    function titleChangeHandler(event){
    setEnteredTitle(event.target.value); //saves a copy of what is in the input box into enteredTitle to be used at a later time
    };
    function amountChangeHandler(event){
    setEnteredAmount(event.target.value);
};
function dateChangeHandler(event){
    setEnteredDate(event.target.value);
};
function submitHandler(event){
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount, //the + converts a String to a number
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
};


    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler}></input>
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}></input>
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}></input>
        </div>
         <div className='new-expense__actions'>
          <button type="button" onClick={props.onCancel}>Cancel</button>
          <button type='submit'>Add Expense</button>
  </div>
      </div>

        </form>
    );
}


export default ExpenseForm;
