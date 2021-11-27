import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import TaskList from './components/TaskList';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      lastId: 0,
      loaded: false
    };
    this.updateTask = this.updateTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.addTask = this.addTask.bind(this);
    this.clearCompleted = this.clearCompleted.bind(this);
  }
  componentDidMount() {
    (async () => {
      const data = await fetch('https://61967e7baf46280017e7e111.mockapi.io/api/v1/test/tasks');
      const json = await data.json();
  
      this.setState({
        tasks: json.map(task => {return {...task, id: parseInt(task.id)}}),
        lastId: json.length+1,
        loaded: true
      })
    })();
    console.log('mounted');
  }
  
  updateTask(e) {
    this.setState(state => {
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

  deleteTask(e) {
    this.setState(state => {
      return {
        lastId: state.lastId,
        tasks: state.tasks.filter(task => task.id !== parseInt(e.target.parentElement.dataset.id))
      }
    });
  }

  addTask(title) {
    this.setState(state => {
      const tasks = [...state.tasks];
      tasks.push({title: title, id: state.lastId, done: false});
      return {
        tasks: tasks,
        lastId: state.lastId+1
      };
    })
  }

  clearCompleted() {
    this.setState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(task => !task.done)
      }
    });
  }

  render() {
    return (
      <div className='app-container'>
        <Header title='Todo' />
        <main>
          <section>
            <Form addTask={this.addTask}/>
          </section>
          <section className='tasks'>
            <TaskList tasks={this.state.tasks} updateTask={this.updateTask} deleteTask={this.deleteTask} clearCompleted={this.clearCompleted}/>
          </section>
        </main>
      </div>
    );
  }
}
