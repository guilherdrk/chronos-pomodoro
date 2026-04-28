/* eslint-disable react-hooks/immutability */
import "./styles/theme.css";
import "./styles/global.css";
import { Home } from "./pages/Home";
import { useState } from "react";
import type { TaskStateModel } from "./models/TaskStateModel";
import { TaskContext, TaskContextProvider } from "./contexts/TaskContext";

const initalState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formatedSecondsRemaining: '00:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};

export const App = () => {


  const [state, setState] = useState(initalState);

  return (
    <TaskContextProvider>
      <Home/>
    </TaskContextProvider>

  )
};
