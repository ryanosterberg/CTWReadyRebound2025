import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm.js'
function NewExpense(props){
  const [isEditing, setIsEditing] = useState(false);
    function saveExpenseDataHandler(enteredExpenseData) { 
//The parameter will be the data collected at form submission
    const expenseData = {
      ...enteredExpenseData, 		//Break apart the fields of the object
      id: Math.random().toString()	//Every element needs a unique ID
    };
    props.onAddExpense(expenseData);		//Display to the screen to make sure it works.
    setIsEditing(false);
  }
  function startEditingHandler() { //startEditingHandler function should be run when the button is clicked
    setIsEditing(true);
  }
  function stopEditingHandler() {
    setIsEditing(false);
  }
    return(
        <div className='new-expense'>
           {isEditing===false && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing===true && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}></ExpenseForm>}
        </div>
    );
}
export default NewExpense;