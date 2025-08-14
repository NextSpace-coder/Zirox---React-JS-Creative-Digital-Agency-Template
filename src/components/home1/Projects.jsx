import Isotope from "isotope-layout";
import { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
const Projects = () => {
  const [isotope, setIsotope] = useState(null);
  const [filterKey, setFilterKey] = useState("*");
  const containerRef = useRef(null);
  const imagesLoaded = useRef(0);
  const totalImages = useRef(0);

  const portfolioItems = [
    { id: 1, category: "web-design", title: "Web Design", image: "/img/latest-project/latest-project-1.png" },
    { id: 2, category: "branding", title: "Branding", image: "/img/latest-project/latest-project-2.png" },
    { id: 3, category: "photography", title: "photography", image: "/img/latest-project/latest-project-3.png" },
    { id: 4, category: "branding", title: "", image: "/img/latest-project/latest-project-4.png" },
  ];

  totalImages.current = portfolioItems.length;

  const handleImageLoad = () => {
    imagesLoaded.current += 1;
    if (imagesLoaded.current === totalImages.current) {
      initIsotope();
    }
  };

  const initIsotope = () => {
    if (containerRef.current) {
      const iso = new Isotope(containerRef.current, {
        itemSelector: ".filter-item",
        layoutMode: "fitRows",
      });
      setIsotope(iso);
    }
  };

  useLayoutEffect(() => {
    return () => isotope && isotope.destroy();
  }, [isotope]);

  useLayoutEffect(() => {
    if (isotope) {
      const filter = filterKey === "*" ? "*" : `.${filterKey}`;
      isotope.arrange({ filter });
    }
  }, [isotope, filterKey]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);
  return (
    <section className="zirox-latest-projects zirox-section">
      <div className="container position-relative z-1">
        <div className="zirox-latest-projects__header">
          <div className="zirox-latest-projects__header-left">
            <h6 data-aos="fade-up" className="text-center text-xl-start">
              Latest Projects
            </h6>
            <h2 data-aos="fade-up" data-aos-delay="200" className="text-center text-xl-start text-white">
              Explore Our Best Recently Completed Projects
            </h2>
          </div>
          <div className="zirox-latest-projects__header-right">
            <ul className="zirox-latest-projects__header-right__tab">
              {["*", "branding", "photography", "web-design"].map((key) => (
                <li key={key} onClick={handleFilterKeyChange(key)}>
                  <button className={`zirox-latest-projects__header-right__tab-link filter ${filterKey == key && "active"}`} data-filter="all">
                    {key === "*" ? "All" : key.charAt(0).toUpperCase() + key.slice(1).replace("-", " ")}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-5">
        <div className="row position-relative z-1" ref={containerRef}>
          {portfolioItems.map(({ id, category, image }) => (
            <div key={id} className={`col-12 col-md-6 col-lg-3 filter-item ${category}`}>
              <Link to="/portfolio-details">
                <div className="zirox-latest-projects-item">
                  <div className="zirox-latest-projects-item-img">
                    <img src={image} alt="" className="img-fluid" onLoad={handleImageLoad} onError={handleImageLoad} />
                  </div>
                  <div className="zirox-latest-projects-item-info">
                    <h3>Financial Investment</h3>
                    <p>Marketing, Consultant</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
