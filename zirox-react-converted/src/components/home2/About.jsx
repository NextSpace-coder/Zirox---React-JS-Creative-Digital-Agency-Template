const About = () => {
  return (
    <section className="zirox-about zirox-about--home-3 zirox-section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="zirox-about__left">
              <h6 data-aos="fade-up" data-aos-delay="100">
                About US
              </h6>
              <h2 data-aos="fade-up" data-aos-delay="200">
                What They&apos;re Talking About Company
              </h2>
              <p data-aos="fade-up" data-aos-delay="300">
                There are many variations of passages of available but the majority have suffered alteration in some form, by injected hum randomised words which don&apos;t look even slightly. There are many variations of passages of available but the majority have suffered alteration in{" "}
              </p>
              <ul data-aos="fade-up" data-aos-delay="400">
                <li>
                  <i className="flaticon-check-mark"></i>
                  <p>Lorem Ipsum is not simply random text.</p>
                </li>
                <li>
                  <i className="flaticon-check-mark"></i>
                  <p>and at distracted by the readable content.</p>
                </li>
              </ul>
              <h4 data-aos="fade-up" data-aos-delay="500" className="zirox-about__left-text ">
                It is a long established fact that a reader will be and at distracted by the readable content.
              </h4>
              <div data-aos="fade-up" data-aos-delay="600" className="zirox-about__left-ceo ">
                <img className="zirox-about__left-ceo-avatar" src="/img/about/ceo.png" alt="CEO" />
                <img className="zirox-about__left-ceo-signature" src="/img/about/signature.png" alt="Signature" />
                <h4>CEO Foundation</h4>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="zirox-about__right ">
              <div className="zirox-about__right-img zirox-img-overlay">
                <img data-aos="fade-up" data-aos-delay="700" src="/img/about/home-3-about-right.png" alt="Image" />
              </div>
              <a href="#">
                <div data-aos="fade-up" data-aos-delay="800" className="zirox-about__right-project ">
                  <h2>200+</h2>
                  <h3>Project Complete</h3>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
