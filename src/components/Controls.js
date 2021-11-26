
export default function Controls({length, view, updateView, clearCompleted}) {
  return (
    <div className="controls">
      <p id="items-left">{length} item(s) left</p>
      <ul>
        <li><button name="all-tasks" data-view="all" onClick={updateView} className={(view === 'all') ? 'selected' : ''}>All</button></li>
        <li><button name="active-tasks" data-view="active" onClick={updateView} className={(view === 'active') ? 'selected' : ''}>Active</button></li>
        <li><button name="completed-tasks" data-view="completed" onClick={updateView} className={(view === 'completed') ? 'selected' : ''}>Completed</button></li>
      </ul>
      <p><button name="clear-completed" onClick={clearCompleted}>Clear completed</button></p>
    </div>
  );
}