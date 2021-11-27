import { useState } from 'react';

export default function Form({addTask}) {
  
  const [state, setState] = useState('');

  const handleChange = (e) => setState(e.target.value);

  function check(e) {
    e.preventDefault();
    if (state) {
      addTask(state);
      setState('');
    }
  }

  return (
    <>
      <h2 className="hidden">Add new tasks</h2>
      <form id="add-task-form" className="add-task-form" onSubmit={check}>
        <label htmlFor="add-task-input" className="hidden">New task title</label>
        <input id="add-task-input" className="add-task-input" name="title" maxLength="35" placeholder="Create a new todo..." value={state} onChange={handleChange}/>
        <button className="checkmark"><span className="hidden">Add task</span></button>
      </form>
    </>
  );
}