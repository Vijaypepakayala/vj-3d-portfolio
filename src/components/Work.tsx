import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Printles India",
    category: "3D Printing & CAD Services",
    tools: "Fusion 360, FDM/SLA Printing, React, Telnyx SMS",
    image: "/images/printles.png",
    link: "https://printles-india.vercel.app",
  },
  {
    title: "Maxi Ranch BW",
    category: "Luxury Safari Lodge Website",
    tools: "Editorial Design, Parallax, Alpine.js, Vercel",
    image: "/images/maxiranch.png",
    link: "https://maxiranchbw.vercel.app",
  },
  {
    title: "AI Agriculture Robot",
    category: "Autonomous Farming Robot",
    tools: "Python, OpenCV, Arduino, GPS Navigation",
    image: "/images/agribot.png",
    link: "#",
  },
  {
    title: "Heavy Payload Hexacopter",
    category: "Custom 5kg+ Payload Drone",
    tools: "Pixhawk, ArduPilot, Fusion 360, Carbon Fibre",
    image: "/images/hexacopter.png",
    link: "#",
  },
  {
    title: "NOC Python Tool",
    category: "Internal Investigation Automation",
    tools: "Python, asyncio, REST API, SQL",
    image: "/images/noctool.png",
    link: "#",
  },
  {
    title: "Home Automation",
    category: "Full-Home IoT System",
    tools: "Raspberry Pi, MQTT, Blynk, Relays",
    image: "/images/homeauto.png",
    link: "#",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
