import type { TaskModel } from "./TaskModel"

// Estado -> componente -> filhos

export type TaskStateModel = {
  tasks: TaskModel[];
  secondsRemaining: number;
  formatedSecondsRemaining: string;
  activeTask: TaskModel | null;
  currentCycle: number; // um numero que vai de 1 a 8 
  config: {
    workTime: number;
    shortBreakTime: number;
    longBreakTime: number;
  };
  
};