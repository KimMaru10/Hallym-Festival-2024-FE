const setNowDate = () => {
  const now = new Date();
  const postTime =
    now.getFullYear() +
    "." +
    now.getMonth() +
    "." +
    now.getDate() +
    " " +
    now.getHours() +
    "." +
    now.getMinutes();
  return postTime;
};
export default setNowDate;
