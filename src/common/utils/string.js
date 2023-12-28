export const checkEmptyColumn = (text) => {
  return text && text !== "None" && text !== "" ? text : "-";
};
