import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { ResultData } from "../assets/resultData";
import KakaoShareButton from "../components/KakaoShareButton";
import html2canvas from "html2canvas"; // html2canvas 추가

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

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const KakaoLogo = styled.img`
  width: 40px;
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
      alert(
        "결과 페이지 링크가 복사되었습니다. 인스타그램에서 붙여넣기 하세요!"
      );
    });
  };

  return (
    <Wrapper $isSmallScreen={isSmallScreen} ref={resultRef}>
      <h1>나만의 배달 습관 MBTI</h1>
      <h2>결과보기</h2>
      <img src={resultData.image} alt="결과 이미지" width="300px" />
      <p>
        내 음식 취향과 배달 습관에 따른 MBTI는 <br />
        {resultData.best}형 {resultData.name}입니다.
      </p>
      <ButtonGroup>
        <Button onClick={handleClickButton}>TEST RESTART</Button>
        <KakaoShareButton variant="warning" mbti={mbti}>
          <KakaoLogo src="/cat/kakao.png" />
          결과 공유하기
        </KakaoShareButton>
        <Button variant="primary" onClick={handleInstagramShare}>
          인스타 공유하기
        </Button>
        <Button variant="success" onClick={handleSaveImage}>
          사진으로 저장하기
        </Button>
      </ButtonGroup>
    </Wrapper>
  );
};

export default Result;
