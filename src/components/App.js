import React from "react"
import AddExpenseForm from "./AddExpenseForm";
import Budget from "./Budget";
import Expense from "./Expense";
import ExpenseOn from "./ExpenseOn";


import Remaining from "./Remaining";


function App(){
  return(
   <div className="container">
     <h1>Budget Planner</h1>
     <div className="row">
        <div className="column">
          <Budget />
        </div>
        <div className="column">
          <Remaining />
        </div>
        <div className="column">
          <Expense />
        </div>
     </div>
     

    <div className="row2">
    <h1>Expenses</h1>
       <ExpenseOn />
    </div>
    <h1>Add Expense</h1>
    <div>
      <AddExpenseForm />
    </div>
  </div>
  )
}


export default App;