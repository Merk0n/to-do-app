import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './newtask.scss';
import { useRef } from 'react';

const NewTask = ({ onAdd }) => {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <Form className='new-task'>
      <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
        <Form.Label>TITLE</Form.Label>
        <Form.Control ref={title} type='text' placeholder='Task title' />
      </Form.Group>
      <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
        <Form.Label>DESCRIPTION</Form.Label>
        <Form.Control ref={description} as='textarea' rows={3} />
      </Form.Group>
      <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
        <Form.Label>DUE DATE</Form.Label>
        <Form.Control
          ref={dueDate}
          type='date'
          placeholder='name@example.com'
        />
      </Form.Group>
      <div>
        <Button onClick={handleSave} className='m-1' variant='secondary'>
          Save
        </Button>
        <Button variant='secondary'>Cancel</Button>
      </div>
    </Form>
  );
};

export default NewTask;
