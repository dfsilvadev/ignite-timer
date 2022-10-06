import { Minus, Play, Plus } from "phosphor-react";
import { Button, Countdown, Head } from "../../components";

import {
  Display,
  FormContainer,
  MinutesAmountInput,
  TaskInput,
  WrapperMinutesAmountInput,
} from "./styles";

export default function Home() {
  return (
    <>
      <Head
        title="Home | Ignite Timer"
        description="Home da aplicação com o timer"
      />
      <Display>
        <form>
          <FormContainer>
            <label htmlFor="task">Vou trabalhar em</label>
            <TaskInput
              type="text"
              id="task"
              placeholder="Dê um nome para o seu projeto"
              list="task-suggestions"
            />

            <datalist id="task-suggestions">
              <option value="Projeto I" />
              <option value="Projeto II" />
              <option value="Projeto III" />
            </datalist>

            <label htmlFor="minutesAmount">durante</label>

            <WrapperMinutesAmountInput>
              <Minus size={24} />
              <MinutesAmountInput
                type="number"
                id="minutesAmount"
                placeholder="00"
                step={5}
                min={5}
                max={60}
              />
              <Plus size={24} />
            </WrapperMinutesAmountInput>

            <span>minutos.</span>
          </FormContainer>

          <Countdown />

          <Button icon={<Play size={24} />}>Começar</Button>
        </form>
      </Display>
    </>
  );
}
