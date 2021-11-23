import Header from './components/Header';
import Form from './components/Form';
import TaskList from './components/TaskList';
import Task from './components/Task';

const tasks = [];

export default function App() {
  return (
    <div className='app-container'>
      <Header title='Todo' />
      <main>
        <section>
          <Form />
        </section>
        <section className='tasks'>
          <TaskList tasks={tasks}/>
        </section>
      </main>
    </div>
  );
}
