const setNowDate = () => {
  const now = new Date();
  const postTime =
    now.getDate() +
    "." +
    now.getHours() +
    "." +
    now.getMinutes() +
    "." +
    now.getSeconds();
  return postTime;
};
export default setNowDate;
