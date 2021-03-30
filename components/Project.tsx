import styles from "../styles/Project.module.css";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import DescriptionIcon from "@material-ui/icons/Description";
import CloseIcon from "@material-ui/icons/Close";

export default function Projects(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    console.log("open? " + isOpen);
  };

  return (
    <motion.div className={styles["project-container"]} layout>
      <div className={styles["project-content"]}>
        <motion.div className={styles["project-text"]}>
          <div className={styles["project-title"]}>{props.title}</div>
          <div className={styles["project-body"]}>{props.body}</div>
          <br />
          <DescriptionIcon
            className={styles["project-button"]}
            fontSize="large"
            onClick={toggleOpen}
          />
        </motion.div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <motion.div
              className={styles["project-doc"]}
              layout
              initial={{ opacity: "0%", top: "-100%" }}
              animate={{ opacity: "100%", top: "100px" }}
              transition={{ duration: 0.5 }}
              exit={{ opacity: "0%", top: "-100%" }}
            >
              {props.projectDocument}
              <div className={styles["img-open-blur"]}></div>
              <CloseIcon
                fontSize="large"
                onClick={toggleOpen}
                className={styles["doc-exit"]}
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
