import Link from "next/link";
import React from "react";
import SocialLinks from "../social-links";

const footer_contents = {
  shapes: ["footer/testimonial-shape-5.4.png", "footer/team-shape-5.3.png"],
  title: "Discover our JJ Tech inner system",
  sm_text:
    "At JJ Tech we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast efficiency",
  btn_text: "Contact us",
  copy_right: (
    <>© {new Date().getFullYear()} Personal Portfolio , All Right Receved.</>
  ),
  logo: "/assets/img/logo/jj-tech-footer-logo.png",
};
const { shapes, title, sm_text, btn_text, copy_right, logo } = footer_contents;

const FooterFive = () => {
  return (
    <footer>
      <div className="tp-footer-area pt-120 p-relative black-bg p-relative">
        {shapes.map((s, i) => (
          <div key={i} className={`bs-footer-shape-${i + 1} d-none d-lg-block`}>
            <img src={`/assets/img/${s}`} alt="" />
          </div>
        ))}
        <div className="container">
          <div className="row">
            <div
              className="col-xl-12 wow tpfadeUp"
              data-wow-duration=".3s"
              data-wow-delay=".5s"
            >
              <div className="footer-widget-info bp-footer-widget-color text-center">
                <h2 className="tp-footer-title text-white pb-15">{title}</h2>
                <p>{sm_text}</p>
                <a className="tp-btn-sky mb-50" href="#">
                  {btn_text}
                </a>
                <p className="right-receved">{copy_right}</p>
              </div>
            </div>
          </div>
          <div
            className="tp-copyright-bottom pb-90 wow tpfadeUp"
            data-wow-duration=".5s"
            data-wow-delay=".7s"
          >
            <div className="row align-items-center">
              <div className="col-xl-4 col-lg-4 col-md-12 col-12">
                <div className="tp-copyright-logo-box mb-30">
                  <div className="tp-copyright-logo text-center text-lg-start">
                    <Link href="/">
                      <a>
                        <img src={logo} alt="" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterFive;
