import { menu } from "@/assets/data/menu";
import React, { useState } from "react";
import AnimateHeight from "react-animate-height";
import OutsideClickHandler from "react-outside-click-handler/build/OutsideClickHandler";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [submenu, setSubmenu] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);

  const handleSubmenu = (id) => {
    if (submenu == id) {
      setSubmenu("");
    } else {
      setSubmenu(id);
    }
  };
  return (
    <header className="zirox-header-3">
      <div className="container-fluid">
        <div className="zirox-header-3__navbar p-0 d-flex align-items-center justify-content-between">
          <div className="zirox-header-3__navbar-logo">
            <Link to="/">
              <img src="/img/home-3/logo.png" alt="Logo" />
            </Link>
          </div>
          <div className="zirox-header__mobile-nav-bar d-block d-lg-none">
            <div className="zirox-mobile-nav-wrap">
              <div className="zirox-hamburger-menu">
                <div onClick={() => setMobileMenu(!mobileMenu)} className={`zirox-hamburger-menu__btn ${mobileMenu && "ud-hamburger-menu__btn--active"}`}>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-100 d-flex align-items-center justify-content-between flex-column flex-lg-row ps-5 d-none d-lg-flex">
            <ul className="zirox-header-3__navbar-socials d-none d-xl-flex">
              <li>
                <a href="#">
                  <i className="flaticon-facebook-app-symbol"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="flaticon-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="flaticon-linkedin-1"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="flaticon-pinterest-1"></i>
                </a>
              </li>
              <OutsideClickHandler onOutsideClick={() => setSearchOpen(false)}>
                <li onClick={() => setSearchOpen(!searchOpen)} className="zirox-header-3__navbar-socials-search zirox-header__navbar__btns-search">
                  <i className="flaticon-search-2"></i>
                </li>
                <div className={`zirox-search-popup zirox-search-popup--home-3 ${searchOpen && "zirox-search-popup--open"}`}>
                  <form action="/" method="GET">
                    <input type="text" name="search" id="search" placeholder="Search" />
                    <button type="submit">
                      <i className="flaticon-search-2"></i>
                    </button>
                  </form>
                </div>
              </OutsideClickHandler>
            </ul>

            <nav className="ud-main-menu ud-main-menu--home-3" aria-label="Main Navigation">
              <ul className="ud-main-menu__links">
                {menu.map(({ id, title, submenus, url }) => (
                  <React.Fragment key={id}>
                    {submenus ? (
                      <li>
                        <a href="#">
                          {title} <i className="flaticon-plus-2"></i>
                        </a>
                        <ul className="ud-main-menu__sub-menu">
                          {submenus.map(({ id, title, url }) => (
                            <li key={id}>
                              <Link to={url}>{title}</Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ) : (
                      <li>
                        <Link to={url}>{title}</Link>
                      </li>
                    )}
                  </React.Fragment>
                ))}
                <li>
                  <div className="zirox-header-3__navbar-nav-links-contact-box d-flex align-items-center gap-2 m-0 d-none d-xl-flex">
                    <i className="flaticon-mobile-call"></i>
                    <div>
                      <span>Call anytime</span>
                      <h4>
                        <a href="tel:+926668880000">92 666 888 0000</a>
                      </h4>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      {/* <!-- Side Popup --> */}
      <div className={`zirox-side-popup zirox-side-popup--home-3 ${mobileMenu && "zirox-side-popup--open"}`}>
        <div className="zirox-side-popup__header">
          <div className="zirox-side-popup__header-logo">
            <img src="/img/home-3/logo.png" alt="Logo" />
          </div>
          <button onClick={() => setMobileMenu(false)} className="side-popup-close">
            <i className="flaticon-close-button"></i>
          </button>
        </div>
        <div className="zirox-side-popup__body">
          <ul className="metismenu" id="side-menu">
            {menu.map(({ id, title, submenus, url }) => (
              <React.Fragment key={id}>
                {url ? (
                  <li>
                    <Link to={url}>{title}</Link>
                  </li>
                ) : (
                  <li>
                    <a href="#" onClick={() => handleSubmenu(id)}>
                      {title} <i className="flaticon-plus-2"></i>
                    </a>
                    <AnimateHeight height={submenu == id ? "auto" : 0}>
                      <ul className="sub-menu" aria-expanded="false">
                        {submenus.map(({ id, title, url }) => (
                          <li key={id}>
                            <Link to={url}>{title}</Link>
                          </li>
                        ))}
                      </ul>
                    </AnimateHeight>
                  </li>
                )}
              </React.Fragment>
            ))}
          </ul>
        </div>
        <div className="zirox-side-popup__bottom">
          <div className="zirox-side-popup__bottom-info">
            <div className="zirox-side-popup__bottom-info-box d-flex align-items-center gap-3 py-0 m-0">
              <i className="flaticon-phone"></i>
              <div className="zirox-header-info-box__details">
                <span>Call anytime</span>
                <h4>
                  <a href="tel:+926668880000">92 666 888 0000</a>
                </h4>
              </div>
            </div>
            <div className="zirox-side-popup__bottom-info-box d-flex align-items-center gap-3 py-0 m-0">
              <i className="flaticon-open"></i>
              <div className="zirox-header-info-box__details">
                <span>Send email</span>
                <h4>
                  <a href="mailto:hello@ultradevs.com">hello@ultradevs.com</a>
                </h4>
              </div>
            </div>
            <div className="zirox-side-popup__bottom-info-box d-flex align-items-center gap-3 py-0 m-0">
              <i className="flaticon-location"></i>
              <div className="zirox-header-info-box__details">
                <span>380 St Kilda Road</span>
                <h4>Melbourne, Australia</h4>
              </div>
            </div>
          </div>
          <ul className="zirox-side-popup__bottom-socials">
            <li>
              <a href="#">
                <i className="flaticon-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="flaticon-facebook-logo-in-circular-shape"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="flaticon-pinterest"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="flaticon-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
