import { PlayCircleIcon } from "lucide-react"
import { Cycles } from "../Cycles"
import { DefaultInput } from "../DefaultInput"
import { DefaultButton } from "../DefaultButton"
import type { HomeProps } from "../../pages/Home"

export const MainForm = (({ state, setState }: HomeProps) => {

  function handleClick(){
    setState(prevState => {
      return {
        ...prevState,
        config: {
          ...prevState.config,
          workTime: 34
        },
        formatedSecondsRemaining: '23:43'
      }
    })
  }

  return (
    <form className="form" action="">

      <div>
        <button type='button' onClick={handleClick}>Clicar</button>
      </div>


      <div className="formRow">
        <DefaultInput
          labelText='Task'
          id="meuInput"
          type="text"
        />
      </div>
      <div className="formRow">
        <p>Proximo intervalo é de {state.config.workTime} min.</p>
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