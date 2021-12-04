import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import TaskList from './components/TaskList';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    let json = {
      tasks: [],
      lastId: 0,
    };

    const tasks = window.localStorage.getItem('tasks');
    if (tasks) {
     json = JSON.parse(tasks);
    }

    this.state = json;
    this.updateTask = this.updateTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.addTask = this.addTask.bind(this);
    this.clearCompleted = this.clearCompleted.bind(this);
  }

  componentDidUpdate() {
    window.localStorage.setItem('tasks', JSON.stringify(this.state));
  }
  
  updateTask(e) {
    this.setState(state => {
      return {
        lastId: state.lastId,
        tasks: state.tasks.map(task => {
          if (task.id === parseInt(e.target.parentElement.dataset.id)) {
            return {...task, done: !task.done};
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
        lastId: state.lastId + 1
      };
    });
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
            <Form addTask={this.addTask} />
          </section>
          <section className='tasks'>
            <TaskList tasks={this.state.tasks} updateTask={this.updateTask} 
                      deleteTask={this.deleteTask} clearCompleted={this.clearCompleted} />
          </section>
        </main>
      </div>
    );
  }
}
