import writeGood from "write-good";

export const checkGrammar = (text: string) => {
  return writeGood(text);
};