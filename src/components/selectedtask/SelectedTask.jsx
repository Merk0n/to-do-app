import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './selectedtask.scss';

const SelectedTask = ({ task, onDelete }) => {
  const formattedDate = new Date(task.dueDate).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <>
      <Card className='task-card'>
        <Card.Body>
          <Card.Title className='task-title'>{task.title}</Card.Title>
          <Card.Text className='task-date'>{formattedDate}</Card.Text>
          <Card.Text className='task-description'>{task.description}</Card.Text>
          <Button onClick={onDelete} variant='outline-danger'>
            Delete
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default SelectedTask;
