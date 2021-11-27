import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import TaskList from './components/TaskList';

export default function App() {

  
  const [state, setState] = useState({
    tasks: [],
    lastId: 0,
    loaded: false
  });

  const fetchTasks = async () => {
    const data = await fetch('https://61967e7baf46280017e7e111.mockapi.io/api/v1/test/tasks');
    const json = await data.json();

    setState({
      tasks: json.map(task => {return {...task, id: parseInt(task.id)}}),
      lastId: json.length+1,
      loaded: true
    });
  };
  
  useEffect(() => {
    fetchTasks();
    console.log('yeah');
  }, []);

  function updateTask(e) {
    setState(state => {
      return {
        lastId: state.lastId,
        tasks: state.tasks.map(task => {
          if (task.id === parseInt(e.target.parentElement.dataset.id)) {
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
        tasks: state.tasks.filter(task => task.id !== parseInt(e.target.parentElement.dataset.id))
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

  function clearCompleted() {
    setState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(task => !task.done)
      }
    });
  }

  return (
    <div className='app-container'>
      <Header title='Todo' />
      <main>
        <section>
          <Form addTask={addTask}/>
        </section>
        <section className='tasks'>
          <TaskList tasks={state.tasks} updateTask={updateTask} deleteTask={deleteTask} clearCompleted={clearCompleted}/>
        </section>
      </main>
    </div>
  );
}
