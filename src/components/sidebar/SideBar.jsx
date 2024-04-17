import './sidebar.scss';
import Button from 'react-bootstrap/Button';

const SideBar = ({ onStartAddTask, tasks }) => {
  return (
    <div className='sidebar bg-secondary-subtle'>
      <h1>Tasks</h1>
      <Button onClick={onStartAddTask} variant='outline-secondary'>
        + Add task
      </Button>
      <ul className='list-tasks'>
        {tasks.map((task) => (
          <li key={task.id}>
            <button>{task.title}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
