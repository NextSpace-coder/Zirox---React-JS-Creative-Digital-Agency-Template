import { useState } from "react";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";
const Service = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <section className="zirox-services zirox-services--home-3 zirox-section">
        <div className="zirox-services__vectors">
          <img className="zirox-services__vectors-one" src="/img/home-3/services/service-left-vector.png" alt="Vector" />
          <img className="zirox-services__vectors-two" src="/img/home-3/services/service-right-v.png" alt="Vector" />
          <h4 className="zirox-bg-business zirox-bg-business--service">Business</h4>
        </div>
        <div className="container">
          <div className="row position-relative">
            <div data-aos="fade-up" className="col-12 col-md-6 col-xl-4">
              <Link to="/services-details">
                <div className="zirox-box zirox-box--home-3 ">
                  <i className="flaticon-productivity"></i>
                  <h3>Business Growth</h3>
                  <p>Business Consulting Technology</p>
                </div>
              </Link>
            </div>
            <div data-aos="fade-up" data-aos-delay="300" className="col-12 col-md-6 col-xl-4">
              <Link to="/services-details">
                <div className="zirox-box zirox-box--home-3 ">
                  <i className="flaticon-goal"></i>
                  <h3>Marketing Advices</h3>
                  <p>Financial Business Consulting</p>
                </div>
              </Link>
            </div>
            <div data-aos="fade-up" data-aos-delay="600" className="col-12 col-md-6 col-xl-4">
              <Link to="/services-details">
                <div className="zirox-box zirox-box--home-3 ">
                  <i className="flaticon-planning"></i>
                  <h3>Finance Consulting</h3>
                  <p>Innovative Technology Solutions </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="zirox-services__financial-strategy">
            <h2 data-aos="fade-up" className="text-center">
              Expand Your Business With Our Financial Strategy
            </h2>
            <div className="zirox-services__financial-strategy-video ">
              <img data-aos="fade-up" data-aos-delay="500" src="/img/home-3/services/home-3-services-video.png" alt="video" />
              <div className="zirox-services-video__popup zirox-services-video__popup--home-3">
                <span onClick={() => setOpen(true)} className="zirox-services-video__popup-img cursor-pointer popup-youtube">
                  <span>
                    <i className="flaticon-play-1"></i>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ModalVideo channel="youtube" youtube={{ mute: 0, autoplay: 0 }} isOpen={open} videoId="bYsgGkKksvs" onClose={() => setOpen(false)} />
    </>
  );
};

export default Service;
