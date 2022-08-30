import { ArrowIcon } from "../ArrowIcon";
import "./styles.scss";

export const GenerateBtn = () => {
  return (
    <button type="submit" className="generate-btn">
      GENERATE
      <span>
        <ArrowIcon />
      </span>
    </button>
  );
};
