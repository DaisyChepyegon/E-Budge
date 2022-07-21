import React from 'react'

const AddExpenseForm = () => {
  return (
    <form className='form'>
      <div className='frm'>
        <label for="name">Name</label>
        <input required="required" type="text" id="name">

        </input>
      </div>
      <div className='frm'>
      <label for="cost">Cost</label>
        <input required="required" type="text" id="cost">
          
        </input>
      </div>
      <div className='btn'>
        <button type='submit'>Save</button>
      </div>
    </form>
  )
}

export default AddExpenseForm
