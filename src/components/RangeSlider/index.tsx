import { useMemo } from "react";

import { useFormContext, useWatch } from "../../utils/hookForm";
import "./styles.scss";

export const RangeSlider = ({ name }: { name: string }) => {
  const { register, control } = useFormContext();
  const sliderValue = useWatch({ name, control, defaultValue: 6 });
  const MAX_VALUE = 20;
  const normalizedValue = useMemo(
    () => (sliderValue * 100) / MAX_VALUE,
    [sliderValue]
  );

  return (
    <div className="range-container">
      <div className="range-infos">
        <label>Character Length</label>
        <span>{sliderValue}</span>
      </div>
      <div className="range">
        <input
          {...register(name)}
          type="range"
          id="slider"
          max={MAX_VALUE}
          min="0"
          value={sliderValue}
        />
        <div
          className="range__bar"
          style={{
            backgroundImage: `linear-gradient(to right, #a4ffaf ${normalizedValue}%, #18171f ${normalizedValue}%)`,
          }}
        />
      </div>
    </div>
  );
};
