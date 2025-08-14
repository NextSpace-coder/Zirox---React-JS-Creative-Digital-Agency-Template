import { Link } from "react-router-dom";

const AboutUs3 = () => {
  return (
    <section className="zirox-about zirox-section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="zirox-about__wrapper">
              <div data-aos="fade-up" className="zirox-about__left ">
                <div data-aos="fade-up" data-aos-delay="300" className="zirox-about__left-exp">
                  <h3>30</h3>
                  <p>Years of Experience</p>
                </div>
                <div className="zirox-about__left__bg__img overflow-hidden"></div>
                <div className="zirox-about__left__front__img overflow-hidden"></div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="zirox-about__right ">
              <h6 data-aos="fade-up" data-aos-delay="300">
                Get To Know Us
              </h6>
              <h2 data-aos="fade-up" data-aos-delay="400">
                Leading The Best Digital Agency
              </h2>
              <p data-aos="fade-up" data-aos-delay="500" className="zirox-about__right-text">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qofficia mollianim laborum.consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
              </p>
              <div className="row align-items-center mb-3">
                <div className="col-12 col-md-6">
                  <div data-aos="fade-up" data-aos-delay="600" className="zirox-box">
                    <div className="zirox-box-img">
                      <i className="flaticon-group"></i>
                    </div>
                    <h3>Digital Reality</h3>
                    <p>It is a long established fact that a reader will be distracted.</p>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div data-aos="fade-up" data-aos-delay="700" className="zirox-box">
                    <div className="zirox-box-img">
                      <i className="flaticon-watch-tv"></i>
                    </div>
                    <h3>Online Magic</h3>
                    <p>It is a long established fact that a reader will be distracted.</p>
                  </div>
                </div>
              </div>
              <Link data-aos="fade-up" data-aos-delay="800" to="/contact" className="zirox-button">
                Get Solution
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs3;
