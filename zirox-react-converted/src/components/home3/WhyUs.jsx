import { useState } from "react";
import ModalVideo from "react-modal-video";
const WhyUs = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <section className="zirox-choose-us zirox-section">
        <div className="zirox-choose-us__vector">
          <img className="zirox-choose-us__vector-one" src="/img/choose-us/choose-us-vector-1.png" alt="Vector" />
          <img className="zirox-choose-us__vector-two" src="/img/choose-us/choose-us-vector-2.png" alt="Vector" />
          <img className="zirox-choose-us__vector-three" src="/img/choose-us/choose-us-vector-3.png" alt="Vector" />
        </div>
        <div className="zirox-choose-us__wrapper">
          <div className="zirox-choose-us__wrapper__con">
            <div className="row align-items-center">
              <div className="col-12 col-lg-6">
                <div className="zirox-choose-us__left">
                  <img src="/img/choose-us/choose-us-left.png" alt="Choose Us" />
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="zirox-choose-us__right ">
                  <h6 data-aos="fade-up">Why Choose Us</h6>
                  <h2 data-aos="fade-up" data-aos-delay="200" className="text-white">
                    Reason For Choose Our It Solutions
                  </h2>
                  <p data-aos="fade-up" data-aos-delay="400">
                    The scope and responsibilities of an agency vary depending on its purpose and the authority delegated to it.
                  </p>
                  <div data-aos="fade-up" className="zirox-choose-us__right__item">
                    <div className="zirox-choose-us__right__item__img">
                      <i className="flaticon-team"></i>
                    </div>
                    <div className="zirox-choose-us__right__item-text">
                      <h3 className="text-white">Product Designs</h3>
                      <p>agencies are typically created to address particular need.</p>
                    </div>
                  </div>
                  <div data-aos="fade-up" data-aos-delay="300" className="zirox-choose-us__right__item">
                    <div className="zirox-choose-us__right__item__img">
                      <i className="flaticon-planning-2"></i>
                    </div>
                    <div className="zirox-choose-us__right__item-text">
                      <h3 className="text-white">Data Analytics</h3>
                      <p>agencies are typically created to address particular need.</p>
                    </div>
                  </div>
                  <div data-aos="fade-up" data-aos-delay="600" className="zirox-choose-us__right__item">
                    <div className="zirox-choose-us__right__item__img">
                      <i className="flaticon-team"></i>
                    </div>
                    <div className="zirox-choose-us__right__item-text">
                      <h3 className="text-white">Security System</h3>
                      <p>agencies are typically created to address particular need.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container zirox-choose-us__experience">
            <div className="row align-items-center">
              <div className="col-12 col-lg-6">
                <div className="zirox-choose-us__experience__left">
                  <div className="zirox-choose-us__experience__left__img">
                    <img src="/img/choose-us/dot.png" alt="Dot" />
                    <div className="zirox-choose-us__experience__left__img__pause">
                      <div className="zirox-choose-us__experience__left__img__pause__icon ">
                        <span onClick={() => setOpen(true)} className="zirox-choose-us__experience__left__img__pause__icon__wrapper cursor-pointer popup-youtube">
                          <i className="flaticon-pause"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="zirox-choose-us__experience__left__text">
                    <h2 className="text-white">25+ Years Experience For IT Solution Business</h2>
                    <button className="zirox-button">Get Consultations</button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="zirox-choose-us__experience__right">
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <div className="zirox-choose-us__experience__right-box">
                        <h2>
                          <span className="counter">200</span>+
                        </h2>
                        <p>Company Employee</p>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="zirox-choose-us__experience__right-box">
                        <h2>
                          <span className="counter">540</span>+
                        </h2>
                        <p>Project Completed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ModalVideo channel="youtube" youtube={{ mute: 0, autoplay: 0 }} isOpen={open} videoId="bYsgGkKksvs" onClose={() => setOpen(false)} />
    </>
  );
};

export default WhyUs;
