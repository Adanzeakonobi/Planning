import { useState } from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';

const App = () => {
  const [ tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Study React',
        day: '28th October 2022 by 6:30PM',
        reminder: 'true'
    },
    {
        id: 2,
        text: 'Study Ruby on rails',
        day: '26th October 2022 by 6:30PM',
        reminder: 'true'
    },
    {
        id: 3,
        text: 'Go to the market',
        day: '25th October 2022 by 6:30PM',
        reminder: 'false'
    },
    {
        id: 4,
        text: 'Time to cook',
        day: '24th October 2022 by 6:30PM',
        reminder: 'true'
    }
])


// Delete task
const deleteTask = (id) => {
  console.log('delete', id)
  setTasks(tasks.filter((task) => task.id !== id))
}
  
  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}/> : 'No Tasks Available'}
    </div>
  );
}

export default App;
