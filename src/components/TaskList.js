import Task from './Task';
import Controls from './Controls';


export default function TaskList({tasks, updateTask, deleteTask}) {
  return (
    <>
      <h2 className="hidden">Tasks</h2>
      <h3 className="hidden">Task list</h3>
      <ul id="tasks-list">
        {tasks.map(task => 
          <Task key={task.id} title={task.title} id={task.id} done={task.done} updateTask={updateTask} deleteTask={deleteTask} />)}
      </ul>
      <h3 className="hidden">Controls</h3>
      <Controls length={tasks.length}/>
    </>
  );
}