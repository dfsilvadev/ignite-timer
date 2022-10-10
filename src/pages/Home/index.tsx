import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { Minus, Play, Plus } from "phosphor-react";

import { Button, Countdown, Head } from "../../components";

import {
  Display,
  FormContainer,
  MinutesAmountInput,
  TaskInput,
  WrapperMinutesAmountInput,
} from "./styles";

import { NewCycleFormData } from "./type";

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(5, "Descreva resumidamente sua tarefa."),
  minutesAmount: zod
    .number()
    .min(5, "O ciclo precisa ser de no mínumo 5 minutos.")
    .max(120, "O ciclo precisa ser de no máximo 120 minutos."),
});

export default function Home() {
  const { register, watch, handleSubmit, getValues, setValue, reset } =
    useForm<NewCycleFormData>({
      resolver: zodResolver(newCycleFormValidationSchema),
      defaultValues: {
        task: "",
        minutesAmount: 0,
      },
    });

  const task = watch("task");
  const isSubmitDisabled = !task;

  function handleCreateNewCycle(data: NewCycleFormData) {
    console.log(data);
    reset();
  }

  function handleDecrement() {
    const currentValue = getValues("minutesAmount") || 0;
    const newValue = currentValue <= 0 ? 0 : currentValue - 5;
    setValue("minutesAmount", newValue);
  }

  function handleIncrement() {
    const currentValue = getValues("minutesAmount") || 0;
    const newValue = currentValue >= 120 ? currentValue : currentValue + 5;
    setValue("minutesAmount", newValue);
  }

  return (
    <>
      <Head
        title="Home | Ignite Timer"
        description="Home da aplicação com o timer"
      />
      <Display>
        <form onSubmit={handleSubmit(handleCreateNewCycle)}>
          <FormContainer>
            <label htmlFor="task">Vou trabalhar em</label>
            <TaskInput
              type="text"
              id="task"
              placeholder="Dê um nome para o seu projeto"
              list="task-suggestions"
              {...register("task")}
            />

            <datalist id="task-suggestions">
              <option value="Projeto I" />
              <option value="Projeto II" />
              <option value="Projeto III" />
            </datalist>

            <label htmlFor="minutesAmount">durante</label>

            <WrapperMinutesAmountInput>
              <Minus size={24} onClick={handleDecrement} />
              <MinutesAmountInput
                type="number"
                id="minutesAmount"
                placeholder="00"
                step={5}
                min={5}
                max={120}
                {...register("minutesAmount", { valueAsNumber: true })}
              />
              <Plus size={24} onClick={handleIncrement} />
            </WrapperMinutesAmountInput>

            <span>minutos.</span>
          </FormContainer>

          <Countdown />

          <Button icon={<Play size={24} />} disabled={isSubmitDisabled}>
            Começar
          </Button>
        </form>
      </Display>
    </>
  );
}
