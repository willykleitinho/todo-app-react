import {useState} from 'react';
import Task from './Task';
import Controls from './Controls';


export default function TaskList({tasks, updateTask, deleteTask, clearCompleted}) {

  const [view, setView] = useState('all');

  const filterTasks = (view) => {
    switch(view) {
      case 'active':
        return tasks.filter(task => !task.done);
      case 'completed':
        return tasks.filter(task => task.done);
      default:
        return tasks;
    }
  };

  return (
    <>
      <h2 className='hidden'>Tasks</h2>
      <h3 className='hidden'>Task list</h3>
      <ul id='tasks-list'>
        {filterTasks(view).map(task => 
          <Task key={task.id} title={task.title}
                id={task.id} done={task.done}
                updateTask={updateTask} deleteTask={deleteTask} />)}
      </ul>
      <h3 className='hidden'>Controls</h3>
      <Controls length={tasks.filter(task => !task.done).length} 
                view={view} setView={setView} clearCompleted={clearCompleted}/>
    </>
  );
}