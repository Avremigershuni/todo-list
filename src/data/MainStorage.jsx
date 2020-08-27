import React , { createContext ,useState} from "react";

const TasksContext = createContext();
const { Provider } = TasksContext;

const TasksProvider = ({ children }) => {
    let [taskList, setTaskList] = useState([]);
    let [complitedTasks, setComplitedTasks] = useState([])
    let [recycleBinStorage, setRecycleBinStorage] = useState([])
    
    const state={
        taskList,
        complitedTasks,
        recycleBinStorage
    };
    const actions={
        setTaskList,
        setComplitedTasks,
        setRecycleBinStorage
    };
    return <Provider value={{ ...state, ...actions }}>{children}</Provider>;
  };  
export { TasksProvider, TasksContext };