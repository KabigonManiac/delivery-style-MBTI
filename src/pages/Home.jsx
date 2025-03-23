import React from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${({ $isSmallScreen }) => ($isSmallScreen ? "86vh" : "100vh")};
  width: 100%;
  color: #0d0d0d;
`;

const Header = styled.div`
  font-size: ${({ $isSmallScreen }) => ($isSmallScreen ? "22px" : "30px")};
  font-weight: bold;
`;

const Title = styled.div`
  font-size: ${({ $isSmallScreen }) => ($isSmallScreen ? "16px" : "30px")};
  font-weight: bold;
  margin: 20px;
`;

const Desc = styled.div`
  color: #0d0d0d;
  padding: 10px;
  border-radius: 8px;
  margin: 10px 0;
  font-size: ${({ $isSmallScreen }) => ($isSmallScreen ? "14px" : "20px")};
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
      <Header $isSmallScreen={isSmallScreen}>나만의 배달 습관 MBTI</Header>
      <Contents>
        <Title $isSmallScreen={isSmallScreen}>
          내 음식 취향과 배달 습관, MBTI로 알아보자!
        </Title>
        <LogoImg $isSmallScreen={isSmallScreen}>
          <img className="rounded-circle" src="/img/mainbg.jpg" />
        </LogoImg>
        <Desc $isSmallScreen={isSmallScreen}>
          배달에서부터 음식 습관까지, 나만의 독특한 MBTI를 찾아보세요!
        </Desc>
        <Button onClick={handleClickButton}>테스트 시작</Button>
      </Contents>
    </Wrapper>
  );
};

export default Home;
