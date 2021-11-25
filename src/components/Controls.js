
export default function Controls({length}) {
  return (
    <div className="controls">
      <p id="items-left">{length} item(s) left</p>
      <ul>
        <li><button name="all-tasks" data-view="all" className="selected">All</button></li>
        <li><button name="active-tasks" data-view="active">Active</button></li>
        <li><button name="completed-tasks" data-view="completed">Completed</button></li>
      </ul>
      <p><button name="clear-completed">Clear completed</button></p>
    </div>
  );
}