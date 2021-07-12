import React, {useState} from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from './Card';
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [filter, setFilter] = useState('2020')

  const filterHandler = filterValue => {
    setFilter(filterValue)
  }

  return (
    <Card className="expenses">
      <ExpenseFilter selected={filter} filterChange={filterHandler}/>
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </Card>
  );
};

export default Expenses;
