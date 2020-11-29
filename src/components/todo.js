import React, {useState} from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';

import './todo.scss';

function ToDo (props) {
  const [id, setId] = useState(0);
  const [list, setList] = useState([]);

  
  function addItem(item){
    item._id = Math.random();
    item.complete = false;
    setList(prevItem => {
      return [...prevItem, item];
      });
  };

  function toggleComplete(id) {
    let item = list.filter(i => i._id === id)[0] || {};
    if (item._id) {
      item.complete = !item.complete;
      let map = list.map(listItem => listItem._id === item._id ? item : listItem);
      setList(map);
    }
  }

    return (
      <>
        <header>
        </header>

        <section className="todo">

          <div>
            <TodoForm handleSubmit={addItem} />
          </div>

          <div id="todo-container">
          <h2>
          There are {list.filter(item => !item.complete).length} Items To Complete
          </h2>
            <TodoList
              list={list}
              handleComplete={toggleComplete}
            />
          </div>
        </section>
      </>
    );

}

export default ToDo;