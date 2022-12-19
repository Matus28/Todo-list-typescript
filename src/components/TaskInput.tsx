'use strict'

import React from 'react'

import './TaskInput.css'

const TaskInput = () => {
  return (
    <form className='task-input'>
      <input type='text' placeholder='Enter a new task' className='task-input__box'/>
      <button className='task-input__submit' type='submit'>Add</button>
    </form>
  )
}

export default TaskInput