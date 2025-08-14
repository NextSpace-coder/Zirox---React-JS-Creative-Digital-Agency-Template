import { useRef } from "react";
import Slider from "react-slick";

const Testimonial = () => {
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
    // autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
    fade: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
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
    <section className="zirox-testimonials zirox-testimonials--home-3 zirox-section">
      <div className="zirox-testimonials__vectors">
        <img className="zirox-testimonials__vectors-left " src="/img/testimonials/testimonials-bg-vector.png" alt="Vector" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-xl-4">
            <div className="zirox-testimonials__text ">
              <h6 data-aos="fade-up" className="zirox-text-overlay zirox-text-overlay--pricing">
                Our Testimonial
              </h6>
              <h2 data-aos="fade-up" data-aos-delay="300">
                What They&apos;re Talking About Company
              </h2>
              <div data-aos="fade-up" data-aos-delay="600" className="zirox-pricing__text-btns zirox-pricing__text-btns--testimonials">
                <button onClick={previous} className="zirox-testimonials__text-btns-prev">
                  <i className="flaticon-left-arrow"></i>
                </button>
                <button onClick={next} className="zirox-testimonials__text-btns-next">
                  <i className="flaticon-right-arrow"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-8">
            <div className="zirox-testimonials-items-con">
              <Slider
                ref={(slider) => {
                  sliderRef = slider;
                }}
                {...settings}
                className="zirox-testimonials-items"
              >
                <div className="zirox-testimonials__item ">
                  <div className="zirox-testimonials__item-header">
                    <div className="zirox-testimonials__item-header__author">
                      <div className="zirox-testimonials__item-header__author-img">
                        <img src="/img/testimonials/author-4.png" alt="Author" />
                      </div>
                      <div className="zirox-testimonials__item-header__author-info">
                        <h3>Kevin Martin</h3>
                        <h6>Customer</h6>
                      </div>
                    </div>
                    <div className="zirox-testimonials__item-header-stars">
                      <i className="flaticon-star"></i>
                      <i className="flaticon-star"></i>
                      <i className="flaticon-star"></i>
                      <i className="flaticon-star"></i>
                      <i className="flaticon-star"></i>
                    </div>
                    <div className="zirox-testimonials__item-header-vector">
                      <i className="flaticon-quotation-1"></i>
                    </div>
                  </div>
                  <p className="zirox-testimonials__item-text">Lorem ipsum is simply free text dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore text.</p>
                </div>
                <div className="zirox-testimonials__item ">
                  <div className="zirox-testimonials__item-header">
                    <div className="zirox-testimonials__item-header__author">
                      <div className="zirox-testimonials__item-header__author-img">
                        <img src="/img/testimonials/author-5.png" alt="Author" />
                      </div>
                      <div className="zirox-testimonials__item-header__author-info">
                        <h3>Kevin Martin</h3>
                        <h6>Customer</h6>
                      </div>
                    </div>
                    <div className="zirox-testimonials__item-header-stars">
                      <i className="flaticon-star"></i>
                      <i className="flaticon-star"></i>
                      <i className="flaticon-star"></i>
                      <i className="flaticon-star"></i>
                      <i className="flaticon-star"></i>
                    </div>
                    <div className="zirox-testimonials__item-header-vector">
                      <i className="flaticon-quotation-1"></i>
                    </div>
                  </div>
                  <p className="zirox-testimonials__item-text">Lorem ipsum is simply free text dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore text.</p>
                </div>
                <div className="zirox-testimonials__item ">
                  <div className="zirox-testimonials__item-header">
                    <div className="zirox-testimonials__item-header__author">
                      <div className="zirox-testimonials__item-header__author-img">
                        <img src="/img/testimonials/author-6.png" alt="Author" />
                      </div>
                      <div className="zirox-testimonials__item-header__author-info">
                        <h3>Kevin Martin</h3>
                        <h6>Customer</h6>
                      </div>
                    </div>
                    <div className="zirox-testimonials__item-header-stars">
                      <i className="flaticon-star"></i>
                      <i className="flaticon-star"></i>
                      <i className="flaticon-star"></i>
                      <i className="flaticon-star"></i>
                      <i className="flaticon-star"></i>
                    </div>
                    <div className="zirox-testimonials__item-header-vector">
                      <i className="flaticon-quotation-1"></i>
                    </div>
                  </div>
                  <p className="zirox-testimonials__item-text">Lorem ipsum is simply free text dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore text.</p>
                </div>
                <div className="zirox-testimonials__item ">
                  <div className="zirox-testimonials__item-header">
                    <div className="zirox-testimonials__item-header__author">
                      <div className="zirox-testimonials__item-header__author-img">
                        <img src="/img/testimonials/author-6.png" alt="Author" />
                      </div>
                      <div className="zirox-testimonials__item-header__author-info">
                        <h3>Kevin Martin</h3>
                        <h6>Customer</h6>
                      </div>
                    </div>
                    <div className="zirox-testimonials__item-header-stars">
                      <i className="flaticon-star"></i>
                      <i className="flaticon-star"></i>
                      <i className="flaticon-star"></i>
                      <i className="flaticon-star"></i>
                      <i className="flaticon-star"></i>
                    </div>
                    <div className="zirox-testimonials__item-header-vector">
                      <i className="flaticon-quotation-1"></i>
                    </div>
                  </div>
                  <p className="zirox-testimonials__item-text">Lorem ipsum is simply free text dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore text.</p>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
