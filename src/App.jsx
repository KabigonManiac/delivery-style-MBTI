import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Question from "./pages/Question";
import Result from "./pages/Result";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "question",
        element: <Question />,
      },
      {
        path: "result",
        element: <Result />,
      },
    ],
  },
]);

const GlobalStyle = createGlobalStyle`
${reset} 
/* @font-face {
  font-family: 'SimKyungha';
  src: url('/src/fonts/SimKyungha.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
} */
  @font-face {
    font-family: 'BMJUA';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/BMJUA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }


*{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
ul, li {
  list-style: none;
}
a {
  text-decoration: none;
  color: inherit;
}
body {
  font-family: 'BMJUA';
    background:#fff;
    /* background: url(https://mblogthumb-phinf.pstatic.net/MjAyMDAzMDVfMjgy/MDAxNTgzNDA1Nzc3MjIy.YGsJYEtAG6zXnuqhb354iQtjeSu3xw2O8oyhgNJ8hU0g.mbFsH3SGL2qkxlwQCdCq5Yhqm18CbnyaUSCpnbePUDIg.JPEG.westar4501/%EB%B0%B0%EA%B2%BD%ED%99%94%EB%A9%B4+%EB%85%B8%ED%8A%B8%EB%B6%81.jpg?type=w800) center/cover no-repeat;  */
    /* background: url(https://cdn.pixabay.com/photo/2024/03/24/03/25/cat-8652308_1280.jpg) center/cover no-repeat;  */
    /* background: url(https://blog.kakaocdn.net/dn/k2ftk/btq9t7DbLzw/7cPlWFd5W90KSaLkyOabE0/img.jpg) center/cover no-repeat;
    object-fit: cover; */
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
