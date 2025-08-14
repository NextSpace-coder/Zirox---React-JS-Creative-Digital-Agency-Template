import { useState } from "react";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";
const Delivery = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <section className="zirox-delivery">
        <div className="zirox-delivery__content zirox-section">
          <div className="zirox-delivery__content__vectors">
            <img className="zirox-delivery__content__vectors-bg-vector" src="/img/about/delivery-bg-vector.png" alt="Vector" />
          </div>
          <div className="container">
            <div className="zirox-delivery__content-head">
              <h2 data-aos="fade-up" className="mb-0 text-white ">
                We&apos;re Delivering the Best Consulting & Finance Services
              </h2>
              <div>
                <Link to="/contact" className="zirox-button zirox-button--secondary">
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="zirox-delivery__video zirox-img-overlay ">
            <img src="/img/about/delivery-video-bg.png" alt="Video" />
            <div className="zirox-services-video__popup zirox-services-video__popup--delivery">
              <button onClick={() => setOpen(true)} className="zirox-services-video__popup-img popup-youtube">
                <span>
                  <i className="flaticon-play-button-4"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <ModalVideo channel="youtube" youtube={{ mute: 0, autoplay: 0 }} isOpen={open} videoId="bYsgGkKksvs" onClose={() => setOpen(false)} />
    </>
  );
};

export default Delivery;
