import { useCallback } from "react";

import { Container } from "../Container";
import Icon from "../../assets/images/icon-copy.svg";
import "./styles.scss";

export const Displayer = ({ password }: { password: string }) => {
  const onClick = useCallback(
    () => navigator.clipboard.writeText(password),
    [password]
  );
  return (
    <Container>
      <div className="displayer-container">
        <p>{password}</p>
        <span className="displayer-icon" onClick={onClick}>
          <img alt="displayer-icon" src={Icon} />
        </span>
      </div>
    </Container>
  );
};
