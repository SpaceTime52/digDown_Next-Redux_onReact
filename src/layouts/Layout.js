import { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { getCompare, getWishlist } from "../redux/action/utilis";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({
  children,
  sticky,
  container,
  footerBg,
  transparent,
  extraTransparentClass,
  textCenter,
  whiteMenu,
  getWishlist,
  getCompare,
}) => {
  useEffect(() => {
    getWishlist();
    getCompare();
  }, []);
  return (
    <Fragment>
      <Header
        sticky={sticky}
        container={container}
        transparent={transparent}
        extraTransparentClass={extraTransparentClass}
        whiteMenu={whiteMenu}
      />
      {children}
      <Footer
        container={container}
        footerBg={footerBg}
        textCenter={textCenter}
      />
    </Fragment>
  );
};

export default connect(null, { getWishlist, getCompare })(Layout);
