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
          <li>
              <strong>{task.title}</strong>
              <span className="tag" style={{ backgroundColor: getTagColor(task.state) }}>
                {task.state}
              </span>
            </li>

            <li>Priority: {task.priority}</li>
            <li>Est. time: {task.estimatedTime}</li>
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
            <li>
              <strong>{task.title}</strong>
              <span className="tag" style={{ backgroundColor: getTagColor(task.state) }}>
                {task.state}
              </span>
            </li>

            <li>Priority: {task.priority}</li>
            <li>Est. time: {task.estimatedTime}</li>
          </ul>
        </li>
      ))
    };
  }

  
  // Funzione per determinare il colore del tag
  const getTagColor = (state) => {
    switch (state) {
      case "backlog":
        return "orangered";
      case "in_progress":
        return "yellowgreen";
      case "completed":
        return "green";
      default:
        return "orangered"; // Colore di default
    }
  };

  const undoneTasksData = getUndoneTasks();
  const doneTasksData = getDoneTasks();

  return (
    <>
      <h1 className='title'>Task Manager</h1>
      <div className='container'>
        <div className='list-container'>
          <h2>Current Tasks ({undoneTasksData.count})</h2>
          <ul>{undoneTasksData.elements}</ul>
        </div>

        <div className='list-container'>
          <h2>Completed Tasks ({doneTasksData.count})</h2>
          <ul>{doneTasksData.elements}</ul>
        </div>

      </div>
    </>
  );
}

export default App;
