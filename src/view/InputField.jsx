import React, { useState, useRef, useContext } from "react";
import styled from "styled-components";
import {TasksContext} from "../data/MainStorage"

const InputField = () => {
  const {taskList, setTaskList}=useContext(TasksContext)
  // let [taskList, setTaskList] = useState([]);
  let newTaskInput = useRef();

  const taskAdder = () => {
    let newTask = {task: newTaskInput.current.value, taskId: taskList.length, isTaskDone: false  };
    setTaskList([...taskList, newTask]);

    console.log(taskList);
    console.log(newTask);
  };
  return (
    <>
      <input ref={newTaskInput} type="text" placeholder="type a new task" />
      <button onClick={()=>{taskAdder(setTaskList, newTaskInput)}}>123456</button>        
    </>
  );
};
export default InputField;
