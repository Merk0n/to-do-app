import './sidebar.scss';
import Button from 'react-bootstrap/Button';

const SideBar = ({ onStartAddTask }) => {
  return (
    <div className='sidebar bg-secondary-subtle'>
      <h1>Tasks</h1>
      <Button onClick={onStartAddTask} variant='outline-secondary'>
        + Add task
      </Button>
      <ul></ul>
    </div>
  );
};

export default SideBar;
