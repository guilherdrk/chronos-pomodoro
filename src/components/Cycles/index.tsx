
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext'
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import styles from './styles.module.css'

export const Cycles = (() => {
  const { state } = useTaskContext();
  const cycleSteps = Array.from({ length: state.currentCycle })
  const cicleDescriptionMap = {
    workTime: 'foco',
    shortBreakTime: 'descanso curto',
    longBreakTime: 'descanso longo'
  }

  return(
    <div className={styles.cycles}>
      <span>Ciclos:</span>
      <div className={styles.cycleDots}>
        {/* <span className={`${styles.cycleDot} ${styles.workTime}`}></span> */}
        {cycleSteps.map((_, index) => {
          const nextCycle = getNextCycle(index)
          const nextCycleType = getNextCycleType(nextCycle);
          return (
            <span
              key={`${nextCycleType}_${nextCycle}`}
              className={`${styles.cycleDot} ${styles[nextCycleType]}`}
              aria-label={`Indicador de Ciclo de ${cicleDescriptionMap[nextCycleType]}`}
              title={`Indicador de Ciclo de ${cicleDescriptionMap[nextCycleType]}`}
            ></span>
          );
        })}
      </div>
    </div>
  )

})
