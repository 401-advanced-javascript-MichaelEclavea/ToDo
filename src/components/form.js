import React, {useState} from 'react';
import {Form} from 'react-bootstrap';
function TodoForm (props) {


  const [state, setState] = useState({
    item: {}
  })
  
  function handleInputChange (e) {
    setState({ item: {...state.item, [e.target.name]: e.target.value } });
  };

  function handleSubmit(e) {
    e.preventDefault();
    e.target.reset();
    props.handleSubmit(state.item);
    const item = {};
    setState({item});
  };

    return (
      <div id="form">
   
        <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
        <h2 id="add">Add Item</h2>

            <Form.Label>To Do Item</Form.Label>
            <Form.Control className="text-muted"
              name="text"
              placeholder="Add To Do List Item"
              onChange={handleInputChange}
            />



          <Form.Group controlId="formBasicEmail"></Form.Group>
            <Form.Label>Difficulty Rating</Form.Label>
            <Form.Control defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange} />


            <Form.Label>Assigned To</Form.Label>
            <input type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange} />
          </Form.Group>
          <button>Add Item</button>
        </Form>
      </div>
    );
}

export default TodoForm;
