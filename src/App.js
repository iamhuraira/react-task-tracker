
import React from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import "./index.css";
import { useState } from 'react';
import { useEffect} from 'react';
import Addtask from './components/Addtask';
import Footer from './components/Footer';



function App() {
  const [showAddTask, setshowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTask = async ()=>{
      const taskFromServer= await fetchTasks();
      setTasks(taskFromServer);
    }
    
    getTask();
  },[])
// Fetch Data from Json Server 
  const api = 'http://localhost:5000/tasks';
const fetchTasks = async () => {
  const res = await fetch(api);
  const data = await res.json();
  return data;
};
const fetchTask = async (id) => {
  const res = await fetch(`${api}/${id}`);
  const data = await res.json();
  return data;
};

  // Add Task 
  const onAdd = async (task)=>{
    const res = await fetch(api, {
      method: 'POST',
      headers:{
        'Content-type': 'application/json',
      },
      body:JSON.stringify(task),
    });

    const data =await res.json()
    setTasks([...tasks, data])
    // const tasks = [...task];
    // tasks.push(data);
    //  setTasks({});
    // setTasks(tasks);

    // const id = Math.floor(Math.random()* 10000)+1
    // const newTask = {id, ...task}
    // setTasks([...task, newTask])
  }

  // Delete Task Function 
  const deleteTask = async (id)  =>{
     await fetch(`http://localhost:5000/tasks/${id}`, 
    {method : 'DELETE'});
    setTasks(tasks.filter((task)=>task.id !== id))
  };

  // Toggle Reminder 
  const toggleReminder =async (id)=>{

    const taskToToggle = await fetchTask(id);
    console.log(taskToToggle)
    const updTask = {...taskToToggle, reminder: !taskToToggle.reminder};
    console.log(updTask)

    const res = await fetch(`${api}/${id}`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },

      body: JSON.stringify(updTask),
    });
   
    const data = await res.json();

    /* const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updTask),
    });

    const data = await res.json(); */
    console.log(data)



    setTasks(tasks.map((task)=> task.id === id ? {...task, reminder:data.reminder} : task))
  }

  
  return (
    <div className="container">
      <Header onshowtaskform={()=>setshowAddTask(!showAddTask)} showAdd={showAddTask} />
      { showAddTask &&  <Addtask Addtask={onAdd} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} ontoggle={toggleReminder} />
      ) : (
        'No Task'
      )}
      <Footer />
    </div>
  );
}


// Class Based Component
// class App extends React.Component{
//   render(){
//     return (
//       <div>
//         <h1>Huraira</h1>
//         <Header />
//       </div>
//     );
//   }
// }
export default App;
