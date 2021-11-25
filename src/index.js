import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/* function getTasks() {

}

if (tasks) {
  let bool = false;
  let taskName = '';

  // This regex matches either the task name, or a boolean.
  // eg. 'task one' or 'false'
  for (let matched of tasks.match(/(false|true)|[\w\d' ]+/gi)) {
    if (bool) {
      todos.addTask(taskName, (matched == ' false') ? false : true);
      bool = false;
    } else {
      taskName = matched;
      bool = true;
    }
  }
  todos.renderTasks();
} */

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
