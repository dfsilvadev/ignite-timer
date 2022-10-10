import { useForm } from "react-hook-form";

import { FormCycle, Head } from "../../components";

import { Display } from "./styles";

export default function Home() {
  const { watch, getValues, setValue, reset } = useForm();

  return (
    <>
      <Head
        title="Home | Ignite Timer"
        description="Home da aplicação com o timer"
      />
      <Display>
        <FormCycle />
      </Display>
    </>
  );
}
