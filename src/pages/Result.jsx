import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { ResultData } from "../assets/resultData";
import KakaoShareButton from "../components/KakaoShareButton";

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

const Header = styled.div`
  margin-top: 30px;
  font-size: ${({ $isSmallScreen }) => ($isSmallScreen ? "30px" : "40px")};
`;

const Title = styled.div`
  font-size: ${({ $isSmallScreen }) => ($isSmallScreen ? "20px" : "30px")};
  margin: 10px;
`;

const Desc = styled.div`
  padding: 10px;
  margin: 10px 0;
  font-size: ${({ $isSmallScreen }) => ($isSmallScreen ? "16px" : "20px")};
  font-weight: bold;
  text-align: center;
  background: #0d0d0d;
  color: #fff;
  border-radius: 8px;
`;

const Contents = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LogoImg = styled.div`
  margin: 20px;
  & > img {
    width: ${({ $isSmallScreen }) => ($isSmallScreen ? "250px" : "350px")};
    height: ${({ $isSmallScreen }) => ($isSmallScreen ? "250px" : "350px")};
    object-fit: cover;
    border: 4px solid #fff;
    box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.8);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
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
  const handleClickButton = () => {
    navigate("/");
  };
  useEffect(() => {
    const result = ResultData.find((s) => s.best === mbti);
    setResultData(result);
  }, [mbti]);

  console.log(resultData);
  return (
    <Wrapper $isSmallScreen={isSmallScreen}>
      <Header $isSmallScreen={isSmallScreen}>나만의 배달 습관 MBTI</Header>
      <Contents>
        <Title $isSmallScreen={isSmallScreen}>결과보기</Title>
        <LogoImg $isSmallScreen={isSmallScreen}>
          <img className="rounded-circle" src={resultData.image} />
        </LogoImg>
        <Desc $isSmallScreen={isSmallScreen}>
          내 음식 취향과 배달 습관에 따른 MBTI 는 <br />
          {resultData.best}형 {resultData.name}입니다.
        </Desc>
        <ButtonGroup>
          <Button onClick={handleClickButton}>TEST RESTART</Button>
          <KakaoShareButton variant="warning" mbti={mbti}>
            <KakaoLogo src="/cat/kakao.png" />
            결과 공유하기
          </KakaoShareButton>
        </ButtonGroup>
      </Contents>
    </Wrapper>
  );
};

export default Result;
