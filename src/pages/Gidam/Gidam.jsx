import React from "react";
import "./Gidam.scss";
import { Background, Header } from "../../components/index.js";
const Gidam = () => {
  return (
    <div className="gidam">
      <Background hasGidam={true} />
      <Header headcenter={"기담"} hasGidam={true} />
      <div className="gidam-container">
        <div className="gidam-container-items">
          <div className="paragraph">
            <p id="text1">어둠 속에서 맞닥뜨리는 진정한 공포</p>
          </div>
          <div className="paragraph">
            <p id="text2">적막한 복도를 따라 걸으면,</p>
            <p id="text2">이 곳의 과거와 현재의 비밀들이 살아 숨쉰다.</p>
          </div>
          <div className="paragraph">
            <p id="text3">교실은 시간의 잊혀진 흔적들로가득 차 있다.</p>
            <p id="text3">교탁 위에는 오랜 세월을 지나 비어버린 책과 노트,</p>
            <p id="text3">그리고 어느 누가 잊고 간 물건들이 놓여져 있다.</p>
          </div>
          <div className="paragraph">
            <p id="text4">잊혀진 교실 안에는 과거의 목소리가 여전히 울린다.</p>
            <p id="text4">그 소리는 끊임없이 되풀이되며,</p>
            <p id="text4"> 당신을 인도하려는 것 같다.</p>
          </div>
          <div className="paragraph">
            <p id="text5">복도를 걸을 때마다, 어둠은 당신을 휘감는다.</p>
            <p id="text5">어둠의 끝에서 당신이 찾게 될 것은, </p>
            <p id="text5">이 곳의 진실과 그 안에 감춰진 비밀이다.</p>
          </div>
          <div className="paragraph">
            <p id="text6">학교는 언제나 당신을 기다리고 있다.</p>
            <p id="text6">그곳에서 당신은 시험할 것이다.</p>
          </div>
          <div className="paragraph">
            <p id="text7">하지만 이 곳은 끝없는 미지와 위험으로 가득하다.</p>
          </div>
          <div className="paragraph">
            <p id="text8">당신은 이 학교를 떠날 수 있을까?</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Gidam;
