import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from './Card';

const ExpenseItem = (props) => {

  // const [title, setTitle] = useState(props.title)

  // const handleClick = () => {
  //   setTitle('updated')
  // }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={handleClick}>Click</button> */}
    </Card>
  );
};

export default ExpenseItem;
