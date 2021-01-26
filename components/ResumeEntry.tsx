import { Autorenew, SubdirectoryArrowRightTwoTone } from "@material-ui/icons";
import styles from "../styles/Resume.module.css";

export interface Entry {
  entryTitle: string;
  entryTitleDescriptor?: string;
  entryComment1?: string;
  entryComment2?: string;
}

interface Props {
  title?: string;
  entries: Entry[];
}

const ResumeEntry: React.FC<Props> = ({ title = "", entries, children }) => {
  return (
    <div className={styles.entryContainer}>
      {title ? (
        <>
          <div className={styles.topicTitle}>
            <span>{title}</span>
            <span />
          </div>
          <div className={styles.titleSeparator} />
        </>
      ) : (
        <div />
      )}
      {entries.map((entry) => (
        <div style={{ width: "60%", height: "auto" }}>
          <div className={styles.entryTitleTopic}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span className={styles.entryTitle}>{entry.entryTitle}</span>
              <span>{entry.entryComment1}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span className={styles.entryTitle}>
                {entry.entryTitleDescriptor}
              </span>
              <span>{entry.entryComment2}</span>
            </div>
          </div>
          <div className={styles.entryContent}>{children}</div>
        </div>
      ))}
    </div>
  );
};
export default ResumeEntry;
