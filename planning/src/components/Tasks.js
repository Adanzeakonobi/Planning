const tasks = [
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
]

const Tasks = () => {
    return(
        <div>
            {tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>))}
        </div>
    )
}

export default Tasks;
