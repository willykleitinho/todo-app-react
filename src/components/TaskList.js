import Task from './Task';
import Controls from './Controls';


export default function TaskList({tasks}) {
  return (
    <>
      <h2 className="hidden">Tasks</h2>
      <h3 className="hidden">Task list</h3>
      <ul id="tasks-list">
        <Task title='test title' id={10} done={true} />
      </ul>
      <h3 className="hidden">Controls</h3>
      <Controls />
    </>
  );
}