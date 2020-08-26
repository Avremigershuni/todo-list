import React, { useState, useContext } from "react";
import styled from "styled-components";
import { TasksContext } from "../data/MainStorage";

const List = () => {
  const {
    taskList,
    setTaskList,
    setComplitedTasks,
    complitedTasks,
  } = useContext(TasksContext);

  const isTaskComplited = (item, taskList, setTaskList) => {
    if (item.isTaskDone === false) {
      setTaskList([...taskList, item.isTaskDone === true]);
      setComplitedTasks([
        ...complitedTasks,
        { task: item.task, taskId: complitedTasks.length, isTaskDone: true },
      ]);
      setTaskList(taskList.filter((item) => item.id !== item.id));
    } else {
      setComplitedTasks([item.isTaskDone === false]);
      setTaskList([
        ...taskList,
        { task: item.task, taskId: taskList.length, isTaskDone: false },
      ]);
      setComplitedTasks(complitedTasks.filter((item) => item.id !== item.id));
    }
  };
  return (
    <>
      <TasksListBox>
        {taskList.map((item) => (
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
        ))}
      </TasksListBox>
      <ComplitedTasksBox>
        {complitedTasks.map((item) => (
          <ComplitedTaskWrapper key={item.id}>
            <TaskArea>{item.task}</TaskArea>
            <button
              onClick={() => {
                isTaskComplited(item, taskList, setTaskList);
              }}
            >
              {item.isTaskDone ? "undone" : null}
            </button>
          </ComplitedTaskWrapper>
        ))}
      </ComplitedTasksBox>
    </>
  );
};
export default List;

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

const ComplitedTaskWrapper = styled(TaskWrapper)`
  border-color: red;
`;

const TasksListBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: blue dashed 5px;
  min-height:50px;
`;
const ComplitedTasksBox = styled(TasksListBox)`
border-color: yellow;
`;
