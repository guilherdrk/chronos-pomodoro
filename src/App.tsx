/* eslint-disable react-hooks/immutability */
import "./styles/theme.css";
import "./styles/global.css";
import { Home } from "./pages/Home";

import { TaskContextProvider } from "./contexts/TaskContext";

export const App = () => {

  return (
    <TaskContextProvider>
      <Home/> 
    </TaskContextProvider>

  )
};
