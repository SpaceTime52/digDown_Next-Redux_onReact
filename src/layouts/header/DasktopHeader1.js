import Link from "next/link";
const DasktopHeader = ({ whiteMenu }) => {
  return (
    <div className={`main-menu text-center ${whiteMenu ? "menu-white" : ""}`}>
      <nav id="mobile-menu">
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/shop">Shop</Link>
          </li>
          <li>
            <Link href="/about">
              <a> Contact Us</a>
            </Link>
            <ul className="submenu">
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/about">
              <a> My page</a>
            </Link>
            <ul className="submenu">
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
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DasktopHeader;
