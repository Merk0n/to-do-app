import './sidebar.scss';
import Button from 'react-bootstrap/Button';

const SideBar = ({ onStartAddTask, tasks, onSelectTask, selectedTaskId }) => {
  return (
    <div className='sidebar bg-secondary-subtle'>
      <h1>Tasks</h1>
      <Button onClick={onStartAddTask} variant='outline-secondary'>
        + Add task
      </Button>
      <ul className='list-tasks'>
        {tasks.map((task) => {
          if (task.id === selectedTaskId) {
            return (
              <li key={task.id}>
                <button className='selected' onClick={onSelectTask}>
                  {task.title}
                </button>
              </li>
            );
          }

          return (
            <li key={task.id}>
              <button onClick={() => onSelectTask(task.id)}>
                {task.title}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
