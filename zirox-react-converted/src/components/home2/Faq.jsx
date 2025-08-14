const Faq = () => {
  return (
    <section className="zirox-faq zirox-section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="zirox-faq__left">
              <div className="row">
                <div className="col-12 col-md-6 mt-5">
                  <a href="#">
                    <div data-aos="fade-up" className="zirox-box zirox-box--faq">
                      <div className="zirox-box-img">
                        <i className="flaticon-satisfied"></i>
                      </div>
                      <h3>Free Consulting</h3>
                      <p>Excepteur sint a occaecat cupidatat non proident,</p>
                    </div>
                  </a>
                  <a href="#">
                    <div data-aos="fade-up" data-aos-delay="200" className="zirox-box  zirox-box--faq">
                      <div className="zirox-box-img">
                        <i className="flaticon-team-1"></i>
                      </div>
                      <h3>Satisfied Services</h3>
                      <p>Excepteur sint a occaecat cupidatat non proident,</p>
                    </div>
                  </a>
                </div>
                <div className="col-12 col-md-6">
                  <a href="#">
                    <div data-aos="fade-up" data-aos-delay="400" className="zirox-box  zirox-box--faq">
                      <div className="zirox-box-img">
                        <i className="flaticon-team"></i>
                      </div>
                      <h3>Expert Member</h3>
                      <p>Excepteur sint a occaecat cupidatat non proident,</p>
                    </div>
                  </a>
                  <a href="#">
                    <div data-aos="fade-up" data-aos-delay="600" className="zirox-box  zirox-box--faq">
                      <div className="zirox-box-img">
                        <i className="flaticon-agile"></i>
                      </div>
                      <h3>Advertising Ideas</h3>
                      <p>Excepteur sint a occaecat cupidatat non proident,</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="zirox-faq__right">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item" data-aos="fade-up">
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      <i className="flaticon-plus open"></i>
                      <i className="flaticon-remove close"></i>
                      What Are The Page & Storage Limits?
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quas suscipit distinctio dignissimos nisi! Perspiciatis ipsa sit minus magnam explicabo.</div>
                  </div>
                </div>
                <div className="accordion-item" data-aos="fade-up" data-aos-delay="200">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      <i className="flaticon-plus open"></i>
                      <i className="flaticon-remove close"></i>
                      We can help your business to grow
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi eos cupiditate quisquam odio, modi laboriosam dicta debitis earum incidunt repudiandae.</div>
                  </div>
                </div>
                <div className="accordion-item" data-aos="fade-up" data-aos-delay="400">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      <i className="flaticon-plus open"></i>
                      <i className="flaticon-remove close"></i>
                      Best financial and consultancy advisors
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi eos cupiditate quisquam odio, modi laboriosam dicta debitis earum incidunt repudiandae.</div>
                  </div>
                </div>
                <div className="accordion-item" data-aos="fade-up" data-aos-delay="600">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      <i className="flaticon-plus open"></i>
                      <i className="flaticon-remove close"></i>3 Tips For Offshore Software Development
                    </button>
                  </h2>
                  <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi eos cupiditate quisquam odio, modi laboriosam dicta debitis earum incidunt repudiandae.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
