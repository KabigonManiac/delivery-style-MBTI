import React from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import FoodBg from "../image/foodbg.jpg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${({ $isSmallScreen }) => ($isSmallScreen ? "86vh" : "100vh")};
  width: 100%;
  color: #1e1e1e;
  background: ${({ $isSmallScreen }) =>
    $isSmallScreen ? "transparent" : "#fff"};
  overflow: auto;

  // 배경 흐림 효과 적용
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ $isSmallScreen }) =>
      $isSmallScreen ? `url(${FoodBg}) no-repeat center/cover` : "none"};
    filter: brightness(1.2);
    opacity: 0.1;
    z-index: -1;
  }
`;

const Header = styled.div`
  font-size: ${({ $isSmallScreen }) => ($isSmallScreen ? "28px" : "30px")};
  font-weight: bold;
`;

const Title = styled.div`
  font-size: ${({ $isSmallScreen }) => ($isSmallScreen ? "16px" : "30px")};
  font-weight: bold;
  color: #1e1e1e;
  margin: ${({ $isSmallScreen }) => ($isSmallScreen ? "18px 0 0 0" : "20px")};
`;

const Desc = styled.div`
  padding: 10px;
  border-radius: 8px;
  text-align: center;
  width: ${({ $isSmallScreen }) => ($isSmallScreen ? "260px" : "")};
  margin: ${({ $isSmallScreen }) => ($isSmallScreen ? "0" : "10px 0")};
  margin-bottom: ${({ $isSmallScreen }) => ($isSmallScreen ? "10px" : "0")};
  font-size: ${({ $isSmallScreen }) => ($isSmallScreen ? "16px" : "20px")};
  color: #3a3a3a;
  line-height: 1.4;
`;

const Highlight = styled.span`
  background: linear-gradient(transparent 50%, #ffeb3b 50%);
  padding: 2px 4px;
  border-radius: 4px;
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
  & > img {
    width: 300px;
    height: 300px;
    padding: 10px;
    margin: ${({ $isSmallScreen }) => ($isSmallScreen ? "16px" : "40px")};
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    object-fit: cover;
  }
`;

const Home = () => {
  const navigate = useNavigate();
  const handleClickButton = () => {
    navigate("/question");
  };
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <Wrapper $isSmallScreen={isSmallScreen}>
      <Header $isSmallScreen={isSmallScreen}>
        <Highlight>나만의 배달 습관 MBTI</Highlight>
      </Header>
      <Contents>
        <Title $isSmallScreen={isSmallScreen}>
          내 음식 취향과 배달 습관, MBTI로 알아보자!
        </Title>
        <LogoImg $isSmallScreen={isSmallScreen}>
          <img className="rounded-circle" src="/img/mainbg.jpg" />
        </LogoImg>
        <Desc $isSmallScreen={isSmallScreen}>
          배달에서부터 음식 습관까지, <br />
          나만의 독특한 MBTI를 찾아보세요!
        </Desc>
        <Button onClick={handleClickButton}>테스트 시작</Button>
      </Contents>
    </Wrapper>
  );
};

export default Home;
