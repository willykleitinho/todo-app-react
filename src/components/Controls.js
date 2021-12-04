
export default function Controls({length, view, setView, clearCompleted}) {

  function handleClick(e) {
    if (e.target.tagName === 'BUTTON') {
      setView(e.target.dataset.view);
    }
  }

  return (
    <div className='controls'>
      <p id='items-left'>{length} item(s) left</p>
      <ul onClick={handleClick}>
        <li><button data-view='all' className={(view === 'all') ? 'selected' : ''}>All</button></li>
        <li><button data-view='active' className={(view === 'active') ? 'selected' : ''}>Active</button></li>
        <li><button data-view='completed' className={(view === 'completed') ? 'selected' : ''}>Completed</button></li>
      </ul>
      <button name='clear-completed' onClick={clearCompleted}>Clear completed</button>
    </div>
  );
}