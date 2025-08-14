import { Link } from "react-router-dom";
import Slider from "react-slick";
const Hero = () => {
  const settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: "linear",
    appendDots: (dots) => (
      <div className="zirox-hero__slider__dots">
        <ul>{dots}</ul>
      </div>
    ),
  };
  return (
    <section className="zirox-hero-section zirox-hero-section--home-3">
      <div className="zirox-hero__slider__dots"></div>
      <Slider {...settings} className="zirox-hero__slider">
        {/* <!-- Slider Item --> */}
        <div className="zirox-hero__slider-item zirox-hero">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-7 d-flex align-items-center">
                <div className="zirox-hero__left">
                  <div className="zirox-hero__left__content ">
                    <div data-aos="fade-up" className="zirox-hero__left__content__top">
                      <span>Technology</span>
                      <span>Business</span>
                      <span>Consultation</span>
                    </div>
                    <h1 data-aos="fade-up" data-aos-delay="200" className=" text-white">
                      Best Grow Your Business
                    </h1>
                    <p data-aos="fade-up" data-aos-delay="400" className=" text-white text-center text-lg-start">
                      Our Best Business Technology Consulting
                    </p>
                    <div data-aos="fade-up" data-aos-delay="600">
                      <Link to="/contact" className="zirox-button zirox-button-third ">
                        Get Solution
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg-5">
                <div className="position-relative">
                  <div data-aos="fade-up" data-aos-delay="700" className="zirox-hero__right">
                    <img src="/img/home-3/hero/hero-right.png" alt="Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Slider Item --> */}

        {/* <!-- Slider Item --> */}
        <div className="zirox-hero__slider-item zirox-hero">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-7 d-flex align-items-center">
                <div className="zirox-hero__left">
                  <div className="zirox-hero__left__content">
                    <div data-aos="fade-up" className="zirox-hero__left__content__top">
                      <span>Technology</span>
                      <span>Business</span>
                      <span>Consultation</span>
                    </div>
                    <h1 data-aos="fade-up" data-aos-delay="200" className=" text-white">
                      Best Grow Your Business
                    </h1>
                    <p data-aos="fade-up" data-aos-delay="400" className=" text-white text-center text-lg-start">
                      Our Creative Business Technology Consulting
                    </p>
                    <Link data-aos="fade-up" data-aos-delay="600" to="/contact" className="zirox-button zirox-button-third ">
                      Get Solution
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg-5">
                <div className="position-relative">
                  <div data-aos="fade-up" data-aos-delay="700" className="zirox-hero__right">
                    <img src="/img/home-3/hero/hero-right.png" alt="Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Slider Item --> */}
      </Slider>
    </section>
  );
};

export default Hero;
