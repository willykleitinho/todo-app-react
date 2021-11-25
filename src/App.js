import React, {useState} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import TaskList from './components/TaskList';

const tasks = {
  lastId: 2,
  tasks: [
    { id: 1, title: 'nice task', done: true }
  ]
}


export default function App() {
  const [state, setState] = useState(tasks);

  function updateTask(e) {
    setState(state => {
      return {
        lastId: state.lastId,
        tasks: state.tasks.map(task => {
          if (task.id == e.target.parentElement.dataset.id) {
            return {...task, done: !task.done}
          } else {
            return task;
          }
        })
      }
    });
  }

  function deleteTask(e) {
    setState(state => {
      return {
        lastId: state.lastId,
        tasks: state.tasks.filter(task => task.id != e.target.parentElement.dataset.id)
      }
    });
  }

  function addTask(title) {
    setState(state => {
      const tasks = [...state.tasks];
      tasks.push({title: title, id: state.lastId, done: false});
      return {
        tasks: tasks,
        lastId: state.lastId+1
      };
    })
  }

  return (
    <div className='app-container'>
      <Header title='Todo' />
      <main>
        <section>
          <Form addTask={addTask}/>
        </section>
        <section className='tasks'>
          <TaskList tasks={state.tasks} updateTask={updateTask} deleteTask={deleteTask}/>
        </section>
      </main>
    </div>
  );
}
