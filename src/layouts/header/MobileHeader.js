import Link from "next/link";
import { Fragment, useState } from "react";

const MobileHeader = () => {
  const [mainHeader, setMainHeader] = useState(false);
  const [subMenu, setSubMenu] = useState("page");
  return (
    <div className="mobile-menu mean-container">
      <div className="mean-bar">
        <a
          href="#nav"
          className={`meanmenu-reveal ${
            mainHeader
              ? "d-flex align-items-center justify-content-center fs-18"
              : ""
          }`}
          onClick={(e) => {
            setMainHeader(!mainHeader);
            e.preventDefault();
          }}
        >
          {mainHeader ? (
            "X"
          ) : (
            <Fragment>
              <span />
              <span />
              <span />
            </Fragment>
          )}
        </a>
        <nav className={`mean-nav mobile-header ${mainHeader ? "block" : ""}`}>
          <ul>
            <li>
              <Link href="/shop">
                <a>Shop</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About Us</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact Us</a>
              </Link>
            </li>
            <li>
              <a
                href="#"
                onClick={() => setSubMenu(subMenu === "page" ? false : "page")}
              >
                My Page
              </a>
              <ul className={`submenu ${subMenu === "page" ? "block" : ""}`}>
                <li>
                  <Link href="/login">login</Link>
                </li>
                <li>
                  <Link href="/register">Register</Link>
                </li>
                <li>
                  <Link href="/cart">Shoping Cart</Link>
                </li>
                <li>
                  <Link href="/wishlist">Wishlist</Link>
                </li>
              </ul>
              <a
                className="mean-expand"
                href="#"
                onClick={() => setSubMenu(subMenu === "page" ? false : "page")}
              >
                {subMenu === "page" ? "-" : "+"}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileHeader;
