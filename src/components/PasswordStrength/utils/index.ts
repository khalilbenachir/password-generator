export type TValues = {
  lowercaseLetters: boolean;
  numbers: boolean;
  passwordLength: string;
  symbols: boolean;
  uppercaseLetters: boolean;
};

export const getColorAndLabel = (values: TValues) => {
  const { passwordLength, ...rest } = values;
  const checkBoxesCheckedNumber = Object.values(rest).filter((e) => e).length;
  const length = parseInt(passwordLength, 10);

  let color = "var(--red)";
  let label = "weak";
  let index = 2

  if (length > 6 && length < 11) {
    if (checkBoxesCheckedNumber === 2) {
      color = "var(--orange)";
      label = "medium";
      index = 3
    }

    if (checkBoxesCheckedNumber === 4) {
      color = "var(--yellow)";
      label = "medium";
      index = 3
    }
  }

  if (length >= 11) {
    if (checkBoxesCheckedNumber === 2) {
      color = "var(--orange)";
      label = "medium";
      index = 3
    }

    if (checkBoxesCheckedNumber >= 3) {
      color = "var(--neon-green)";
      label = "strong";
      index = 4
    }
  }

  return {
    color,
    label,
    index
  };
};
