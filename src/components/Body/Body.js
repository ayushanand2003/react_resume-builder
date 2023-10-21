import React, { useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import { ArrowDown, Palette } from "react-feather";

import Editor from "../Editor/Editor";
import Resume from "../Resume/Resume";

import styles from "./Body.module.css";

function Body() {
  const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
  const sections = {
    basicInfo: "Basic Info",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    achievement: "Achievements",
    summary: "Summary",
    other: "Other",
  };
  const resumeRef = useRef();

  const [activeColor, setActiveColor] = useState(colors[0]);
  const [resumeInformation, setResumeInformation] = useState({
    [sections.basicInfo]: {
      id: sections.basicInfo,
      sectionTitle: sections.basicInfo,
      detail: {},
    },
    [sections.workExp]: {
      id: sections.workExp,
      sectionTitle: sections.workExp,
      details: [],
    },
    [sections.project]: {
      id: sections.project,
      sectionTitle: sections.project,
      details: [],
    },
    [sections.education]: {
      id: sections.education,
      sectionTitle: sections.education,
      details: [],
    },
    [sections.achievement]: {
      id: sections.achievement,
      sectionTitle: sections.achievement,
      points: [],
    },
    [sections.summary]: {
      id: sections.summary,
      sectionTitle: sections.summary,
      detail: "",
    },
    [sections.other]: {
      id: sections.other,
      sectionTitle: sections.other,
      detail: "",
    },
  });

  return (
    
    <div className={styles.container}>
      <div className={styles.toolbar}>
  <div className={styles.colors}>
    {colors.map((item) => (
      <span
        key={item}
        style={{ backgroundColor: item }}
        className={`${styles.color} ${
          activeColor === item ? styles.active : ""
        }`}
        onClick={() => setActiveColor(item)}
      />
    ))}
  </div>
  <ReactToPrint
    trigger={() => {
      return (
        <button className={styles.downloadButton}>
          Download <ArrowDown />
        </button>
      );
    }}
    content={() => resumeRef.current}
  />
</div>

<div className={styles.topRow}>
  <div className={`${styles.editorContainer} ${styles.panel}`}>
    <Editor
      sections={sections}
      information={resumeInformation}
      setInformation={setResumeInformation}
    />
  </div>
  <div className={`${styles.resumeContainer} ${styles.panel}`}>
    <Resume
      ref={resumeRef}
      sections={sections}
      information={resumeInformation}
      activeColor={activeColor}
    />
  </div>
</div>

<div className={styles.instructions}>
  <h3>Instructions:</h3>
  <ul>
    <li>Fill in your professional details in the respective sections.</li>
    <li>Click the "Save" button to store your input for preview.</li>
    <li>Customize the theme colors by selecting a preferred color from the palette.</li>
    <li>Website will automatically preview your resume with the chosen color scheme.</li>
    <li>Organize the sections by holding, dragging, and shifting them in the order of your choice.</li>
    <li>Click the "Download" button to generate and save your resume in the selected theme.</li>
  </ul>
</div>
</div>

  );
}

export default Body;
