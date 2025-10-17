import React, { useEffect, useState } from "react";
import "../css/custom.css";

function Landing() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="landing-page">
      {/* ================= NAVIGATION BAR ================= */}
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <div className="logo-placeholder"></div>
          </div>

          <ul className="nav-links">
            <li>Home</li>
            <li>Services</li>
            <li>Opportunities</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>

          <div className="nav-actions">
            <button className="btn-outline">Login</button>
            <button className="btn-primary">Sign Up</button>
            <div className="lang-selector">
              🌐 <span>EN ▼</span>
            </div>
          </div>
        </div>
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section className="hero blue-bg">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Pushing IT Consulting to the Limit</h1>
            <p>
              We are driven to create exceptional experiences within client
              ecosystems through close collaboration.
            </p>
            <div className="hero-buttons">
              <button className="btn-white">Explore Clients</button>
              <button className="btn-white">Open Positions</button>
            </div>
          </div>
          <div className="hero-image placeholder"></div>
        </div>
      </section>

      {/* ================= FIRST SECTION ================= */}
      <section className="section white-bg">
        <div className="section-content reverse">
          <div className="section-image placeholder"></div>
          <div className="section-text">
            <h1> </h1>
            <p>
              Are you looking for a career that will challenge and inspire you? 
              Do you want to work alongside some of the most talented professionals in your field?
              At Presis Konsult, we're always looking for motivated individuals who are 
              ready to take their careers to the next level.
            Join us at Presis Konsult and explore a career that will challenge you, 
            inspire you, and enable you to make a real difference in the world.
            </p>
            <button className="btn-blue">Explore Career Opportunities</button>
          </div>
        </div>
      </section>

      {/* ================= SECOND SECTION (NEW BEFORE FOOTER) ================= */}
      <section className="section-before-footer light-bg">
        <div className="section-content">
          <div className="section-image placeholder"></div>
          <div className="section-text">
            <h1> </h1>
            <p>
              Are you looking to optimize your IT systems or need expert 
            advice on your technology needs? We’re here to help!

             Book a FREE IT consultation with our experienced 
             professionals and discover how we can enhance your tech solutions.
            </p>
            <button className="btn-blue">Contact Us</button>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <hr className="footer-line" />
        <div className="footer-content">
          <div className="footer-logo">
            <div className="logo-placeholder"></div>
          </div>

          <div className="footer-links">
            <h3>Company</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>

          <div className="footer-socials">
            <h3>Follow Us</h3>
            <div className="icons">
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-x-twitter"></i></a>
              <a href="#"><i className="fab fa-whatsapp"></i></a>
              <a href="#"><i className="fab fa-telegram"></i></a>
            </div>
          </div>
        </div>

        <hr className="footer-line" />
        <p className="footer-bottom">
          © 2025 Precis Consult by Nivea Systems
        </p>
      </footer>
    </div>
  );
}

export default Landing;
