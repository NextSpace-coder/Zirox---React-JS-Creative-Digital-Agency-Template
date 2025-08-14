const HowItWork = () => {
  return (
    <section className="zirox-how-it-work zirox-section">
      <div className="container">
        <h6 data-aos="fade-up" className="text-center">
          How IT Works
        </h6>
        <h2 data-aos="fade-up" data-aos-delay="300" className="text-center">
          Work Planing For Our Regular Flowchart
        </h2>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <a data-aos="fade-up" href="#">
              <div className="zirox-how-it-work-item ">
                <div className="zirox-how-it-work-item-img">
                  <img src="/img/how-it-work/work-1.png" alt="Web Development" />
                </div>
                <div className="zirox-how-it-work-item-icon">
                  <i className="flaticon-back-end"></i>
                </div>
                <h6 className="text-center">Step 01</h6>
                <h3 className="text-center">Web Development</h3>
                <p className="text-center">Agencies can also exist with in international & such as the united nation.</p>
              </div>
            </a>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <a data-aos="fade-up" data-aos-delay="300" href="#">
              <div className="zirox-how-it-work-item ">
                <div className="zirox-how-it-work-item-img">
                  <img src="/img/how-it-work/work-2.png" alt="Engine Optimization" />
                </div>
                <div className="zirox-how-it-work-item-icon">
                  <i className="flaticon-planning-1"></i>
                </div>
                <h6 className="text-center">Step 02</h6>
                <h3 className="text-center">Engine Optimization</h3>
                <p className="text-center">Agencies can also exist with in international & such as the united nation.</p>
              </div>
            </a>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <a data-aos="fade-up" data-aos-delay="600" href="#">
              <div className="zirox-how-it-work-item ">
                <div className="zirox-how-it-work-item-img">
                  <img src="/img/how-it-work/work-3.png" alt="Design & Concept" />
                </div>
                <div className="zirox-how-it-work-item-icon">
                  <i className="flaticon-development"></i>
                </div>
                <h6 className="text-center">Step 03</h6>
                <h3 className="text-center">Design & Concept</h3>
                <p className="text-center">Agencies can also exist with in international & such as the united nation.</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
