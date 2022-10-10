import { Head, HistoryList } from "../../components";

import { Display } from "./styles";

export default function History() {
  return (
    <>
      <Head
        title="Meu histórico | Ignite Timer"
        description="Acompanhar meu histórico de timers da aplicação"
      />
      <Display>
        <h1>Meu histórico</h1>

        <HistoryList />
      </Display>
    </>
  );
}
