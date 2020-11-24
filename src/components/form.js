
import React, {useState} from 'react';

function TodoForm() {
  const [item, setItem] = useState({
    text: '',
    difficulty: '',
    assignee: ''
  });

  function handleInputChange (e){
    const {name, value} = e.target;
      setItem((prevValue)=>{
        if(name === "text"){
           setItem({
             text: value,
             difficulty: prevValue.difficulty,
             assignee: prevValue.assignee
            }) 
        } if(name === "difficulty"){
           setItem({
             text: prevValue.text,
             difficulty: value,
             assignee: prevValue.assignee
            }) 
        } if(name === "assignee"){
           setItem({
             text: prevValue.text,
             difficulty: prevValue.difficulty,
             assignee: value
            })     
        }
      })
  };

  function handleSubmit(e){
    e.preventDefault();
    e.target.reset();
    setItem(() =>{
      return [item]
    })
  };


    return (
      <>
        <h3>Add Item</h3>
        <form onSubmit={handleSubmit}>
          <label>
            <span>To Do Item</span>
            <input name="text" placeholder="Add To Do List Item" onChange={handleInputChange} />
          </label>
          <label>
            <span>Difficulty Rating</span>
            <input defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange} />
          </label>
          <label>
            <span>Assigned To</span>
            <input type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange} />
          </label>
          <button>Add Item</button>
        </form>
      </>
    );
}

export default TodoForm;