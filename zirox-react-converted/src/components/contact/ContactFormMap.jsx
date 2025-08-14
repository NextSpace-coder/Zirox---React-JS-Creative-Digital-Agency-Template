const ContactFormMap = () => {
  return (
    <section className="zirox-contact zirox-contact--single">
      <div className="zirox-contact__map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3644.643953583783!2d89.25012277534395!3d24.00834687849534!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe87da4863b7ad%3A0xf6f6a05d263bea24!2sultraDevs!5e0!3m2!1sen!2sbd!4v1694939218212!5m2!1sen!2sbd"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="container">
        <h2>Get In Touch</h2>
        <div className="row">
          <div className="col-12 col-md-8 col-lg-4">
            <div className="zirox-contact__left">
              <div className="zirox-contact__left-box">
                <div className="zirox-contact__left-box-img">
                  <i className="flaticon-place"></i>
                </div>
                <div className="zirox-contact__left-box-detail">
                  <h3>Address</h3>
                  <address>16 vastu arcade, 5rd Floor palace road, London.</address>
                </div>
              </div>
              <div className="zirox-contact__left-box">
                <div className="zirox-contact__left-box-img">
                  <i className="flaticon-call"></i>
                </div>
                <div className="zirox-contact__left-box-detail">
                  <h3>Phone</h3>
                  <a href="tel:882562562584">88 256 256 2584</a>
                  <a href="tel:882562562584">88 256 256 2584</a>
                </div>
              </div>
              <div className="zirox-contact__left-box">
                <div className="zirox-contact__left-box-img">
                  <i className="flaticon-open-mail-1"></i>
                </div>
                <div className="zirox-contact__left-box-detail">
                  <h3>Email </h3>
                  <a href="mailto:hello@ultradevs.com">hello@ultradevs.com</a>
                  <a href="mailto:hello@ultradevs.com">hello@ultradevs.com</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12  col-lg-8">
            <div className="zirox-contact__right">
              <div className="zirox-contact__right-form">
                <form action="/" method="POST" id="contact-form">
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <input type="text" name="fullname" id="fullname" placeholder="Full Name" />
                    </div>
                    <div className="col-12 col-md-6">
                      <input type="email" name="email" id="email" placeholder="Email Address" />
                    </div>
                    <div className="col-12 col-md-6">
                      <input type="text" name="phone" id="phone" placeholder="Phone" />
                    </div>
                    <div className="col-12 col-md-6">
                      <input type="text" name="Subject" id="Subject" placeholder="Subject" />
                    </div>
                    <div className="col-12">
                      <textarea name="message" id="message" cols="30" rows="10" placeholder="Your Message"></textarea>
                    </div>
                  </div>
                  <button className="zirox-button">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormMap;
