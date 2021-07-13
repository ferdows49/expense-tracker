import React, {useState} from "react";
import "./App.css";
import Expenses from "./Components/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

const expenses = [
  { id: 1,title: "Health Insurance", amount: 120, date: new Date(2021, 4, 20) },
  { id: 2,title: "Car Insurance", amount: 250, date: new Date(2020, 1, 10) },
  { id: 3,title: "Internet", amount: 60, date: new Date(2020, 7, 25) },
  { id: 4,title: "House rent", amount: 450, date: new Date(2020, 5, 25) },
];

function App() {
  const [expense, setExpense] = useState(expenses)

  const newExpense = (newData) => {
    setExpense((previousdata) => {
      return [newData, ...previousdata]
    })
  }

  return (
    <div>
      <NewExpense newExpense={newExpense} />
      <Expenses items={expense} />
    </div>
  );
}

export default App;
