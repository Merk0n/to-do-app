import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './selectedtask.scss';

const SelectedTask = ({ task }) => {
  const formattedDate = new Date(task.dueDate).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <>
      <Card className='task-card' style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{task.title}</Card.Title>
          <Card.Text>{formattedDate}</Card.Text>
          <Card.Text>{task.description}</Card.Text>
          <Button variant='secondary'>Delete</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default SelectedTask;
