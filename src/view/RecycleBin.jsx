import React, { useContext } from "react";
import styled from "styled-components";
import { TasksContext } from "../data/MainStorage";

const RecycleBin = () => {
  let {
    recycleBinStorage,
    setTaskList,
    setComplitedTasks,
    setRecycleBinStorage,
    taskList,
    complitedTasks,
  } = useContext(TasksContext);
  const recycleTheTask = (item  ) => {
    if (!item.isTaskDone) {
      setTaskList([
        ...taskList,
        { task: item.task, taskId: taskList.length, isTaskDone: false },
      ]);
      setRecycleBinStorage(
        recycleBinStorage.filter((task) => {
          return task.taskId !== task.taskId;
        })
      );
    } else {
      setComplitedTasks([
        ...complitedTasks,
        { task: item.task, taskId: complitedTasks.length, isTaskDone: true },
      ]);
      setRecycleBinStorage(
        recycleBinStorage.filter((task) => {
          return task.taskId !== task.taskId;
        })
      );
    }
  };
  const deleteTheTask = () => {
    setRecycleBinStorage(recycleBinStorage.filter((task)=>{
        return task.taskId !== task.taskId;
    }))
  };
//   const removeAllTasks = ()=>{

//   }

  return (
    <div>
      {recycleBinStorage.map((item) => (
        <div key={item.taskId}>
          <div>{item.task}</div>
          <div>
            <button
              onClick={() => {
                recycleTheTask(item, setTaskList);
              }}
            >
              recycle
            </button>
            <button onClick={()=>{deleteTheTask(setRecycleBinStorage)}}>delete</button>
          </div>
        </div>
      ))}
      <button onClick={()=>{setRecycleBinStorage([])}}>empty the recycle bin</button>
    </div>
  );
};
export default RecycleBin;
