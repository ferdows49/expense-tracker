import "./App.css";
import Expenses from "./Components/Expenses";

function App() {
  const expenses = [
    { title: "Health Insurance", amount: 120, date: new Date(2020, 4, 20) },
    { title: "Car Insurance", amount: 250, date: new Date(2020, 1, 10) },
    { title: "Internet", amount: 60, date: new Date(2020, 7, 25) },
    { title: "House rent", amount: 450, date: new Date(2020, 5, 25) },
  ];
  return (
    <div>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
