import axiosInstance from "./axiosInstance";

//http method담은 함수명은 http method와 유사하게 가져감, id가 포함된 메소드는 detail키워드 붙임
export const getCommunity = async () => {
  try {
    const response = await axiosInstance.get("/community");
    return response;
  } catch (error) {
    console.error("커뮤니티 불러오기 실패 : ", error);
  }
};

export const getCommunityDetail = async (id) => {
  try {
    const response = await axiosInstance.get(`/community/${id}`);
    return response;
  } catch (error) {
    console.error("커뮤니티 상세 불러오기 실패 : ", error);
  }
};
/**post의 성공여부를 boolean타입으로 반환 */
export const postCommunity = async (data) => {
  try {
    const response = await axiosInstance.post("/community", data);
    console.log(response, "!!!!!!!!");
    if (response.status >= 200 && response.status < 300) {
      return true;
    } else {
      // 서버 응답이 400번대이면 false
      console.log("네트워크가 200번대가 아님!");
      return false;
    }
  } catch (error) {
    console.error(`네트워크 에러 또는 요청 실패: ${error.message}`);
    return false;
  }
};
/**혹시  */
export const deleteCommunityDetail = async (id, password) => {
  try {
    const response = await axiosInstance.delete(
      `/community/${id}?password=${password}`
    );
    if (response.status >= 200 && response.status < 300) {
      return true;
    } else {
      // 서버 응답이 400번대이면 false
      console.log("네트워크가 200번대가 아님!");
      return false;
    }
  } catch (error) {
    console.error("커뮤니티 상세 삭제 실패 : ", error);
    return false;
  }
};

//공지사항 불러오기
export const getNoticeList = async () => {
  try {
    const response = await axiosInstance.get("/notice");
    return response;
  } catch (error) {
    console.error("리스트 불러오기 실패 : ", error);
  }
};

export const getLostList = async () => {
  try {
    const response = await axiosInstance.get("/find");

    return response;
  } catch (error) {
    console.error("리스트 불러오기 실패 :", error);
  }
};

export const addReservation = async (data) => {
  try {
    const response = await axiosInstance.post("/reservation", data);
    return response;
  } catch (error) {
    console.error("예약 추가 실패 :", error);
  }
};

export const getReservation = async () => {
  try {
    const response = await axiosInstance.get("/reservation");
    return response;
  } catch (error) {
    console.error("예약 불러오기 실패 :", error);
  }
};
