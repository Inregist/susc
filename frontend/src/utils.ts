export const formatInput = (e, format) => {
  const formatArray = format.split("-").map((s) => s.length);
  const formatLen = formatArray.reduce((acc, i) => acc + i);
  const input = e.target.value.replaceAll("-", "");
  const regex = RegExp(`^${formatArray.map((f) => `(\\d{${f}})?`).join("")}`);
  const splited = input.split(regex).filter((i) => i);
  const newValue = splited.join("-");
  e.target.value =
    newValue.length >= formatLen
      ? newValue.slice(0, formatLen + formatArray.length - 1)
      : newValue;
};
