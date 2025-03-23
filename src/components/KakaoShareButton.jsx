import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import KaKaoLogo from "../image/kakao.png";
import { ResultData } from "../assets/resultData";
const { Kakao } = window;

const KakaoLogoImg = styled.img`
  width: ${({ $isSmallScreen }) => ($isSmallScreen ? "40px" : "24px")};
  height: auto;
  margin-top: 4px;
`;

const Sharebtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ $isSmallScreen }) => ($isSmallScreen ? "0" : "4px")};
  width: ${({ $isSmallScreen }) => ($isSmallScreen ? "60px" : "120px")};
  height: ${({ $isSmallScreen }) => ($isSmallScreen ? "60px" : "40px")};
  background-color: #ffeb00;
  border: none;
  border-radius: 8px;
  position: relative;
  cursor: pointer;
  font-size: ${({ $isSmallScreen }) => ($isSmallScreen ? "0px" : "16px")};
  font-weight: bold;
  color: #3c1e1e;
  span {
    display: ${({ $isSmallScreen }) => ($isSmallScreen ? "none" : "block")};
  }
  .hover-text {
    display: none; /* 기본적으로 숨김 */
    position: absolute;
    left: -4px;
    bottom: -20px;
    font-size: ${({ $isSmallScreen }) => ($isSmallScreen ? "12px" : "14px")};
    color: #181818;
    width: 80px;
  }

  @media (max-width: 768px) {
    &:hover .hover-text {
      display: block; /* 모바일에서만 호버 시 표시 */
    }
  }
`;

const KakaoShareButton = ({ mbti }) => {
  const [resultData, setResultData] = useState(null);
  const url = "https://deliverymbti.netlify.app/";
  const resultURL = window.location.href;
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    const result = ResultData.find((s) => s.best === mbti);
    setResultData(result);
  }, [mbti]);

  useEffect(() => {
    Kakao.cleanup();
    Kakao.init("91269300d87b8d84a6326a10be6f7096");
  }, []);

  const sharekakao = () => {
    if (!resultData) return;
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "내 음식 취향과 배달 습관, MBTI 결과",
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
    <Sharebtn onClick={sharekakao} $isSmallScreen={isSmallScreen}>
      <KakaoLogoImg
        $isSmallScreen={isSmallScreen}
        src={KaKaoLogo}
        alt="Kakao Logo"
      />
      <span>친구 공유하기</span>
      <span className="hover-text">카톡 공유하기</span>
    </Sharebtn>
  );
};

export default KakaoShareButton;
