import { Link } from "react-router-dom";

const Customer = () => {
  return (
    <section className="zirox-customer-retention">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-8">
            <h2 data-aos="fade-up">Ready to improve your customer retention rate?</h2>
          </div>
          <div className="col-12 col-lg-4">
            <div data-aos="fade-up" data-aos-delay="300" className=" text-center text-lg-end ">
              <Link to="/contact" className="zirox-button">
                Get Consultations
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customer;
