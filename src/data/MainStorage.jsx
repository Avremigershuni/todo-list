import React , { createContext ,useState} from "react";

const TasksContext = createContext();
const { Provider } = TasksContext;

const TasksProvider = ({ children }) => {
    let [taskList, setTaskList] = useState([]);
    let [complitedTasks, setComplitedTasks] = useState([])
    
    const state={
        taskList,
        complitedTasks
    };
    const actions={
        setTaskList,
        setComplitedTasks
    };
    return <Provider value={{ ...state, ...actions }}>{children}</Provider>;
  };  
export { TasksProvider, TasksContext };