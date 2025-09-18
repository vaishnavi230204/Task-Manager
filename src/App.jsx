import React from 'react'
import { ListTodo ,Plus} from 'lucide-react';
import Item from './compo/Item';
import { useState, useEffect } from 'react';
import './App.css';


const App = () => {

  const [todo, settodo] = useState("")
  const [todos, settodos] = useState([])

  const handelchange=(e)=>{
    settodo(e.target.value)
  
  }

  const handeladd=()=>{
       settodos([...todos,{ text: todo, checked: false }]);
        settodo("")
        console.log(todos)
  }

  const handelDelete = (idx) => {
  const newtodos = todos.filter((_, i) => i !== idx);
  settodos(newtodos);
};

const handelChange = (idx) => {
  settodo(todos[idx].text); // show selected todo in input box
  const newtodos = todos.filter((_, i) => i !== idx); // remove it from list
  settodos(newtodos);
};


const toggleChecked = (idx) => {
  const newTodos = [...todos];
  newTodos[idx].checked = !newTodos[idx].checked;
  settodos(newTodos);
};



useEffect(() => {
  const savedTodos = localStorage.getItem("todos");
  if (savedTodos) {
    settodos(JSON.parse(savedTodos));
  }
}, []);


useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);


  return (
    <div className='flex justify-center items-center w-screen h-screen'>

      <div className="rounded-2xl border-white h-[80%] w-[30%] bg-violet-200 z-10" >

        <div className='flex items-center m-5 '>
          <ListTodo className="h-8 w-8 text-white " />
          <h2 className='text-white mx-5 text-2xl font-bold'>Todo List</h2>
        </div>

        <div className='flex justify-center items-center my-3'>
          <input onChange={handelchange} value={todo}
                type="text"
                className='bg-white min-h-15 w-full mx-5 rounded-xl px-4' placeholder='Enter your Task.....'/>
          <Plus onClick={handeladd} className='mr-5 cursor-pointer '/>
        </div>


      {todos.length===0 && <div className='m-5'>No todos to Disply</div>}


     <div className='overflow-y-auto max-h-[75%] px-3'>
        {todos.map(function(item,idx){

        return(
          
            <Item key={idx} data={item} onDelete={() => handelDelete(idx)} onChange={() => handelChange(idx)} onToggle={() => toggleChecked(idx)}/>
       
        )
       })}
     </div>

      </div>
    </div>
  )
}

export default App
