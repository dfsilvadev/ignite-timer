import { Head } from "../../components";

import { Display, HistoryList, Status } from "./styles";

export default function History() {
  return (
    <>
      <Head
        title="Meu histórico | Ignite Timer"
        description="Acompanhar meu histórico de timers da aplicação"
      />
      <Display>
        <h1>Meu histórico</h1>

        <HistoryList>
          <table>
            <thead>
              <tr>
                <th>Tarefa</th>
                <th>Duração</th>
                <th>Início</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Tarefa</td>
                <td>20 minutos</td>
                <td>Há 2 meses</td>
                <td>
                  <Status statusColor="yellow">Concluído</Status>
                </td>
              </tr>
              <tr>
                <td>Tarefa</td>
                <td>20 minutos</td>
                <td>Há 2 meses</td>
                <td>
                  <Status statusColor="green">Concluído</Status>
                </td>
              </tr>
              <tr>
                <td>Tarefa</td>
                <td>20 minutos</td>
                <td>Há 2 meses</td>
                <td>
                  <Status statusColor="red">Concluído</Status>
                </td>
              </tr>
            </tbody>
          </table>
        </HistoryList>
      </Display>
    </>
  );
}
