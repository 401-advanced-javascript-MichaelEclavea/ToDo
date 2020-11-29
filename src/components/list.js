
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAjax from './useAjax';
import { Toast } from 'react-bootstrap';

function TodoList(props){

    const [items, setItems] = useState([]);

    const [data, fetchData] = useAjax('https://swapi.dev/api/people/');

    // async function fetchData(){
      // let response = await axios.get('https://swapi.dev/api/people/');
      // console.log(response);

    // }
  useEffect(() =>{
    fetchData()
  })
   

    useEffect(() =>  {}, [data]);

    return (
    <div>
        <button onClick={() => props.toggleComplete()}></button>
        {props.list.map(item => (
          <Toast
            
            key={item._id} onClose={() => props.toggleComplete(item._id)}>
            
            <Toast.Header closeButton="true">
              <small></small>
              <strong className="mr-auto">{item.assignee}</strong>
            </Toast.Header>
            <Toast.Body>  
                {item.text}    
            </Toast.Body>
            <Toast.Body>
                <small>Difficulty: {item.difficulty}</small>
            </Toast.Body>
          </Toast>
        ))}
      </div>
    
  )

}

export default TodoList;