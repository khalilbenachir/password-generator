import { CheckBox } from "../CheckBox";

export const QuestionsWrapper = () => {
  const checkboxes = [
    { name: "uppercaseLetters", label: "Include Uppercase letters" },
    { name: "lowercaseLetters", label: "Include lowercase letters" },
    { name: "numbers", label: "Include Numbers" },
    { name: "symbols", label: "Include Symbols" },
  ];
  return (
    <>
      {checkboxes.map((checkbox) => (
        <CheckBox
          name={checkbox.name}
          key={checkbox.name}
          label={checkbox.label}
        />
      ))}
    </>
  );
};
