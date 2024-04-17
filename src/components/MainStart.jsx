import Button from 'react-bootstrap/Button';

const MainStart = ({ onStartAddTask }) => {
  return (
    <div className='m-5 text-center'>
      <h2>Select a task or start new one</h2>

      <Button onClick={onStartAddTask} variant='outline-secondary'>
        Create new task
      </Button>
    </div>
  );
};

export default MainStart;
