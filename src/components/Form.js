

export default function Form() {
  return (
    <>
      <h2 className="hidden">Add new tasks</h2>
      <form id="add-task-form" className="add-task-form">
        <label htmlFor="add-task-input" className="hidden">New task title</label>
        <input id="add-task-input" className="add-task-input" name="title" maxlength="35" placeholder="Create a new todo..." />
        <button className="checkmark"><span className="hidden">Add task</span></button>
      </form>
    </>
  );
}