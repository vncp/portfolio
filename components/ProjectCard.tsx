import styles from "../styles/Project.module.css";
import React from "react";
import ChevronRightRoundedIcon from "@material-ui/icons/ChevronRightRounded";

interface LinkText {
  href: string;
  text: string;
}

export interface Props {
  projectName: string;
  projectLinkTexts: LinkText[];
  projectStatus: string;
  projectDescription: string;
  projectStart: string;
}

const ProjectCard: React.FC<Props> = ({
  projectName,
  projectLinkTexts,
  projectStatus,
  projectDescription,
  projectStart,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles["card-overview"]}>
          <h5>Project</h5>
          <h2>{projectName}</h2>
          <span className={styles.links}>
            {projectLinkTexts.map(({ href, text }) => (
              <div className={styles.link}>
                <a href={href}>{text}</a>
                <ChevronRightRoundedIcon className={styles.chevron} />
              </div>
            ))}
          </span>
        </div>
        <div className={styles["card-info"]}>
          <div className={styles.meta}>
            <span className={styles["card-start-date"]}>{projectStart}</span>
            <div className={styles["card-status"]}>{projectStatus}</div>
          </div>
          <div className={styles["card-description"]}>{projectDescription}</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
