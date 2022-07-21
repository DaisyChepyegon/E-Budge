import React from "react"
import Budget from "./Budget";
import Expense from "./Expense";


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
     <h2>Expenses</h2>
   </div>
  )
}


export default App;