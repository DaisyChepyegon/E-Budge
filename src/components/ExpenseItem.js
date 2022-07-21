import React from 'react'
import {TiDelete} from "react-icons/ti"


const ExpenseItem = ({props}) => {
  return (
    <div>
      <li className='lists'>
        {props.name}
        <div>
          <span className='budge'>
            {props.cost}
            <TiDelete size="i.5cm"></TiDelete>
          </span>
        </div>
      </li>
    </div>
  )
}

export default ExpenseItem
