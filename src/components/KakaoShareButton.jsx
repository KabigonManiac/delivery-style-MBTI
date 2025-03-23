import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import KaKaoLogo from "../image/kakao.png";
import { ResultData } from "../assets/resultData";
const { Kakao } = window;

const KakaoLogo = styled.img``;

const Sharebtn = styled.div`
  display: flex;
  text-align: center;
`;

const KakaoShareButton = ({ data }) => {
  console.log(data);
  const url = "https://cutecatmbti.netlify.app";
  const resultURL = window.location.href;

  useEffect(() => {
    Kakao.cleanup();
    Kakao.init("91269300d87b8d84a6326a10be6f7096");
  }, []);

  const sharekakao = () => {
    console.log("test");
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "예비 집사 판별기 결과",
        description: `예비 집사님이 고양이를 키운다면 가장 잘맞는 고양이는 ${data.resultData} ${data.name}입니다.`,
        imageUrl: `${url}${data.image}`,
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
        <KakaoLogo
          src={KaKaoLogo}
          alt="Kakao Logo"
          style={{ width: "24px", marginRight: "4px" }} // 이미지 스타일 조정
        />
        친구 공유하기
      </Sharebtn>
    </Button>
  );
};

export default KakaoShareButton;
