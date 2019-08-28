export default e => {
  console.log("changeValue");
  return {
    type: "CHANGE_VALUE",
    payload: { value: e.target.value }
  };
};
