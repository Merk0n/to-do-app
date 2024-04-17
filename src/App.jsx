import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './components/sidebar/SideBar';
import MainStart from './components/MainStart';
import NewTask from './components/newtask/NewTask';
import './app.scss';
import SelectedTask from './components/selectedtask/SelectedTask';

function App() {
  const [taskState, setTaskState] = useState({
    selectedTask: undefined,
    tasks: [],
  });

  function handleSelectTask(id) {
    setTaskState((prevState) => {
      return {
        ...prevState,
        selectedTask: id,
      };
    });
  }

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

  const selectedTask = taskState.tasks.find(
    (task) => task.id === taskState.selectedTask
  );

  let content = <SelectedTask task={selectedTask} />;

  if (taskState.selectedTask === null) {
    content = <NewTask onAdd={handleAddTask} onCancel={handleCancelAddTask} />;
  } else if (taskState.selectedTask === undefined) {
    content = <MainStart onStartAddTask={handleStartAddTask} />;
  }

  return (
    <main className='app'>
      <SideBar
        onStartAddTask={handleStartAddTask}
        tasks={taskState.tasks}
        onSelectTask={handleSelectTask}
        selectedTaskId={taskState.selectedTask}
      />
      {content}
    </main>
  );
}

export default App;
