import { Link } from "react-router-dom";

const Service = () => {
  return (
    <section className="zirox-services zirox-services--home-2 zirox-section">
      <div className="container">
        <h6 data-aos="fade-up" className="text-center">
          Our Services
        </h6>
        <h2 data-aos="fade-up" data-aos-delay="200" className="text-center">
          Our Professional Solutions For IT Business
        </h2>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <Link data-aos="fade-up" to="/services-details">
              <div className="zirox-services-box zirox-services-box--home-2">
                <div className="zirox-services-box-img">
                  <img src="/img/services/home-2-services-1.png" alt="UX Strategy" />
                  <div className="zirox-services-box-img-icon">
                    <i className="flaticon-web-design"></i>
                  </div>
                </div>
                <div className="zirox-services-box-text">
                  <h3>UX Strategy</h3>
                  <p>Agency refers to specialized organizations or institution established to perform</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <Link data-aos="fade-up" data-aos-delay="300" to="/services-details">
              <div className="zirox-services-box zirox-services-box--home-2">
                <div className="zirox-services-box-img">
                  <img src="/img/services/home-2-services-2.png" alt="Engineering" />
                  <div className="zirox-services-box-img-icon">
                    <i className="flaticon-design"></i>
                  </div>
                </div>
                <div className="zirox-services-box-text">
                  <h3>Engineering</h3>
                  <p>Agency refers to specialized organizations or institution established to perform</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <Link data-aos="fade-up" data-aos-delay="400" to="/services-details">
              <div className="zirox-services-box zirox-services-box--home-2">
                <div className="zirox-services-box-img">
                  <img src="/img/services/home-2-services-3.png" alt="Consultancy" />
                  <div className="zirox-services-box-img-icon">
                    <i className="flaticon-business-analyst"></i>
                  </div>
                </div>
                <div className="zirox-services-box-text">
                  <h3>Consultancy</h3>
                  <p>Agency refers to specialized organizations or institution established to perform</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
