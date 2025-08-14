import { useState } from "react";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";
const Info = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <section className="zirox-info">
        <div className="container zirox-choose-us__experience zirox-choose-us__experience--home-2">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6">
              <div className="zirox-choose-us__experience__left">
                <span onClick={() => setOpen(!open)} className="zirox-choose-us__experience__left__img popup-youtube">
                  <i className="flaticon-play-button-arrowhead"></i>
                </span>
                <div className="zirox-choose-us__experience__left__text">
                  <h2 data-aos="fade-up" className="text-white">
                    The Best Financial & Consulting Agency
                  </h2>
                  <p data-aos="fade-up" data-aos-delay="200">
                    Agency refers to a specialized organization or institution establish to perform specific tasks,functions,or deliver services.
                  </p>
                  <Link data-aos="fade-up" data-aos-delay="400" to="/contact" className="zirox-button">
                    Get Consultations
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="zirox-choose-us__experience__right">
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div data-aos="fade" className="zirox-choose-us__experience__right-box">
                      <i className="flaticon-complete"></i>
                      <p>Complete Project</p>
                      <h2>
                        <span className="counter">5684</span>
                      </h2>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div data-aos="fade" data-aos-delay="300" className="zirox-choose-us__experience__right-box">
                      <i className="flaticon-team"></i>
                      <p>Satisfied Clients</p>
                      <h2>
                        <span className="counter">2500</span>
                      </h2>
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

export default Info;
