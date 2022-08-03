import Link from "next/link";
import { useEffect } from "react";
import { connect } from "react-redux";
import Banner from "../src/components/Banner";
import Blogs from "../src/components/blog/Blogs";
import Features from "../src/components/Features";
import HomePageProducts from "../src/components/product/HomePageProducts";
import HomeSlider from "../src/components/slider/HomeSlider";
import ImageSlider from "../src/components/slider/ImageSlider";
import Layout from "../src/layouts/Layout";
import { getBlog } from "../src/redux/action/blog";
import { getFeatures } from "../src/redux/action/features";
import { getHome4 } from "../src/redux/action/home";
import { getProducts } from "../src/redux/action/product";
import { filterBlog } from "../src/utils/filterBlog";

const Index4 = ({
  getHome4,

  getFeatures,
  features,
  getBlog,
  blogs,
  imageSlider,
  banner,
  getProducts,
  products,
  sliders,
}) => {
  useEffect(() => {
    getHome4();
    getFeatures();
    getBlog();
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

        <Banner banner={banner} />
        <HomePageProducts products={products} />
        <Features features={features} />
        <Blogs blogs={blogs} />
        <ImageSlider imageSlider={imageSlider} />
      </main>
    </Layout>
  );
};

const mapSateToProps = (state) => ({
  banner: state.home.home4 && state.home.home4.banner,
  features: state.features,
  sliders: state.home.home4 && state.home.home4.sliders,
  imageSlider: state.home.home4 && state.home.home4.imageSlider,
  blogs: filterBlog("man", state.blog.blogs),
  products: state.product.products,
});

export default connect(mapSateToProps, {
  getHome4,
  getFeatures,
  getBlog,
  getProducts,
})(Index4);
