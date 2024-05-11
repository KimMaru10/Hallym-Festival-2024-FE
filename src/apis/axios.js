import axiosInstance from "./axiosInstance.js";

export const getBoardList = async () => {
  try {
    const response = await axiosInstance.get("/api/board");
    return response;
  } catch (error) {
    console.error("리스트 불러오기 실패 : ", error);
  }
};
export const getBoard = async (id) => {
  try {
    const response = await axiosInstance.get(`/api/board/${id}`);
    return response;
  } catch (error) {
    console.error("게시글 상세 불러오기 실패 : ", error);
  }
};

export const addBoardList = async (formData) => {
  try {
    const response = await axiosInstance.post("/api/board", formData);
    return response;
  } catch (error) {
    console.error("게시글 저장 실패 : ", error);
  }
};

export const deleteBoard = async (id) => {
  try {
    await axiosInstance.delete(`/api/board/${id}`);
    return true;
  } catch (error) {
    console.error("게시글 삭제 실패 : ", error);
    return false;
  }
};

export const updateBoard = async (id, board) => {
  try {
    const response = await axiosInstance.put(`/api/board/${id}`, board);
    return response;
  } catch (error) {
    console.error("게시글 수정 실패 : ", error);
  }
};
//공지사항 불러오기
export const getNoticeList = async () => {
  try {
    const response = await axiosInstance.get("/notice");
    return response;
  } catch (error) {
    console
    .error("리스트 불러오기 실패 : ", error);
  }
};

export const getLostList = async()=>{
  try{
    const response = await axiosInstance.get("/find");
    return response;
  }catch(error){
    console.error("리스트 불러오기 실패 :",error);
  }
};


export const addReservation = async(data)=>{
  try{
    const response = await axiosInstance.post("/reservation",data);
    return response;
  }catch(error){
    console.error("리스트 불러오기 실패 :",error);
  }
};


