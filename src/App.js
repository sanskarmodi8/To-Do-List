import React, { useState } from 'react';


let globalId = 0

function App() {

  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const current = new Date();

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
    let todays_day = current.getDay() + 1
    let todays_month = current.getMonth() + 1
    let str_date = `${current.getDate()}`
    let str_day = ""
    let str_month = ""
    let str_year = `${current.getFullYear()}`

    if (todays_day === 1) {
      str_day = "Sunday"
    }
    else if (todays_day === 2) {
      str_day = "Monday"
    }
    else if (todays_day === 3) {
      str_day = "Tuesday"
    }
    else if (todays_day === 4) {
      str_day = "Wednesday"
    }
    else if (todays_day === 5) {
      str_day = "Thursday"
    }
    else if (todays_day === 6) {
      str_day = "Friday"
    }
    else if (todays_day === 7) {
      str_day = "Saturday"
    }

    if (todays_month === 1) {
      str_month = "January"
    }
    else if (todays_month === 2) {
      str_month = "February"
    }
    else if (todays_month === 3) {
      str_month = "March"
    }
    else if (todays_month === 4) {
      str_month = "April"
    }
    else if (todays_month === 5) {
      str_month = "May"
    }
    else if (todays_month === 6) {
      str_month = "June"
    }
    else if (todays_month === 7) {
      str_month = "July"
    }
    else if (todays_month === 8) {
      str_month = "August"
    }
    else if (todays_month === 9) {
      str_month = "September"
    }
    else if (todays_month === 10) {
      str_month = "October"
    }
    else if (todays_month === 11) {
      str_month = "November"
    }
    else if (todays_month === 12) {
      str_month = "December"
    }



    return `${str_day}, ${str_date} ${str_month} ${str_year}`
  }


  return (

    <div className="flex flex-col relative overflow-y-auto justify-center min-h-screen bg-gradient-to-r from-black from-10% via-gray-900 via-50% to-gray-950 to-90% items-center" >



      <div className='absolute top-20 shadow-lg shadow-cyan-500/50 bg-gradient-to-r from-green-400 to-blue-500 font-bold h-fit w-fit text-gray-900 font-extrabold p-3 px-10 rounded font-mono text-2xl text-center'><h1>{todaysDate()}</h1></div>




      <div className='absolute top-40 rounded-md w-1/3 h-14 bg-gray-950 border-2 border-gray-900 p-1 mt-16'>

        <input placeholder='New Task' className='rounded-md h-full w-5/6 p-1 text-center text-white bg-gray-950' onKeyDown={tryToCheckForEnterKey} type='text' value={task} onChange={event => {
          setTask(event.target.value)
        }} />



        <button onClick={addTask} type="button" class="float-right bg-gradient-to-r from-green-400 to-blue-500 rounded-full font-bold font-mono p-1 px-3 m-1">
          +
        </button>






      </div>



      <ul className='absolute top-1/3 w-1/3'>

        {
          todos.map(item => {
            return <div className='shadow-2xl rounded-md w-full h-fit bg-gray-900 p-1 mt-1' key={item.id}>


              <li className="w-5/6 text-gray-300 font-mono font-thin inline-block text-center p-4 ">{item.todo}</li>


              <button className='inline-block float-right bg-gradient-to-r from-green-400 to-blue-500 rounded-full font-mono font-bold m-1 p-1 px-3' onClick={() => { deleteTask(item.id) }}>-</button>

            </div>


          })
        }

        <div className='flex flex-col justify-center items-center h-fit w-full mt-40 mb-10'>

          <div className='font-thin text-md text-white p-3 border-t-2 border-cyan-500'>
            <h1 className='text-center'>{todos.length} Task(s) Left.</h1>
          </div>


        </div>



      </ul>





    </div>
















  );
}

export default App;
