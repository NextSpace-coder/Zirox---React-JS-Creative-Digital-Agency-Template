const Footer = () => {
  return (
    <footer className="zirox-footer zirox-footer--home-3">
      <div className="container zirox-footer-delivery">
        <div className="zirox-footer-delivery__content">
          <h2 className="mb-0 text-white z-1">We&apos;re Delivering The Best Experience</h2>
          <div className="z-1">
            <a href="#" className="zirox-button zirox-button-third">
              Read More
            </a>
          </div>
        </div>
      </div>
      <div className="container zirox-footer__content">
        <div className="row">
          <div className="col-12 col-xl-7">
            <div className="zirox-footer__content__items">
              <div className="row">
                <div className="col-6 col-md-4">
                  <div className="zirox-footer__content__items-explore">
                    <h3>Explore</h3>
                    <ul>
                      <li>
                        <a href="#">About Company</a>
                      </li>
                      <li>
                        <a href="#">Meet the Team</a>
                      </li>
                      <li>
                        <a href="#">Case Stories</a>
                      </li>
                      <li>
                        <a href="#">Latest News</a>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="zirox-footer__content__items-links">
                    <h3>Links</h3>
                    <ul>
                      <li>
                        <a href="#">About</a>
                      </li>
                      <li>
                        <a href="#">Become a Coach</a>
                      </li>
                      <li>
                        <a href="#">Make Appointment</a>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="zirox-footer__content__items-contact">
                    <h3>Contact</h3>
                    <ul>
                      <li>
                        <a href="mailto:contact@example.com">contact@example.com</a>
                      </li>
                      <li>
                        <a href="#">80 Broklyn Road Street</a>
                      </li>
                      <li>
                        <a href="#">New York. USA</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="zirox-footer__content__socials">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <ul className="zirox-footer__content__socials-links">
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
                <div className="col-md-6">
                  <div className="zirox-footer__content__socials-tel">
                    <span>Call anytime</span>
                    <h4>
                      <a href="tel:+13077760608">+ 1 (307) 776-0608</a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8 col-xl-5 mx-md-auto">
            <div className="zirox-footer__content__subscribe">
              <p className="zirox-footer__content__subscribe-text">Lacus senectus dictumst cursus fringilla diam justo do placerat luctus socis interdum vehicula justo tincidunt malesuada habitant aenean </p>
              <div className="zirox-footer__content__subscribe-form">
                <form action="#" method="POST">
                  <label htmlFor="subscribe-email">Subsrcibe for Latest Articles and Resources</label>
                  <input type="email" id="subscribe-email" name="subscribe-email" required placeholder="Email Address" />
                  <button id="subscribe-submit">GO</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="zirox-footer__bar">
          <p>&copy; Copyright {new Date().getFullYear()} Zirox - All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
