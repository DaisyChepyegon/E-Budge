import React from 'react'
import {TiDelete} from "react-icons/ti"


const ExpenseItem = (props) => {
  return (
    <div>
      <li className='lists'>
       {props.name} :
        <div className='list'>
          <span >
            Ksh {props.cost}
         </span>
          <TiDelete size="0.5cm"></TiDelete>
          
        </div>
      </li>
    </div>
  )
}

export default ExpenseItem
