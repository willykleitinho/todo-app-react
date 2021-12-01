
export default function Task({id, title, done, updateTask, deleteTask}) {
  return (
    <li key={id} className={(done) ? 'task done' : 'task'} data-id={id} draggable='true'>

      <input type="checkbox" id={`task-${id}`} onChange={updateTask} checked={(done) ? true : false} className='hidden'/>
      <label htmlFor={`task-${id}`} className='title' checked >{title}</label>
      <button className='remove-task-button' name='delete-task' onClick={deleteTask}>
        <span className='hidden'>Remove task "{title}"</span>
      </button>
    </li>
  );
}


/* 

    <li key={id} className={(done) ? 'task done' : 'task'} data-id={id} draggable='true'>
      <button className='checkmark' name='complete-task' onClick={updateTask}>
        <span className='hidden'>Update task "{title}"</span>
      </button>
      <span className='title'>{title}</span>
      <button className='remove-task-button' name='delete-task' onClick={deleteTask}>
        <span className='hidden'>Delete task "{title}"</span>
      </button>
    </li>

*/