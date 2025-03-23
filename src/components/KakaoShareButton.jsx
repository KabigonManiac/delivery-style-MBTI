import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import KaKaoLogo from "../image/kakao.png";
import { ResultData } from "../assets/resultData";
const { Kakao } = window;

const KakaoLogoImg = styled.img``;

const Sharebtn = styled.div`
  display: flex;
  text-align: center;
`;

const KakaoShareButton = ({ mbti }) => {
  const [resultData, setResultData] = useState(null);
  const url = "https://deliverymbti.netlify.app/";
  const resultURL = window.location.href;

  useEffect(() => {
    const result = ResultData.find((s) => s.best === mbti);
    setResultData(result);
  }, [mbti]);

  useEffect(() => {
    Kakao.cleanup();
    Kakao.init("91269300d87b8d84a6326a10be6f7096");
  }, []);

  const sharekakao = () => {
    if (!resultData) return; // 데이터가 없으면 실행 안 함
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "예비 집사 판별기 결과",
        description: `내 음식 취향과 배달 습관에 따른 MBTI 는 ${resultData.best} ${resultData.name}입니다.`,
        imageUrl: `${url}${resultData.image}`,
        link: {
          mobileWebUrl: resultURL,
          webUrl: resultURL,
        },
      },
      buttons: [
        {
          title: "나도 테스트하러 가기",
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ],
    });
  };

  return (
    <Button variant="warning" onClick={sharekakao}>
      <Sharebtn>
        <KakaoLogoImg
          src={KaKaoLogo}
          alt="Kakao Logo"
          style={{ width: "24px", marginRight: "4px" }}
        />
        친구 공유하기
      </Sharebtn>
    </Button>
  );
};

export default KakaoShareButton;
