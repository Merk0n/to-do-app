import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './newtask.scss';
import { useRef, useState } from 'react';

const NewTask = ({ onAdd, onCancel }) => {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    //validation
    if (
      enteredTitle.trim().length === 0 ||
      enteredDescription.trim().length === 0 ||
      enteredDueDate.trim().length === 0
    ) {
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  //validation
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!formData.title.trim()) {
      validationErrors.title = 'title is required';
    }

    if (!formData.description.trim()) {
      validationErrors.description = 'description is required';
    }

    if (!formData.date.trim()) {
      validationErrors.date = 'date is required';
    }

    setErrors(validationErrors);
  };

  return (
    <Form onSubmit={handleSubmit} className='new-task'>
      <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
        <Form.Label>TITLE</Form.Label>
        <Form.Control
          onChange={handleChange}
          name='title'
          ref={title}
          type='text'
          placeholder='Task title'
        />
        <div className='error-text'>
          {errors.title && <span className='error-text'>{errors.title}</span>}
        </div>
      </Form.Group>
      <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
        <Form.Label>DESCRIPTION</Form.Label>
        <Form.Control
          onChange={handleChange}
          name='description'
          ref={description}
          as='textarea'
          rows={3}
        />
        <div className='error-text'>
          {errors.description && <span>{errors.description}</span>}
        </div>
      </Form.Group>
      <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
        <Form.Label>DUE DATE</Form.Label>
        <Form.Control
          onChange={handleChange}
          name='date'
          ref={dueDate}
          type='date'
          placeholder='name@example.com'
        />
        <div className='error-text'>
          {errors.date && <span className='error-text'>{errors.date}</span>}
        </div>
      </Form.Group>
      <div>
        <Button
          onClick={handleSave}
          type='submit'
          className='m-1'
          variant='secondary'
        >
          Save
        </Button>
        <Button onClick={onCancel} variant='secondary'>
          Cancel
        </Button>
      </div>
    </Form>
  );
};

export default NewTask;
