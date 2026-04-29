import { PlayCircleIcon } from "lucide-react"
import { Cycles } from "../Cycles"
import { DefaultInput } from "../DefaultInput"
import { DefaultButton } from "../DefaultButton"
import { useTaskContext } from "../../contexts/TaskContext"

export const MainForm = (() => {

  const { setState } = useTaskContext();

  function handlerClick(){
    setState(prevState => {
      return {
        ...prevState,
        formatedSecondsRemaining: '21:23',
      }
    });
  }

  return (
    <form className="form" action="">
      <button type="button" onClick={handlerClick}>Clicar</button>
      <div className="formRow">
        <DefaultInput
          labelText='Task'
          id="meuInput"
          type="text"
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