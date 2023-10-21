import React from "react";
import resumeSvg from "../../assets/resume.svg";
import linkedinSvg from "../../assets/linkedin.svg";
import githubSvg from "../../assets/github.svg";
import websiteSvg from "../../assets/website.svg";
import instagramSvg from "../../assets/instagram.svg";


import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          <span>Resume</span> Builder 
        </p>
        <p className={styles.subHeading}> 
          Customise Resume <span>Absolutely Free</span>
        </p>
      </div>
      <div className={styles.right}>
        <img src={resumeSvg} alt="Resume" />
      </div>
      <div className={styles.developerInfo}>
        Developed By <span>Ayush Anand</span>
        <div className={styles.socialLinks}>
          <a href="https://example.com">
            <img src={websiteSvg} alt="Website" />
          </a>
          <a href="https://example.com">
            <img src={linkedinSvg} alt="LinkedIn" />
          </a>
          <a href="https://example.com">
            <img src={githubSvg} alt="GitHub" />
          </a>
          <a href="https://example.com">
            <img src={instagramSvg} alt="GitHub" />
          </a>
          {/* Add more social media links as needed */}
        </div>
      </div>
    </div>
  );
}

export default Header;
