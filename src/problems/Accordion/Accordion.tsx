import React from "react";
import styles from "./Accordion.module.css";

type AccordionProps = {
  title: string;
  children: React.ReactNode;
};

function Accordion(props: AccordionProps) {
  return (
    <div className={styles["accordion"]}>
      <h2>{props.title}</h2>
      <ul>
        {React.Children.map(props.children, (child) => {
          return <li>{child}</li>;
        })}
      </ul>
    </div>
  );
}

export default Accordion;
