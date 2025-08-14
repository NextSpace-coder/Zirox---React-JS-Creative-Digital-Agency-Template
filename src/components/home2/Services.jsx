import { Link } from "react-router-dom";

const PopularServices = () => {
  return (
    <section className="zirox-services zirox-services--popular-services zirox-section">
      <div className="zirox-services__vectors">
        <img className="zirox-services__vectors-left" src="/img/services/service-left-vector.png" alt="Left Vector" />
        <img className="zirox-services__vectors-right" src="/img/services/service-right-vector.png" alt="Right Vector" />
        <h4 className="zirox-bg-business">Business</h4>
      </div>
      <div className="container">
        <h6 data-aos="fade-up" className="text-center zirox-text-overlay">
          OUR POPULAR SERVICES
        </h6>
        <h2 data-aos="fade-up" data-aos-delay="200" className="text-center">
          What We Provide For You
        </h2>
        <div className="row position-relative z-3">
          <div data-aos="fade-up" className="col-12 col-md-6 col-lg-3">
            <Link to="/services-details">
              <div className="zirox-box zirox-box--home-3 zirox-box--popular-services ">
                <i className="flaticon-target"></i>
                <h3>Our Strategies Plan</h3>
                <p>Lorem ipsum dolor sit amet, consectetur.</p>
              </div>
            </Link>
          </div>
          <div data-aos="fade-up" data-aos-delay="200" className="col-12 col-md-6 col-lg-3">
            <Link to="/services-details">
              <div className="zirox-box zirox-box--home-3 zirox-box--popular-services ">
                <i className="flaticon-recovery"></i>
                <h3>Assurance And Audit</h3>
                <p>Lorem ipsum dolor sit amet, consectetur.</p>
              </div>
            </Link>
          </div>
          <div data-aos="fade-up" data-aos-delay="400" className="col-12 col-md-6 col-lg-3">
            <Link to="/services-details">
              <div className="zirox-box zirox-box--home-3 zirox-box--popular-services ">
                <i className="flaticon-report"></i>
                <h3>Our Management Tax </h3>
                <p>Lorem ipsum dolor sit amet, consectetur.</p>
              </div>
            </Link>
          </div>
          <div data-aos="fade-up" data-aos-delay="600" className="col-12 col-md-6 col-lg-3">
            <Link to="/services-details">
              <div className="zirox-box zirox-box--home-3 zirox-box--popular-services ">
                <i className="flaticon-statistics"></i>
                <h3>Our Marketing Research</h3>
                <p>Lorem ipsum dolor sit amet, consectetur.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularServices;
