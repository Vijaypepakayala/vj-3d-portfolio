import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>NOC Engineer</h4>
                <h5>Telnyx LLC — Remote</h5>
              </div>
              <h3>2022–NOW</h3>
            </div>
            <p>
              Resolving VoIP, messaging &amp; Fax API issues across global
              infrastructure. Built Python tools that cut L1 search times by
              5–10 min per instance. AI chatbot prompt development. Key player
              in fraud detection and incident monitoring.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>3D Printing Consultant</h4>
                <h5>Independent — Chennai &amp; Botswana</h5>
              </div>
              <h3>2019–NOW</h3>
            </div>
            <p>
              CAD design with Fusion 360, AutoCAD, CATIA. Operating FDM/SLS/SLA
              printers. Prototyping for startups and engineering students.
              Running workshops on 3D printing, robotics &amp; IoT. Founded
              Printles India.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Robotics &amp; Drone Specialist</h4>
                <h5>Freelance</h5>
              </div>
              <h3>ONGOING</h3>
            </div>
            <p>
              Designing robotic systems with Arduino &amp; Raspberry Pi.
              Building IoT devices with cloud integration. Custom UAVs with
              autonomous features and 5kg+ payload capacity. Computer vision
              integration with OpenCV.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founder</h4>
                <h5>Printles — Botswana &amp; India</h5>
              </div>
              <h3>2024–NOW</h3>
            </div>
            <p>
              AI-first digital agency. Custom websites, AI chatbots, voice
              agents, SMS automation, and mobile apps for businesses across
              Botswana. Powered by Telnyx infrastructure and modern web tech.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
