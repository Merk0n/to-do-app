import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './components/sidebar/SideBar';
import MainStart from './components/MainStart';
import NewTask from './components/newtask/NewTask';
import './app.scss';

function App() {
  const [taskState, setTaskState] = useState({
    selectedTask: undefined,
    tasks: [],
  });

  function handleTaskAdd() {
    setTaskState((prevState) => {
      return {
        ...prevState,
        selectedTask: null,
      };
    });
  }

  function handleAddTask(taskData) {
    setTaskState((prevState) => {
      const newTask = {
        ...taskData,
        id: Math.random(),
      };

      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  console.log(taskState);

  let content;

  if (taskState.selectedTask === null) {
    content = <NewTask onAdd={handleAddTask} />;
  } else if (taskState.selectedTask === undefined) {
    content = <MainStart onStartAddTask={handleTaskAdd} />;
  }

  return (
    <main className='app'>
      <SideBar onStartAddTask={handleTaskAdd} />
      {content}
    </main>
  );
}

export default App;
