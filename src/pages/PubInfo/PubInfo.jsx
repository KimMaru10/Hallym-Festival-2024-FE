import React from "react";
import "./PubInfo.scss";
import { Background, Header } from "../../components/index.js";

const PubInfo = () => {
  return (
    <div className="pubInfo">
      <Background hasPub={true} />
      <Header headcenter="주점 안내" />
      <div className="pubInfo-container">
        <div className="pubInfo-container-wrapper">
          <img
            src={
              "https://sunwoo-img-container.s3.ap-northeast-2.amazonaws.com/front/554d4f9a-5f39-4fd8-887f-e8c8784337e8_pub.png"
            }
            alt="주점 위치"
          />
          <div className="contents">
            <h1 className="title">운영시간 및 방침</h1>
            <ul>
              <li>
                밤부스 운영시간 : 18:00 ~ 02:00<br></br>예약자 입장 시간 :
                17:00 ~ 17:30
              </li>
              <li>200 테이블 수용</li>
              <li>예약자는 100테이블 수용</li>
              <li className="underline">
                <p>20시부터 22시 사이에 자리 비움 시 자리 회수</p>
              </li>
            </ul>
            <h1 className="title">예약제 시스템</h1>

            <ul>
              <li>
                웹사이트 주점 예약 창에서 각 주점 운영 전날 오전 8시30분 예약
                <br />
                ex&#41; 21일 테이블 예약 시 20일 오전 8시 30분 예약
                <br />
                (수업 시간을 고려한 시간대이며 다소 이른 시간이라도 양해
                부탁드립니다)
              </li>
              <li>인당 1 테이블 예약 가능</li>
              <li>
                1 테이블 예약 시, 최대 4명까지 함께 예약 가능 (ex-의자 4개,
                테이블 1개)
              </li>
              <li>대표자(예약자) 입장 필수!</li>
              <li>
                - 예약자 기준 야간주점 측에서 문자 발송 진행(입장 시 STAFF에게
                보여준 후 입장)
              </li>
            </ul>

            <h1 className="title">세부 사항</h1>
            <ul>
              <li>수용 인원 : 100 테이블 수용</li>
              <li>예약 마감 일정에 따라 조기 마감 될 수 있습니다</li>
              <li>
                예약자 입장시간 : 17:00 ~ 17:30 (이 시간 내에 미방문 시 예약 취소)
              </li>
            </ul>

            <h1 className="title">밤부스 프로그램 부스 (ECO팝)</h1>
            <ul>
              <li>장소 : 지혜의길 (메인통제부스)</li>
              <li>
                방법 : 일정량의 쓰레기를 기준량보다 많이 모아오면
                중앙통제부스에서 팝콘 배부
              </li>
              <p>진행시간</p>
              <li>20:00 ~ 21:00</li>
              <li>21:30 ~ 22:30</li>
              <li>23:00 ~ 24:00</li>
            </ul>
            <h1 className="title">판매 부스 (하리미네 잡화점) </h1>
            <ul>
              <li>숙취해소제 개당 1,500원</li>
              <li>야광봉 2,000원</li>
              <li>홍초 1,500원</li>
              <li>깔라만시 2개 1,500원</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PubInfo;
