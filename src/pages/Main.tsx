import { useCallback, useState } from "react";

import { useForm, FormProvider } from "../utils/hookForm";
import { Displayer, GeneratorForm } from "../components";
import { generatePassword } from "./utils";
import "./styles.scss";

export const Main = () => {
  const methods = useForm({ mode: "onBlur" });
  const [password, setPassword] = useState("");
  const onSubmit = useCallback((values: any, event: any) => {
    event?.preventDefault();
    const generatedPassword = generatePassword(values);
    return setPassword(generatedPassword);
  }, []);

  return (
    <div className="main-container">
      <Displayer password={password} />
      <FormProvider {...methods}>
        <GeneratorForm onSubmit={onSubmit} />
      </FormProvider>
    </div>
  );
};
