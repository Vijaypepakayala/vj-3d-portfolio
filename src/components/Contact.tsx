import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="mailto:vijaypepakayala99@gmail.com"
                data-cursor="disable"
              >
                vijaypepakayala99@gmail.com
              </a>
            </p>
            <p>
              <a
                href="tel:+919629597020"
                data-cursor="disable"
              >
                +91 96295 97020
              </a>
            </p>
            <h4>Education</h4>
            <p>
              B.Tech Aeronautical Engineering — 8.52 CGPA
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/vijaypepakayala27"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://linkedin.com/in/vijaypepakayala"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://printles-india.vercel.app"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Printles India <MdArrowOutward />
            </a>
            <a
              href="https://vj-portfolio-eight.vercel.app"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Portfolio <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Based in <span>Botswana</span> <br /> Building from <span>India</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
