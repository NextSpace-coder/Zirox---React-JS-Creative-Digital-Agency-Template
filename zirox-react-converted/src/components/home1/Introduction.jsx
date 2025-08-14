import { Link } from "react-router-dom";

const Introduction = () => {
  return (
    <section className="zirox-about zirox-about--introduction zirox-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6">
            <div className="zirox-about__left">
              <img src="/img/about/introduction-left.png" alt="Image" />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="zirox-about__right">
              <h6 data-aos="fade-up">Our Introduction</h6>
              <h2 data-aos="fade-up" data-aos-delay="200">
                You&apos;re Ready To Build New Design With Us
              </h2>
              <p className="zirox-about__right-text" data-aos="fade-up" data-aos-delay="400">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qofficia mollianim laborum.consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
              </p>
              <ul data-aos="fade-up" data-aos-delay="600">
                <li>
                  <i className="flaticon-tick-inside-circle"></i>
                  <p>Digital Strategy</p>
                </li>
                <li>
                  <i className="flaticon-tick-inside-circle"></i>
                  <p>Marketing Policy</p>
                </li>
                <li>
                  <i className="flaticon-tick-inside-circle"></i>
                  <p>Management</p>
                </li>
                <li>
                  <i className="flaticon-tick-inside-circle"></i>
                  <p>Web Design</p>
                </li>
              </ul>
              <Link to="/contact" className="zirox-button">
                Get Solution
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
