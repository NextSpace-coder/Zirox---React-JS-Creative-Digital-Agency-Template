import { useRef } from "react";
import Slider from "react-slick";
const Pricing = () => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 2,
    fade: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="zirox-pricing zirox-section">
      <div className="zirox-pricing__vectors">
        <img className="zirox-pricing__vectors-left" src="/img/pricing/pricing-left-vector.png" alt="Left Vector" />
        <img className="zirox-pricing__vectors-right" src="/img/pricing/pricing-right-vector.png" alt="Right Vector" />
        <h4 className="zirox-pricing__vectors-bottom zirox-bg-business">Business</h4>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-xl-4">
            <div className="zirox-pricing__text">
              <h6 data-aos="fade-up" className="zirox-text-overlay zirox-text-overlay--pricing">
                PRICES PLAN
              </h6>
              <h2 data-aos="fade-up" data-aos-delay="200">
                What They&apos;re Talking About Company
              </h2>
              <p data-aos="fade-up" data-aos-delay="400">
                Facility to produce simply advance work various
              </p>
              <div className="zirox-pricing__text-btns">
                <button onClick={previous} className="zirox-pricing__text-btns-prev">
                  <i className="flaticon-left-arrow"></i>
                </button>
                <button onClick={next} className="zirox-pricing__text-btns-next">
                  <i className="flaticon-right-arrow"></i>
                </button>
              </div>
              <div className="zirox-pricing__text-satisfaction">
                <h3 data-aos="fade-up" data-aos-delay="600">
                  90 <sup>%</sup>
                </h3>
                <p>Satisfied Customers</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-8">
            <Slider
              ref={(slider) => {
                sliderRef = slider;
              }}
              {...settings}
              className="zirox-pricing__table-items"
            >
              <div className="zirox-pricing__table">
                <div className="zirox-pricing__table-content">
                  <div className="zirox-pricing__table-content-head">
                    <p>$</p>
                    <h3>25.00/</h3>
                    <span>Silver</span>
                  </div>
                  <ul className="zirox-pricing__table-content-body">
                    <li className="zirox-pricing__table-content-body-list">
                      <i className="flaticon-check-mark"></i>
                      <p>Business New plan</p>
                    </li>
                    <li className="zirox-pricing__table-content-body-list">
                      <i className="flaticon-check-mark"></i>
                      <p>Selection of Material</p>
                    </li>
                    <li className="zirox-pricing__table-content-body-list">
                      <i className="flaticon-check-mark"></i>
                      <p>Structure of a project</p>
                    </li>
                    <li className="zirox-pricing__table-content-body-list">
                      <i className="flaticon-check-mark"></i>
                      <p>Always plan support</p>
                    </li>
                    <li className="zirox-pricing__table-content-body-list">
                      <i className="flaticon-check-mark"></i>
                      <p>Visualization premise</p>
                    </li>
                  </ul>
                  <div className="zirox-pricing__table-content-body-btn">
                    <a href="#">Get Started +</a>
                  </div>
                </div>
              </div>
              <div className="zirox-pricing__table">
                <div className="zirox-pricing__table-content">
                  <div className="zirox-pricing__table-content-head">
                    <p>$</p>
                    <h3>25.00/</h3>
                    <span>Silver</span>
                  </div>
                  <ul className="zirox-pricing__table-content-body">
                    <li className="zirox-pricing__table-content-body-list">
                      <i className="flaticon-check-mark"></i>
                      <p>Business New plan</p>
                    </li>
                    <li className="zirox-pricing__table-content-body-list">
                      <i className="flaticon-check-mark"></i>
                      <p>Selection of Material</p>
                    </li>
                    <li className="zirox-pricing__table-content-body-list">
                      <i className="flaticon-check-mark"></i>
                      <p>Structure of a project</p>
                    </li>
                    <li className="zirox-pricing__table-content-body-list">
                      <i className="flaticon-check-mark"></i>
                      <p>Always plan support</p>
                    </li>
                    <li className="zirox-pricing__table-content-body-list">
                      <i className="flaticon-check-mark"></i>
                      <p>Visualization premise</p>
                    </li>
                  </ul>
                  <div className="zirox-pricing__table-content-body-btn">
                    <a href="#">Get Started +</a>
                  </div>
                </div>
              </div>
              <div className="zirox-pricing__table">
                <div className="zirox-pricing__table-content">
                  <div className="zirox-pricing__table-content-head">
                    <p>$</p>
                    <h3>25.00/</h3>
                    <span>Silver</span>
                  </div>
                  <ul className="zirox-pricing__table-content-body">
                    <li className="zirox-pricing__table-content-body-list">
                      <i className="flaticon-check-mark"></i>
                      <p>Business New plan</p>
                    </li>
                    <li className="zirox-pricing__table-content-body-list">
                      <i className="flaticon-check-mark"></i>
                      <p>Selection of Material</p>
                    </li>
                    <li className="zirox-pricing__table-content-body-list">
                      <i className="flaticon-check-mark"></i>
                      <p>Structure of a project</p>
                    </li>
                    <li className="zirox-pricing__table-content-body-list">
                      <i className="flaticon-check-mark"></i>
                      <p>Always plan support</p>
                    </li>
                    <li className="zirox-pricing__table-content-body-list">
                      <i className="flaticon-check-mark"></i>
                      <p>Visualization premise</p>
                    </li>
                  </ul>
                  <div className="zirox-pricing__table-content-body-btn">
                    <a href="#">Get Started +</a>
                  </div>
                </div>
              </div>
              <div className="zirox-pricing__table">
                <div className="zirox-pricing__table-content">
                  <div className="zirox-pricing__table-content-head">
                    <p>$</p>
                    <h3>35.00/</h3>
                    <span>Golden</span>
                  </div>
                  <ul className="zirox-pricing__table-content-body">
                    <li className="zirox-pricing__table-content-body-list">
                      <i className="flaticon-check-mark"></i>
                      <p>Business New plan</p>
                    </li>
                    <li className="zirox-pricing__table-content-body-list">
                      <i className="flaticon-check-mark"></i>
                      <p>Selection of Material</p>
                    </li>
                    <li className="zirox-pricing__table-content-body-list">
                      <i className="flaticon-check-mark"></i>
                      <p>Structure of a project</p>
                    </li>
                    <li className="zirox-pricing__table-content-body-list">
                      <i className="flaticon-check-mark"></i>
                      <p>Always plan support</p>
                    </li>
                    <li className="zirox-pricing__table-content-body-list">
                      <i className="flaticon-check-mark"></i>
                      <p>Visualization premise</p>
                    </li>
                  </ul>
                  <div className="zirox-pricing__table-content-body-btn">
                    <a href="#">Get Started +</a>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
