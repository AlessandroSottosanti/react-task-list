import taskslist from './assets/tasks.js';

function App() {
const tasks = taskslist.tasks;

  function getUndoneTasks() {
    return tasks.map(task => {
      if(task.state === "backlog" || task.state === "in_progress"){
         return (<li key={task.id}>task: {task.title} - Priorità: {task.priority} - tempo necessario: {task.estimatedTime} min - Stato: {task.state}</li>);
      }
    });
  }

  function getDoneTasks() {
    return tasks.map(task => {
      if(task.state === "completed"){
        return (<li key={task.id}>task: {task.title} - Priorità: {task.priority} - tempo necessario: {task.estimatedTime} min - Stato: {task.state}</li>);
      }
    })
  }

  return (
    <>
      <h1>Hej Ikea!</h1>
      <ul>{getUndoneTasks()}</ul>  
      <ul>{getDoneTasks()}</ul>
    </>
  )
}

export default App
