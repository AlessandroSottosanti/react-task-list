import taskslist from './assets/tasks.js';

function App() {
  const tasks = taskslist.tasks;

  function getUndoneTasks() {
    const undoneTasks = tasks.filter(task => task.state === "backlog" || task.state === "in_progress");
    return {
      count: undoneTasks.length,
      elements: undoneTasks.map(task => (
        <li key={task.id}>
          <ul>
            <li><strong>{task.title}</strong></li>
            <li>Priority: {task.priority}</li>
            <li>Est. time: {task.estimatedTime}</li>
            <li>State: {task.state}</li>
          </ul>
        </li>
      ))
    };
  }

  function getDoneTasks() {
    const doneTasks = tasks.filter(task => task.state === "completed");
    return {
      count: doneTasks.length,
      elements: doneTasks.map(task => (
        <li key={task.id}>
          <ul>
            <li><strong>{task.title}</strong></li>
            <li>Priority: {task.priority}</li>
            <li>Est. time: {task.estimatedTime}</li>
            <li>State: {task.state}</li>
          </ul>
        </li>
      ))
    };
  }

  const undoneTasksData = getUndoneTasks();
  const doneTasksData = getDoneTasks();

  return (
    <>
      <h1 className='title'>Task Manager</h1>
      <div className='container'>
        <h2>Current Tasks ({undoneTasksData.count})</h2>
        <ul>{undoneTasksData.elements}</ul>
      </div>

      <hr />
      <div className='container'>
        <h2>Completed Tasks ({doneTasksData.count})</h2>
        <ul>{doneTasksData.elements}</ul>
      </div>
    </>
  );
}

export default App;
