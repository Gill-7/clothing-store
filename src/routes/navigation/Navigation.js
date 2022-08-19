import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as BlanketLogo } from "../../assests/crown.svg";
import "./Navigation.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <BlanketLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link to="/shop" className="nav-link">
            Shop
          </Link>
          <Link to="/auth" className="nav-link">
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
