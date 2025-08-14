import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <section className="zirox-blog zirox-blog--home-3 zirox-section">
      <div className="container">
        <h6 data-aos="fade-up" className="text-center zirox-text-overlay">
          Our Blog
        </h6>
        <h2 data-aos="fade-up" data-aos-delay="300">
          Our Latest New Blog
        </h2>
        <div className="row">
          <div data-aos="fade-up" className="col-12 col-md-6 col-lg-4">
            <div className="zirox-blog__post">
              <div className="zirox-blog__post-thumbnail">
                <a href="#" target="_blank">
                  <img src="/img/blog/thumbnail-4.png" alt="Post Thumbnail" />
                </a>
              </div>
              <div className="zirox-blog__post-body">
                <div className="zirox-blog__post-body-date">
                  <h3>28</h3>
                  <p>JULY</p>
                </div>
                <div className="zirox-blog__post-body-tags">
                  <div className="zirox-blog__post-body-tags__author">
                    <div className="d-flex align-items-center gap-1">
                      <i className="flaticon-round-account-button-with-user-inside"></i>
                      <p>Admin</p>
                    </div>
                  </div>
                  <div className="zirox-blog__post-body-tags__comment">
                    <div className="d-flex align-items-center gap-1">
                      <i className="flaticon-bubble-chat"></i>
                      <p>2 Comment</p>
                    </div>
                  </div>
                </div>
                <h3 className="zirox-blog__post-body-title">
                  <a href="" title="Post title">
                    You Business Advice For Growth
                  </a>
                </h3>
                <Link to="/blogs/1" className="zirox-blog__post-body-read-more">
                  Read More <i className="flaticon-right-arrow-2"></i>
                </Link>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="300" className="col-12 col-md-6 col-lg-4">
            <div className="zirox-blog__post">
              <div className="zirox-blog__post-thumbnail">
                <a href="#" target="_blank">
                  <img src="/img/blog/thumbnail-5.png" alt="Post Thumbnail" />
                </a>
              </div>
              <div className="zirox-blog__post-body">
                <div className="zirox-blog__post-body-date">
                  <h3>28</h3>
                  <p>JULY</p>
                </div>
                <div className="zirox-blog__post-body-tags">
                  <div className="zirox-blog__post-body-tags__author">
                    <div className="d-flex align-items-center gap-1">
                      <i className="flaticon-round-account-button-with-user-inside"></i>
                      <p>Admin</p>
                    </div>
                  </div>
                  <div className="zirox-blog__post-body-tags__comment">
                    <div className="d-flex align-items-center gap-1">
                      <i className="flaticon-bubble-chat"></i>
                      <p>2 Comment</p>
                    </div>
                  </div>
                </div>
                <h3 className="zirox-blog__post-body-title">
                  <a href="" title="Post title">
                    You Business Advice For Growth
                  </a>
                </h3>
                <Link to="/blogs/1" className="zirox-blog__post-body-read-more">
                  Read More <i className="flaticon-right-arrow-2"></i>
                </Link>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="600" className="col-12 col-md-6 col-lg-4">
            <div className="zirox-blog__post">
              <div className="zirox-blog__post-thumbnail">
                <a href="#" target="_blank">
                  <img src="/img/blog/thumbnail-6.png" alt="Post Thumbnail" />
                </a>
              </div>
              <div className="zirox-blog__post-body">
                <div className="zirox-blog__post-body-date">
                  <h3>28</h3>
                  <p>JULY</p>
                </div>
                <div className="zirox-blog__post-body-tags">
                  <div className="zirox-blog__post-body-tags__author">
                    <div className="d-flex align-items-center gap-1">
                      <i className="flaticon-round-account-button-with-user-inside"></i>
                      <p>Admin</p>
                    </div>
                  </div>
                  <div className="zirox-blog__post-body-tags__comment">
                    <div className="d-flex align-items-center gap-1">
                      <i className="flaticon-bubble-chat"></i>
                      <p>2 Comment</p>
                    </div>
                  </div>
                </div>
                <h3 className="zirox-blog__post-body-title">
                  <a href="" title="Post title">
                    You Business Advice For Growth
                  </a>
                </h3>
                <Link to="/blogs/1" className="zirox-blog__post-body-read-more">
                  Read More <i className="flaticon-right-arrow-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
