import { useState } from "react";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";
const PopularServices = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <section className="zirox-services zirox-section">
        <div className="container">
          <div className="row ">
            <div className="col-12 col-md-6 col-lg">
              <div data-aos="fade-up" className="zirox-services-box ">
                <div className="zirox-services-box__img">
                  <i className="flaticon-software-development"></i>
                </div>
                <h3>Website Development</h3>
                <p>The primary goal of a creative agency businesses</p>
                <a href="#" className="zirox-services-box-icon">
                  <i className="flaticon-plus"></i>
                </a>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg">
              <div data-aos="fade-up" data-aos-delay="300" className="zirox-services-box ">
                <div className="zirox-services-box__img">
                  <i className="flaticon-marketing-strategy"></i>
                </div>
                <h3>Digital Marketing</h3>
                <p>The primary goal of a creative agency businesses</p>
                <Link to="/services-details" className="zirox-services-box-icon">
                  <i className="flaticon-plus"></i>
                </Link>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-5">
              <div data-aos="fade-up" data-aos-delay="400" className="zirox-services-text ">
                <h6>Popular Services</h6>
                <h2 className="text-white">Solution We provide Services</h2>
                <p>An agency refers to a specialized organization or institution established to perform specific tasks, functions, or service on behalf of a larger entity, such as a government.</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-5">
              <div data-aos="fade-up" data-aos-delay="500" className="zirox-services-video ">
                <img src="/img/services/service-img.png" alt="Video" />
                <div className="zirox-services-video__popup">
                  <span onClick={() => setOpen(true)} className="zirox-services-video__popup-img popup-youtube">
                    <span>
                      <i className="flaticon-play-button-arrowhead"></i>
                    </span>
                  </span>
                  <h3 className="text-white text-center">
                    UI/UX Design For <br /> Technology
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg d-flex align-items-end">
              <div data-aos="fade-up" data-aos-delay="600" className="zirox-services-box ">
                <div className="zirox-services-box__img">
                  <i className="flaticon-sketch"></i>
                </div>
                <h3>Interactive Design</h3>
                <p>The primary goal of a creative agency businesses</p>
                <Link to="/services-details" className="zirox-services-box-icon">
                  <i className="flaticon-plus"></i>
                </Link>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg d-flex align-items-end">
              <div data-aos="fade-up" data-aos-delay="700" className="zirox-services-box ">
                <div className="zirox-services-box__img">
                  <i className="flaticon-data-security"></i>
                </div>
                <h3>Branding & Strategy</h3>
                <p>The primary goal of a creative agency businesses</p>
                <Link to="/services-details" className="zirox-services-box-icon">
                  <i className="flaticon-plus"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ModalVideo channel="youtube" youtube={{ mute: 0, autoplay: 0 }} isOpen={isOpen} videoId="bYsgGkKksvs" onClose={() => setOpen(false)} />
    </>
  );
};

export default PopularServices;
