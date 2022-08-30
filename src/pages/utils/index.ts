import { FieldValues } from "react-hook-form";

export function generatePassword(values: FieldValues) {
  const {
    passwordLength,
    lowercaseLetters: useLowercase,
    numbers: useNumbers,
    symbols: useSymbols,
    uppercaseLetters: useUppercase,
  } = values;
  const length = parseInt(passwordLength);
  let chars: string[] = [];
  let password = "";

  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
  const numbers = "0123456789".split("");
  const symbols = "`~!@#$%^&*()-_=+[{]};:'\",.?/".split("");

  useUppercase && (chars = [...chars, ...uppercase]);
  useLowercase && (chars = [...chars, ...lowercase]);
  useNumbers && (chars = [...chars, ...numbers]);
  useSymbols && (chars = [...chars, ...symbols]);

  if (chars.length > 0) {
    for (let i = 0; i < length; i++) {
      password += chars[Math.floor(Math.random() * chars.length)];
    }
  }

  return password;
}
