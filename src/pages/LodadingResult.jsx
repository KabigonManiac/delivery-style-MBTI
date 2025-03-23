import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import Food01 from "../image/food01.png";
import Food02 from "../image/food02.png";
import Food03 from "../image/food03.png";
import Food04 from "../image/food04.png";
import Food05 from "../image/food05.png";
import Food06 from "../image/food06.png";
import Food07 from "../image/food07.png";
import Food08 from "../image/food08.png";
import Food09 from "../image/food09.png";
import FoodBg from "../image/foodbg.jpg";

const images = [
  Food01,
  Food02,
  Food03,
  Food04,
  Food05,
  Food06,
  Food07,
  Food08,
  Food09,
];

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative; /* 중앙 정렬을 위한 상대 위치 추가 */
  flex-direction: column;

  background: ${({ $isSmallScreen }) =>
    $isSmallScreen ? "transparent" : "#fff"};
  overflow: auto;
  position: relative; /* 로딩 컴포넌트를 절대적으로 배치하기 위해 */
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

const Spinner = styled.div`
  border: 8px solid #f3f3f3; /* 배경 */
  border-top: 8px solid #3498db; /* 상단 색상 */
  border-radius: 50%;
  width: ${({ $isSmallScreen }) => ($isSmallScreen ? "40px" : "130px")};
  height: ${({ $isSmallScreen }) => ($isSmallScreen ? "40px" : "130px")};
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const ImageWrapper = styled.div`
  position: absolute; /* 부모인 SpinnerWrapper를 기준으로 위치 지정 */
  top: 40%; /* 세로 중앙 정렬 */
  left: 50%; /* 가로 중앙 정렬 */
  transform: ${({ $isSmallScreen }) =>
    $isSmallScreen
      ? "translate(-50%, 26%)"
      : "translate(-50%, 5%)"}; /* 정확한 중앙 정렬을 위해 이동 */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`;

const FoodImage = styled.img`
  width: ${({ $isSmallScreen }) => ($isSmallScreen ? "40px" : "100px")};
  height: ${({ $isSmallScreen }) => ($isSmallScreen ? "40px" : "100px")};
`;

const LoadingText = styled.div`
  margin-top: 60px;
  font-size: 18px;
  color: #333;
  text-align: center;
`;

const LoadingResult = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <SpinnerWrapper $isSmallScreen={isSmallScreen}>
      <Spinner $isSmallScreen={isSmallScreen} />
      <ImageWrapper $isVisible={true}>
        <FoodImage
          $isSmallScreen={isSmallScreen}
          src={images[currentImageIndex]}
          alt="Food"
        />
      </ImageWrapper>
      <LoadingText>
        🥁 결과를 로드중입니다... 과연 당신의 MBTI는? 🥁
      </LoadingText>
    </SpinnerWrapper>
  );
};

export default LoadingResult;
