import Image from "next/image";
import Link from "next/link";
import Banner from "../../public/img/banner/add.jpg";
import Time from "../../public/img/icon/time.png";
import Logo from "../../public/img/logo/footer-logo.png";
const Footer = ({ container, footerBg, textCenter }) => {
  return (
    <footer>
      <div
        className={`${
          !container
            ? "footer-area box-90 pt-100 pb-60"
            : "footer-area pl-100 pr-100 mt-100"
        }`}
      >
        <div
          className={footerBg ? "footer-area box-90 pt-100 pb-60" : ""}
          data-background={footerBg ? "/img/bg/footer.jpg" : ""}
          style={{
            backgroundImage: footerBg ? 'url("/img/bg/footer.jpg")' : "",
          }}
        >
          <div className={`${container ? "container" : "container-fluid"}`}>
            <div className="row">
              <div className="col-xl-3 col-lg-5 col-md-6 ">
                <div className="footer-widget mb-40">
                  <div className="footer-logo">
                    <Link href="/">
                      <a>
                        <Image src={Logo} alt="Logo" />
                      </a>
                    </Link>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore mag na
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-3 d-lg-none d-xl-block">
                <div className="footer-widget pl-50 mb-40">
                  <h3>Social Media</h3>
                  <ul className="footer-link">
                    <li>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        Youtube
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-3 d-lg-none d-xl-block">
                <div className="footer-widget pl-30 mb-40">
                  <h3>Location</h3>
                  <ul className="footer-link">
                    <li>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        Seoul
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        Jeju
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-3">
                <div className="footer-widget mb-40">
                  <h3>About</h3>
                  <ul className="footer-link">
                    <li>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        About us
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area box-105">
        <div className="container-fluid">
          <div className={`${footerBg ? "" : "copyright-border"} pt-30 pb-30`}>
            <div className="row">
              <div
                className={`${
                  textCenter ? "col-xl-12" : "col-xl-6 col-lg-6 col-md-6"
                }`}
              >
                <div
                  className={`copyright text-center  ${
                    textCenter ? "" : "text-md-left"
                  }`}
                >
                  <p>
                    Copyright © {new Date().getFullYear()}{" "}
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      BasicTheme
                    </a>
                    . All Rights Reserved
                  </p>
                </div>
              </div>
              {!textCenter && (
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="footer-icon text-center text-md-right ">
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      <i className="fab fa-youtube" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
