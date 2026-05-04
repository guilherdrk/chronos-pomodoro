import { PlayCircleIcon } from "lucide-react"
import { Cycles } from "../Cycles"
import { DefaultInput } from "../DefaultInput"
import { DefaultButton } from "../DefaultButton"
import { useRef } from "react"

export const MainForm = (() => {
  const taskNameInput = useRef<HTMLInputElement>(null);

  function handleCreateNewTask(event: React.SubmitEvent<HTMLFormElement>){
    event.preventDefault();
    console.log("deu certo");
  }

  return (
    <form onSubmit={handleCreateNewTask} className="form" action="">
      <div className="formRow">
        <DefaultInput
          labelText='Task'
          id="meuInput"
          type="text"
          placeholder="Digite algo"
          ref={taskNameInput}
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