import Link from "next/link";
import { useEffect } from "react";
import { connect } from "react-redux"; // redux 연결
import Features from "../src/components/Features"; // 아래쪽 features 컴포넌트
import HomePageProducts from "../src/components/product/HomePageProducts"; // 중간에 상품리스트
import HomeSlider from "../src/components/slider/HomeSlider"; // 최상단 그림 4개 슬라이더
import ImageSlider from "../src/components/slider/ImageSlider"; // 맨 아래 인스타그램 슬라이더
import Layout from "../src/layouts/Layout"; // 전체를 감싸는 레이아웃 (헤더, 푸터)
import { getFeatures } from "../src/redux/action/features"; // data : API 로 공급 필요
import { getHome4 } from "../src/redux/action/home"; // data : API 로 공급 필요
import { getProducts } from "../src/redux/action/product"; // data : API 로 공급 필요

const Index4 = ({
  getHome4,
  getFeatures,
  features,
  imageSlider,
  getProducts,
  products,
  sliders,
}) => {
  useEffect(() => {
    getHome4();
    getFeatures();
    getProducts();
  }, []);

  return (
    <Layout
      transparent
      whiteMenu
      extraTransparentClass={"transparent-header-2"}
    >
      <main>
        <section className="slider-area pos-relative">
          <div className="slider-active">
            <HomeSlider sliders={sliders}>
              {sliders &&
                sliders.map((slide, i) => (
                  <div
                    key={i}
                    className="single-slider slide-1-style slide-height-2 slide-height-4 d-flex align-items-center"
                    data-background={slide.bg}
                  >
                    <div
                      className="shape-title shape-title-4 bounce-animate"
                      style={{ zIndex: "unset" }}
                    >
                      <h2>{new Date().getFullYear()}</h2>
                    </div>
                    <div className="shape-icon shape-icon-4 bounce-animate">
                      <img src={slide.shapImg} alt="Shap" />
                    </div>
                    <div className="container">
                      <div className="row">
                        <div className="col-xl-12">
                          <div className="slide-content slide-content-4 text-center pt-40">
                            <h1 data-animation="fadeInUp" data-delay=".3s">
                              {slide.heading}
                            </h1>
                            <div className="slide-btn">
                              {slide.shopLink && (
                                <Link href="/shop">
                                  <a
                                    className="btn theme-btn"
                                    data-animation="fadeInLeft"
                                    data-delay=".6s"
                                  >
                                    shop now
                                  </a>
                                </Link>
                              )}
                              {slide.categoryLink && (
                                <Link href="/shop">
                                  <a
                                    className="btn white-btn"
                                    data-animation="fadeInRight"
                                    data-delay=".9s"
                                  >
                                    category
                                  </a>
                                </Link>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </HomeSlider>
          </div>
        </section>
        <HomePageProducts products={products} />
        <Features features={features} />
        <ImageSlider imageSlider={imageSlider} />
      </main>
    </Layout>
  );
};

const mapSateToProps = (state) => ({
  features: state.features,
  sliders: state.home.home4 && state.home.home4.sliders,
  imageSlider: state.home.home4 && state.home.home4.imageSlider,
  products: state.product.products,
});

export default connect(mapSateToProps, {
  getHome4,
  getFeatures,
  getProducts,
})(Index4);
