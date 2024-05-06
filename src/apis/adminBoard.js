import { getAuthAxios } from "./authAxios";

export const getAdminBoard = async () => {
  const access = localStorage.getItem("access");
  const authAxios = getAuthAxios(access); //axios객체 생성
  const result = await authAxios.get("/board");
  console.log("adminBoard실행, get호출");
  return result.data;
};
