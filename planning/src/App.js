import { useState } from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [ tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Study React',
        day: '28th October 2022 by 6:30PM',
        reminder: true,
    },
    {
        id: 2,
        text: 'Study Ruby on rails',
        day: '26th October 2022 by 6:30PM',
        reminder: true,
    },
    {
        id: 3,
        text: 'Go to the market',
        day: '25th October 2022 by 6:30PM',
        reminder: false,
    },
    {
        id: 4,
        text: 'Time to cook',
        day: '24th October 2022 by 6:30PM',
        reminder: false,
    }
])

// Add Task
const addTask = (task) => {
  // console.log(task)
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = { id, ...task}
  setTasks([...tasks, newTask])
}


// Delete task
const deleteTask = (id) => {
  // console.log('delete', id)
  setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle Reminder
const toggleReminder = (id) => {
  console.log('toggle', id)
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
}
  
  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)}/>
      {showAddTask && <AddTask  onAdd={addTask}/>}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) : ('No Tasks Available')}
    </div>
  );
}

export default App;
