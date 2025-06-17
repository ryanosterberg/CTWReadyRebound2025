import React from 'react';
import ExpenseDate from "./ExpenseDate.js";
import Card from './Card.js'
import ".ExpenseItem.css"; //import statement for css styling
function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
function clickHandler(){
  setTitle('Update');
} 
  
  return (
        <Card className='expense-item'>
        <ExpenseDate date={props.date}></ExpenseDate>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
    );  
}
export default ExpenseItem;
//note how we use className instead of class (traditional CSS) in React
//we used .toISOString for the Date because we can't output the reference to the Date object when they're numbers. MUST output it as a String
/* the return from before, it looks important enough
return (
        <div className = 'expense-item'> 
            <div> June 10th 2022</div>
            <div className = 'expense-item__description'>
                <h2> Car Insurance</h2>
                <div className = 'expense-item__price'> $294.67</div>
            </div>
        </div>
    );

    the old expenseDate one
<div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
*/