import { useWatch, useFormContext } from "../../utils/hookForm";
import { getColorAndLabel, TValues } from "./utils";
import "./styles.scss";
import { useMemo } from "react";

export const PasswordStrength = () => {
  const bars = new Array(4).fill(0);
  const { control } = useFormContext();
  const values = useWatch({ control });
  const { color, label, index } = useMemo(
    () => getColorAndLabel(values as TValues),
    [values]
  );

  return (
    <div className="passwrod-strength-container">
      <label>Strength</label>
      <div className="bars-level-container">
        <label>{label}</label>
        <div className="bars-container">
          {bars.map((_, i) => {
            const shouldFilled = i + 1 <= index;
            return (
              <span
                key={i}
                className="bar"
                style={{
                  backgroundColor: shouldFilled ? color : "initial",
                  borderColor: shouldFilled ? color : "initial",
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
