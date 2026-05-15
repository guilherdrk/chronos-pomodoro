import { MainTemplate } from "../../templates/MainTemplate";
import { Container } from "../../components/Container";
import { DefaultButton } from "../../components/DefaultButton";
import styles from './styles.module.css';
import { Heading } from "../../components/Heading";
import { TrashIcon } from "lucide-react";

export const History = () => {



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
                <th>Tarefa</th>
                <th>Duração</th>
                <th>Data</th>
                <th>Status</th>
                <th>Tipo</th>
              </tr>
            </thead>

            <tbody>
              {Array.from({ length: 20 }).map((_, index) => {
                return (
                  <tr key={index}>
                    <td>Estudar</td>
                    <td>25 min</td>
                    <td>15/05/2026 14:17</td>
                    <td>Completa</td>
                    <td>Foco</td>
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
