import { Link } from "react-router-dom";

const WhyChoose = () => {
  return (
    <section className="zirox-choose-us zirox-choose-us--home-2">
      <div className="container position-relative z-1">
        <div className="zirox-choose-us-vector">
          <img className="zirox-choose-us-vector-right" src="/img/choose-us/home-2-choose-us-right-vector.png" alt="Right Vector" />
        </div>
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="choose-us__left">
              <h6 data-aos="fade-up">Why Choose Us</h6>
              <h2 data-aos="fade-up" data-aos-delay="200" className="text-white">
                Innovating Solutions Digital Mindset
              </h2>
              <p data-aos="fade-up" data-aos-delay="400">
                The scope and responsibilities of an agency vary depending on its purpose and the authority delegated to it.
              </p>
              <div className="row">
                <div data-aos="fade-up" data-aos-delay="600" className="col-12 col-md-6 col-lg-12 col-xl-6">
                  <div className="choose-us__left-box">
                    <div className="choose-us__left-box-img">
                      <i className="flaticon-digital-transformation"></i>
                    </div>
                    <h3 className="choose-us__left-box-text text-white">Quality & Services</h3>
                  </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="800" className="col-12 col-md-6 col-lg-12 col-xl-6">
                  <div className="choose-us__left-box">
                    <div className="choose-us__left-box-img">
                      <i className="flaticon-market-research"></i>
                    </div>
                    <h3 className="choose-us__left-box-text text-white">SEO & Content Writing</h3>
                  </div>
                </div>
              </div>
              <Link data-aos="fade-up" data-aos-delay="1000" to="/about" className="choose-us__left-btn zirox-button">
                Discover More
              </Link>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="choose-us__right">
              <div className="choose-us__right-img">
                <img src="/img/choose-us/home-2-choose-us-right.png" alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
