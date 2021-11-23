
export default function Task({id, title, done}) {

  function updateTask(e) {
    console.log(e.target.parentElement.dataset.id);
  }

  return (
    <li className={(done) ? 'task done' : 'task'} data-id={id} draggable='true'>
      <button className='checkmark' name='complete-task' onClick={updateTask}>
        <span className='hidden'>Update task state</span>
      </button>
      <span className='title'>{title}</span>
      <button className='remove-task-button' name='delete-task' onClick={updateTask}>
        <span className='hidden'>Delete task</span>
      </button>
    </li>
  );
}