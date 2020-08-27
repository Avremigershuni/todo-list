import React, { useState, useRef } from "react";
import styled from "styled-components";
import { TasksContext } from "../data/MainStorage";

const Task = ({list})=>{
    const {
        taskList,
        setTaskList,
        setComplitedTasks,
        complitedTasks
      } = useContext(TasksContext);

      const isTaskComplited = (item, list, setTaskList) => {
        if (!item.isTaskDone) {
          console.log('task NOT done')
          setTaskList([...list, item.isTaskDone === true]);
          setComplitedTasks([
            ...complitedTasks,
            { task: item.task, taskId: complitedTasks.length, isTaskDone: true },
          ]);
          
          setTaskList(list.filter((task) => {
            console.log('task: ', task)
            console.log('item: ', item)
            
            return task.taskId !== item.taskId
          }));
        } else {
          console.log('task done')
          setComplitedTasks([item.isTaskDone === false]);
          setTaskList([
            ...list,
            { task: item.task, taskId: list.length, isTaskDone: false },
          ]);
          setComplitedTasks(complitedTasks.filter((task) => task.taskId !== item.taskId));
        }
      };
    return(
        <div>
             <TaskWrapper key={item.id}>
            <TaskArea>{item.task}</TaskArea>
            <button
              onClick={() => {
                isTaskComplited(item, taskList, setTaskList);
              }}
            >
              {item.isTaskDone === false ? "done" : null}
            </button>
          </TaskWrapper>
        </div>
    );
}
export default Task;

const TaskWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 25px;
  border: 2px black solid;
`;

const TaskArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;