import { useFormContext } from "../../utils/hookForm";
import { Container } from "../Container";
import { GenerateBtn } from "../GeneratePasswordBtn";
import { PasswordStrength } from "../PasswordStrength";
import { QuestionsWrapper } from "../QuestionsWrapper";
import { RangeSlider } from "../RangeSlider";
import "./styles.scss";

export const GeneratorForm = ({
  onSubmit,
}: {
  onSubmit: (values: any, event: any) => void;
}) => {
  const { handleSubmit } = useFormContext();

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RangeSlider name="passwordLength" />
        <QuestionsWrapper />
        <PasswordStrength />
        <GenerateBtn />
      </form>
    </Container>
  );
};
