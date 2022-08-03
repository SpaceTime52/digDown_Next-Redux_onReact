import Head from "next/head"; // NEXT 에서 HEAD 를 제공
import { useEffect, useState } from "react"; // react 에서 useEffect , useState 가져다 활용
import { Provider } from "react-redux"; // redux Provider : 리액트 앱에 store 를 손쉽게 연동 할 수 있도록 도와주는 컴포넌트
import AllToaster from "../src/components/AllToaser"; // AllToaster component - reaction 모달 창 컴포넌트
import PreLoader from "../src/layouts/PreLoader"; // 레이아웃 컴포넌트 로드
import ScrollTop from "../src/layouts/ScrollTop"; // 레이아웃 컴포넌트 로드
import store from "../src/redux/store"; //redux store 창고 로드
import "../style/main.css"; // css 로드

{
  /* MyApp에 들어온 다양한 컴포넌트들과 그 프롭들을 활용해서 페이지를 구성합니다. */
}
function MyApp({ Component, pageProps }) {
  const [preloader, setPreloader] = useState(true);
  // 빠르게 로딩시킬 파일을 Pre Load로 지정하게 되면, 페이지 요청 시 해당 소스를 우선적으로 로드한다.

  useEffect(() => {
    // 최초 1번만 실행
    setTimeout(() => {
      store && setPreloader(false);
    }, 2000); // 2초 후 redux에 저장된 게 있으면 Preloader state를 false로 바꿈

    console.log("a"); // 모든 페이지 통틀어 1번만 불러옴

    setTimeout(() => {
      if (typeof window !== "undefined") {
        // 윈도우가 undefined 가 아니면,
        window.WOW = require("wowjs"); // 스크롤 애니메이션 관련 라이브러리 wowjs를 import 하고
      }
      new WOW.WOW().init(); // 새로운 wow 객체를 만들어 적용 -> 앱 전체에서 사용하는 애니메이션을 정의함
    }, 2000);
  }, []);

  return (
    <Provider store={store}>
      {/* redux store가 공급 가능한 영역을 정의함 */}
      <Head>
        {/* html 의 헤드 부분을 만들어 낸다. */}
        <title>Shop</title>
        <meta name="description" content />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="site.webmanifest" />
        <link rel="shortcut icon" type="image/x-icon" href="/img/favicon.png" />
      </Head>
      {/* preloader 상태에 따라 두개의 컴포넌트 로 나뉘어 배치됨 */}
      {preloader ? <PreLoader /> : <ScrollTop />}
      <AllToaster />
      {/* AllToaster component - reaction 모달 창 컴포넌트 */}
      <Component {...pageProps} />
      {/* 핵심 : 각 페이지에 들어온 다양한 컴포넌트들과 그 프롭들을 활용해서 페이지를 구성합니다. */}
    </Provider>
  );
}

export default MyApp; // MyApp Export
