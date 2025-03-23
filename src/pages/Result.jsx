import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { ResultData } from "../assets/resultData";
import KakaoShareButton from "../components/KakaoShareButton";
import html2canvas from "html2canvas"; // html2canvas 추가
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  height: ${({ $isSmallScreen }) => ($isSmallScreen ? "88vh" : "98vh")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: #fff;
  background: #a1c4fd;
`;

const Title = styled.div`
  font-size: ${({ $isSmallScreen }) => ($isSmallScreen ? "32px" : "42px")};
  margin-bottom: 12px;
`;

const SubTitle = styled.div`
  font-size: ${({ $isSmallScreen }) => ($isSmallScreen ? "22px" : "32px")};
  margin-bottom: 12px;
  color: #181818;
`;
const Desc = styled.div`
  font-size: ${({ $isSmallScreen }) => ($isSmallScreen ? "18px" : "22px")};
  margin: 20px 0;
  color: #181818;
  line-height: 1.4;
`;
const ButtonGroup = styled.div`
  display: flex;
  gap: 18px;
  margin-top: 20px;
`;

const KakaoLogo = styled.img`
  width: 40px;
`;
const RestartButton = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ $isSmallScreen }) => ($isSmallScreen ? "0" : "4px")};
  align-items: center;
  width: ${({ $isSmallScreen }) => ($isSmallScreen ? "60px" : "120px")};
  background-color: dodgerblue;
  border-radius: 8px;
  font-size: ${({ $isSmallScreen }) => ($isSmallScreen ? "20px" : "16px")};
  position: relative;
  cursor: pointer;
  span {
    display: ${({ $isSmallScreen }) => ($isSmallScreen ? "none" : "block")};
  }

  .hover-text {
    display: none;
    position: absolute;
    left: -4px;
    bottom: -20px; /* 글자가 버튼 바로 아래에 위치하도록 */
    font-size: ${({ $isSmallScreen }) => ($isSmallScreen ? "12px" : "14px")};
    color: dodgerblue;
    width: 80px;
  }

  &:hover .hover-text {
    display: block;
  }
`;

const LinkcopyButton = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ $isSmallScreen }) => ($isSmallScreen ? "0" : "4px")};
  align-items: center;
  width: ${({ $isSmallScreen }) => ($isSmallScreen ? "60px" : "120px")};
  background-color: #000;
  border-radius: 8px;
  font-size: ${({ $isSmallScreen }) => ($isSmallScreen ? "20px" : "16px")};
  position: relative;
  cursor: pointer;
  span {
    display: ${({ $isSmallScreen }) => ($isSmallScreen ? "none" : "block")};
  }

  .hover-text {
    display: none;
    position: absolute;
    left: -1px;
    bottom: -20px; /* 글자가 버튼 바로 아래에 위치하도록 */
    font-size: ${({ $isSmallScreen }) => ($isSmallScreen ? "12px" : "14px")};
    color: #181818;
    width: 80px;
  }

  &:hover .hover-text {
    display: block;
  }
`;

const ShareButton = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ $isSmallScreen }) => ($isSmallScreen ? "0" : "4px")};
  align-items: center;
  width: ${({ $isSmallScreen }) => ($isSmallScreen ? "56px" : "120px")};
  background-color: #fff;
  color: #181818;
  border-radius: 8px;
  font-size: ${({ $isSmallScreen }) => ($isSmallScreen ? "28px" : "16px")};
  position: relative;
  cursor: pointer;
  span {
    display: ${({ $isSmallScreen }) => ($isSmallScreen ? "none" : "block")};
  }

  .hover-text {
    display: none;
    position: absolute;
    left: -4px;
    bottom: -20px; /* 글자가 버튼 바로 아래에 위치하도록 */
    font-size: ${({ $isSmallScreen }) => ($isSmallScreen ? "12px" : "14px")};
    color: #181818;
    width: 80px;
  }

  &:hover .hover-text {
    display: block;
  }
`;

const Result = () => {
  const [resultData, setResultData] = useState({});
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get("mbti");
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });

  const resultRef = useRef(null); // 캡처할 요소를 위한 ref 생성

  useEffect(() => {
    const result = ResultData.find((s) => s.best === mbti);
    setResultData(result);
  }, [mbti]);

  const handleClickButton = () => {
    navigate("/");
  };

  // 화면 캡처 후 저장하는 함수
  const handleSaveImage = () => {
    if (!resultRef.current) return;
    html2canvas(resultRef.current).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "result.png";
      link.click();
    });
  };

  // 인스타 공유 버튼 클릭 시 URL 복사
  const handleInstagramShare = () => {
    const shareUrl = window.location.href;
    navigator.clipboard.writeText(shareUrl).then(() => {
      alert("결과 페이지 링크가 복사되었습니다!");
    });
  };

  return (
    <Wrapper $isSmallScreen={isSmallScreen} ref={resultRef}>
      <Title $isSmallScreen={isSmallScreen}>나만의 배달 습관 MBTI</Title>
      <SubTitle $isSmallScreen={isSmallScreen}>결과보기</SubTitle>
      <img src={resultData.image} alt="결과 이미지" width="300px" />
      <Desc $isSmallScreen={isSmallScreen}>
        내 음식 취향과 배달 습관에 따른 MBTI는 <br />
        {resultData.best}형 {resultData.name}입니다.
      </Desc>
      <ButtonGroup>
        <RestartButton
          $isSmallScreen={isSmallScreen}
          onClick={handleClickButton}
        >
          <FontAwesomeIcon icon={faPlay} />
          <span>테스트 다시하기</span>
          <span className="hover-text">테스트 다시하기</span>
        </RestartButton>

        <KakaoShareButton variant="warning" mbti={mbti}>
          <KakaoLogo src="/cat/kakao.png" />
          <span> 결과 공유하기</span>
        </KakaoShareButton>
        <LinkcopyButton
          onClick={handleInstagramShare}
          $isSmallScreen={isSmallScreen}
        >
          <FontAwesomeIcon icon={faLink} /> <span>링크 복사하기</span>
          <span className="hover-text">링크 복사하기</span>
        </LinkcopyButton>
        <ShareButton onClick={handleSaveImage} $isSmallScreen={isSmallScreen}>
          <FontAwesomeIcon icon={faDownload} />
          <span>사진으로 저장하기</span>
          <span className="hover-text">사진 저장하기</span>
        </ShareButton>
      </ButtonGroup>
    </Wrapper>
  );
};

export default Result;
