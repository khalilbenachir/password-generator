import { useFormContext } from "../../utils/hookForm";
import "./styles.scss";

export const CheckBox = ({ name, label }: { name: string; label: string }) => {
  const { register } = useFormContext();
  return (
    <label className="checkBox-container">
      <input type="checkbox" {...register(name)} />
      <span className="checkbox-box"></span>
      {label}
    </label>
  );
};
