import React from 'react'
import ExpenseItem from './ExpenseItem'

const ExpenseOn = () => {
  const expenseList=[
    {id:1, name:"shopping", cost: 3000},
    {id:2, name:"holiday", cost: 2000},
    {id:3, name:"transportation", cost: 1000},
    {id:4, name:"fuel", cost: 1000},
    {id:5, name:"healthcare", cost: 500},
    {id:1, name:"hair", cost: 500}

  ]
  return (
    <div>
      <ul>
        {expenseList.map((expenses) => (
          <ExpenseItem 
          id={expenses.id} 
          name={expenses.name} 
          cost={expenses.cost}

          />
        ))}
      </ul>
    </div>
  )
}

export default ExpenseOn
