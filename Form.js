import React from 'react'
import {PlusCircleTwoTone , DeleteTwoTone} from '@ant-design/icons';

 function Form({input , InputOnChange, addTodo, deleteAllTodos}) {
   
  return (
    <div>
        <input type="text"  
        value={input} 
        onChange={InputOnChange} 
        placeholder="Enter the to-do list" />

     <button className="delete-all" onClick={addTodo} > <PlusCircleTwoTone /></button>
     <button className="delete-all" onClick={deleteAllTodos}><DeleteTwoTone /></button>
   
 </div>
  )
}
export default Form;