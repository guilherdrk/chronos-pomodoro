import { PlayCircleIcon } from "lucide-react"
import { Cycles } from "../Cycles"
import { DefaultInput } from "../DefaultInput"
import { DefaultButton } from "../DefaultButton"
import { useState } from "react"

export const MainForm = (() => {

  const [taskName, setTaskName] = useState('');

  function handleCreateNewTask(event: React.SubmitEvent<HTMLFormElement>){
    event.preventDefault();
    console.log("deu certo", taskName);
  }

  return (
    <form onSubmit={handleCreateNewTask} className="form" action="">
      <div className="formRow">
        <h1>{taskName}</h1>
        <DefaultInput
          labelText='Task'
          id="meuInput"
          type="text"
          placeholder="Digite algo"
          value={taskName}
          onChange={(e)=> setTaskName(e.target.value)}
        />
      </div>
      <div className="formRow">
        <p>Proximo intervalo é de 25 min.</p>
      </div>
      <div className="formRow">
        <Cycles />
      </div>
      <div className="formRow">
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  )
})