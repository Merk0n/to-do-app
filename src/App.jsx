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

  function handleStartAddTask() {
    setTaskState((prevState) => {
      return {
        ...prevState,
        selectedTask: null,
      };
    });
  }

  function handleCancelAddTask() {
    setTaskState((prevState) => {
      return {
        ...prevState,
        selectedTask: undefined,
      };
    });
  }

  function handleAddTask(taskData) {
    setTaskState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        ...taskData,
        id: taskId,
      };

      return {
        ...prevState,
        selectedTask: undefined,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  let content;

  if (taskState.selectedTask === null) {
    content = <NewTask onAdd={handleAddTask} onCancel={handleCancelAddTask} />;
  } else if (taskState.selectedTask === undefined) {
    content = <MainStart onStartAddTask={handleStartAddTask} />;
  }

  return (
    <main className='app'>
      <SideBar onStartAddTask={handleStartAddTask} tasks={taskState.tasks} />
      {content}
    </main>
  );
}

export default App;
