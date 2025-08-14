const Statistics = () => {
  return (
    <section className="zirox-stats position-relative z-1">
      <div className="container">
        <div className="zirox-stats__vectors">
          <img className="zirox-stats__vectors-left" src="/img/stats/stats-vector-left.png" alt="Left vector" />
          <img className="zirox-stats__vectors-right" src="/img/stats/stats-vector-right.png" alt="Right vector" />
        </div>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3">
            <div data-aos="fade-up" className="zirox-box zirox-box--stats">
              <i className="flaticon-reputation"></i>
              <h2>860</h2>
              <p>Projects completed</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div data-aos="fade-up" data-aos-delay="200" className="zirox-box zirox-box--stats">
              <i className="flaticon-user-data"></i>
              <h2>50</h2>
              <p>Active Clients</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div data-aos="fade-up" data-aos-delay="400" className="zirox-box zirox-box--stats">
              <i className="flaticon-coffee"></i>
              <h2>93</h2>
              <p>Cups of coffee</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div data-aos="fade-up" data-aos-delay="600" className="zirox-box zirox-box--stats zirox-box--stats--no-line">
              <i className="flaticon-customer-review"></i>
              <h2>860</h2>
              <p>Happy clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
