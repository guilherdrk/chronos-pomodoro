import { useEffect, useState } from "react";
import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";


type TaskContextProvierProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProvierProps) {

  const [state, setState] = useState(initialTaskState);

  useEffect(()=>{
    console.log(state);
  }, [state]);

  return (
    <TaskContext.Provider value={{ state, setState }}>
      {children}
    </TaskContext.Provider>
  )
}
