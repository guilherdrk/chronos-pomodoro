import { MainTemplate } from "../../templates/MainTemplate";
import { Container } from "../../components/Container";
import { DefaultButton } from "../../components/DefaultButton";
import styles from './styles.module.css';
import { Heading } from "../../components/Heading";
import { TrashIcon } from "lucide-react";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { formatDate } from "../../utils/formatDate";
import { getTaskStatus } from "../../utils/getTaskStatus";
import { sortTasks, type SortTasksOptions } from "../../utils/sortTasks";
import { useState } from "react";

export const History = () => {

  const { state } = useTaskContext();
  const [sortTaskOptions, setSortTaskOptions] = useState<SortTasksOptions>(
    () => {
      return {
        tasks: sortTasks({ tasks: state.tasks }),
        field: 'startDate',
        direction: 'desc',
      };
    },
  );

  function handleSortTasks({ field }: Pick<SortTasksOptions, 'field'>) {
    const newDirection = sortTaskOptions.direction === 'desc' ? 'asc' : 'desc';
    setSortTaskOptions({
      tasks: sortTasks({
        direction: newDirection,
        tasks: sortTaskOptions.tasks,
        field,
      }),

      direction: newDirection,
      field,
    });
  }


  return (
    <MainTemplate>
      <Container>
        <Heading>
          <span>History</span>
          <span className={styles.buttonContainer}>
            <DefaultButton
              icon={<TrashIcon />}
              color="red"
              aria-label="Apagar todo o historico"
              title="Apagar historico"
            />
          </span>
        </Heading>
      </Container>

      <Container>
        <div className={styles.responsiveTable}>
          <table>
            <thead>
              <tr>
                <th onClick={() => handleSortTasks({ field: 'name' })} className={styles.thSort}>Tarefa &#8597;</th>
                <th onClick={() => handleSortTasks({ field: 'duration' })} className={styles.thSort}>Duração &#8597;</th>
                <th onClick={() => handleSortTasks({ field: 'startDate' })} className={styles.thSort}>Data &#8597;</th>
                <th>Status</th>
                <th>Tipo</th>
              </tr>
            </thead>

            <tbody>
              {sortTaskOptions.tasks.map(task => {

                const taskTypeDictionary = {
                  workTime: 'Foco',
                  shortBreakTime: 'Descanso curto',
                  longBreakTime: 'Descanso longo',
                };

                return (
                  <tr key={task.id}>
                    <td>{task.name}</td>
                    <td>{task.duration} min</td>
                    <td>{formatDate(task.startDate)}</td>
                    <td>{getTaskStatus(task, state.activeTask)}</td>
                    <td>{taskTypeDictionary[task.type]}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </Container>

    </MainTemplate>
  );
};
