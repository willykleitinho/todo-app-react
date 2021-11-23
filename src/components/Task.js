import { useState } from 'react';


export default function Task({id, title, done}) {

  const [state, setState] = useState({id, title, done});

  function updateTask(e) {
    console.log(e.target.parentElement.dataset.id);
  }

  return (
    <li className={(state.done) ? 'task done' : 'task'} data-id={state.id} draggable='true'>
      <button className='checkmark' name='complete-task' onClick={() => setState({...state, done: !state.done})}>
        <span className='hidden'>Update task state</span>
      </button>
      <span className='title'>{state.title}</span>
      <button className='remove-task-button' name='delete-task'>
        <span className='hidden'>Delete task</span>
      </button>
    </li>
  );
}