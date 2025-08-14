import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    // autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    customPaging: (i) => (
      <div className="avatars__img">
        <i className="flaticon-plus"></i>
        <img src={`/img/testimonials/author-${i + 7}.png`} alt={`Author ${i + 1}`} />
      </div>
    ),
  };

  const testimonials = [
    {
      name: "Jeson Smith",
      position: "Founder, CEO",
      image: "./assets/img/testimonials/author-7.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
      address: "Alex Meelx - New work, USA",
    },
    {
      name: "Jeson Smith",
      position: "Founder, CEO",
      image: "./assets/img/testimonials/author-8.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua.",
      address: "Alex Meelx - New work, USA",
    },
    {
      name: "Jeson Smith",
      position: "Founder, CEO",
      image: "./assets/img/testimonials/author-9.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididun ut labore et dolore magna  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
      address: "Alex Meelx - New work, USA",
    },
    {
      name: "Jeson Smith",
      position: "Founder, CEO",
      image: "./assets/img/testimonials/author-10.png",
      text: "Lorem ipsum dolor sit amet,  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
      address: "Alex Meelx - New work, USA",
    },
  ];

  return (
    <section className="zirox-testimonials zirox-testimonials--home-2 zirox-section">
      <div className="container position-relative z-1">
        <div className="zirox-testimonials__header">
          <div className="zirox-testimonials__header-text">
            <h6>Our Testimonials</h6>
            <h2 className="text-white">What Our Clients Are Saying?</h2>
          </div>
          <div>
            <a href="#" className="zirox-button">
              Client Feedback
            </a>
          </div>
        </div>
        <Slider {...settings} className="zirox-home-2-testimonials-items">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="zirox-testimonials__item">
              <div className="zirox-testimonials__item-head">
                <div className="zirox-testimonials__item-head-author">
                  <div className="zirox-testimonials__item-head-author-img">
                    <img src={testimonial.image} alt={testimonial.name} />
                    <span>
                      <i className="flaticon-left-quotes-sign"></i>
                    </span>
                  </div>
                  <div className="zirox-testimonials__item-head-author-info">
                    <h3>{testimonial.name}</h3>
                    <h6>{testimonial.position}</h6>
                  </div>
                </div>
                <div className="zirox-testimonials__item-head-vector">
                  <i className="flaticon-quotation"></i>
                </div>
              </div>
              <p className="zirox-testimonials__item-text">&quot;{testimonial.text}&quot;</p>
              <address className="zirox-testimonials__item-address">{testimonial.address}</address>
              <div className="zirox-testimonials__item-stars">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="flaticon-star"></i>
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
