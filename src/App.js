import React, { useState } from 'react';


let globalId = 0

function App() {

  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  function addTask() {
    if (task !== "") {
      setTodos(oldTodos => {
        setTask('')
        return [...oldTodos, { todo: task, id: globalId++ }]
      })
    }

  }

  function tryToCheckForEnterKey(e) {
    if (e.keyCode === 13) {
      addTask()
    }
  }

  function deleteTask(itemID) {
    setTodos(oldTodos => oldTodos.filter(item => item.id !== itemID))
  }

  function todaysDate() {
    const current = new Date()
    const options = {weekday : 'long', year : 'numeric', month : 'long', day : 'numeric'}
    return current.toLocaleDateString('en-US', options)
  }


  return (

    <div className="flex flex-col overflow-y-auto justify-center min-h-screen bg-gradient-to-r from-black from-10% via-gray-900 via-50% to-gray-950 to-90% items-center" >



      <div className='heading mt-10 shadow-lg shadow-cyan-500/50 bg-gradient-to-r from-green-400 to-blue-500 font-bold h-fit w-fit text-gray-900 font-extrabold p-3 px-10 rounded font-mono text-2xl text-center'><h1>{todaysDate()}</h1></div>




      <div className='add_task_div mt-28 mb-6 rounded-md w-1/3 h-14 bg-gray-950 border-2 border-gray-900 p-1 mt-16'>

        <input placeholder='New Task' className='taskinput rounded-md h-full w-5/6 p-1 text-center text-white bg-gray-950' onKeyDown={tryToCheckForEnterKey} type='text' value={task} onChange={event => {
          setTask(event.target.value)
        }} />



        <button onClick={addTask} type="button" class="addbtn float-right bg-gradient-to-r from-green-400 to-blue-500 rounded-full font-bold font-mono p-1 px-3 m-1">
          +
        </button>






      </div>



      <ul className='tasks_ul mt-1/3 w-1/3'>

        {
          todos.map(item => {
            return <div className='tasks shadow-2xl rounded-md w-full h-fit bg-gray-900 p-1 mt-1' key={item.id}>


              <li className="w-5/6 text-gray-300 font-mono font-thin inline-block text-center p-4 ">{item.todo}</li>


              <button className='inline-block float-right bg-gradient-to-r from-green-400 to-blue-500 rounded-full font-mono font-bold m-1 p-1 px-3' onClick={() => { deleteTask(item.id) }}>-</button>

            </div>


          })
        }

        <div className='tasksleft flex flex-col justify-center items-center h-fit w-full mt-28 mb-10'>

          <div className='font-thin text-md text-white p-3 border-t-2 border-cyan-500'>
            <h1 className='text-center'>{todos.length} Task(s) Left.</h1>
          </div>


        </div>



      </ul>





    </div>
















  );
}

export default App;
