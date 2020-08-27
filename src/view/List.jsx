import React, { useState, useContext } from "react";
import styled from "styled-components";
import { TasksContext } from "../data/MainStorage";
// import Task from "./Task";

const List = () => {
  const {
    taskList,
    setTaskList,
    setComplitedTasks,
    complitedTasks,
    recycleBinStorage,
    setRecycleBinStorage,
  } = useContext(TasksContext);

  // const isTaskComplited = (item, taskList, setTaskList) => {
  //   if (item.isTaskDone === false) {
  //     setTaskList([...taskList, item.isTaskDone === true]);
  //     setComplitedTasks([
  //       ...complitedTasks,
  //       { task: item.task, taskId: complitedTasks.length, isTaskDone: true },
  //     ]);
  //     setTaskList(taskList.filter((item) => item.taskId !== item.taskId));
  //   } else {
  //     setComplitedTasks([item.isTaskDone === false]);
  //     setTaskList([
  //       ...taskList,
  //       { task: item.task, taskId: taskList.length, isTaskDone: false },
  //     ]);
  //     setComplitedTasks(complitedTasks.filter((item) => item.taskId !== item.taskId));
  //   }
  // };

  const isTaskComplited = (item, taskList, setTaskList) => {
    if (!item.isTaskDone) {
      console.log("task NOT done");
      setTaskList([...taskList, item.isTaskDone === true]);
      setComplitedTasks([
        ...complitedTasks,
        { task: item.task, taskId: complitedTasks.length, isTaskDone: true },
      ]);

      setTaskList(
        taskList.filter((task) => {
          console.log("task: ", task);
          console.log("item: ", item);

          return task.taskId !== item.taskId;
        })
      );
    } else {
      console.log("task done");
      setComplitedTasks([item.isTaskDone === false]);
      setTaskList([
        ...taskList,
        { task: item.task, taskId: taskList.length, isTaskDone: false },
      ]);
      setComplitedTasks(
        complitedTasks.filter((task) => task.taskId !== item.taskId)
      );
    }
  };

  const deleteTask = (item, setTaskList, setRecycleBinStorage) => {
    if (!item.isTaskDone) {
      setRecycleBinStorage([
        ...recycleBinStorage,
        { task: item.task, taskId: taskList.length, isTaskDone: false },
      ]);
      setTaskList(
        taskList.filter((task) => {
          return task.taskId !== item.taskId;
        })
      );
    } else {
      setRecycleBinStorage([
        ...recycleBinStorage,
        { task: item.task, taskId: taskList.length, isTaskDone: true },
      ]);
      setComplitedTasks(
        taskList.filter((task) => {
          return task.taskId !== item.taskId;
        })
      );
    }
  };
  return (
    <Wrapper>
      <TasksListBox>
        {taskList.map((item) => (
          // <Task list={taskList}/>
          <TaskWrapper key={item.taskId}>
            <TaskArea>{item.task}</TaskArea>
            <ButtonsBox>
              <button
                onClick={() => {
                  isTaskComplited(item, taskList, setTaskList);
                }}
              >
                {item.isTaskDone === false ? "done" : null}
              </button>
              <button
                onClick={() => {
                  deleteTask(item, setTaskList, setRecycleBinStorage);
                }}
              >
                delete
              </button>
            </ButtonsBox>
          </TaskWrapper>
        ))}
      </TasksListBox>
      <ComplitedTasksBox>
        {complitedTasks.map((item) => (
          // <Task list={complitedList}/>
          <ComplitedTaskWrapper key={item.taskId}>
            <TaskArea>{item.task}</TaskArea>
            <button
              onClick={() => {
                isTaskComplited(item, taskList, setTaskList);
              }}
            >
              {item.isTaskDone ? "undone" : null}
            </button>
            <button
              onClick={() => {
                deleteTask(item, setTaskList, setRecycleBinStorage);
              }}
            >
              delete
            </button>
          </ComplitedTaskWrapper>
        ))}
      </ComplitedTasksBox>
    </Wrapper>
  );
};
export default List;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  height: 90vh;
  border: 5px solid turquoise;
  @media screen and (min-width: 1200px) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: stretch;
  }
`;

const TasksListBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: blue dashed 5px;
  min-height: 48%;
  width: 98%;
`;

const ComplitedTasksBox = styled(TasksListBox)`
  border-color: yellow;
`;

const TaskWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border: 2px black solid;
  border-radius: 8px;
  width: 250px;
  min-height: 70px;
  padding: 10px;
`;

const ComplitedTaskWrapper = styled(TaskWrapper)`
  border-color: red;
`;

const TaskArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  min-width: 70%;
  overflow: auto;
`;

const ButtonsBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  min-width: 30%;
`;
