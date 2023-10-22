import React from "react";
import resumeSvg from "../../assets/resume.svg";
import linkedinSvg from "../../assets/linkedin.svg";
import githubSvg from "../../assets/github.svg";
import websiteSvg from "../../assets/website.svg";
import instagramSvg from "../../assets/instagram.svg";

import styles from "./Header.module.css";

function Header() {
  const scrollToBody = () => {
    const bodySection = document.getElementById("BodySection");
    bodySection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          <span>Resume</span> Builder
        </p>
        <p className={styles.subHeading}>
          Customise Resume <span>Absolutely Free</span>
        </p>
        <button className={styles.buildButton} onClick={scrollToBody}>
          Let's Build
        </button>
      </div>
      <div className={styles.right}>
        <img src={resumeSvg} alt="Resume" />
      </div>
      <div className={styles.developerInfo}>
        Developed By <span>Ayush Anand</span>
        <div className={styles.socialLinks}>
          <a
            href="https://ayushanand2003.github.io/Portfolio/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={websiteSvg} alt="Website" />
          </a>
          <a
            href="https://www.linkedin.com/in/ayushanand2003/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedinSvg} alt="LinkedIn" />
          </a>
          <a
            href="https://github.com/ayushanand2003/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubSvg} alt="GitHub" />
          </a>
          <a
            href="https://www.instagram.com/ayushshsh_/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagramSvg} alt="Insta" />
          </a>
          {/* Add more social media links as needed */}
        </div>
      </div>
    </div>
  );
}

export default Header;
