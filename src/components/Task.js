
export default function Task({id, title, done, updateTask, deleteTask}) {
  return (
    <li key={id} className={(done) ? 'task done' : 'task'} data-id={id} draggable='true'>
      <input type='checkbox' id={`task-${id}`} onChange={updateTask} checked={done} className='hidden'/>
      <label htmlFor={`task-${id}`} className='title'>{title}</label>
      <button className='remove-task-button' name='delete-task' onClick={deleteTask}>
        <span className='hidden'>Remove task "{title}"</span>
      </button>
    </li>
  );
}
