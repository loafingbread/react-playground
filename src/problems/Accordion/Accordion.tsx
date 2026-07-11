import React from "react";
import styles from "./Accordion.module.css";
import { IoMdArrowDropright, IoMdArrowDropdown } from "react-icons/io";

type AccordionProps = {
  title: string;
  isOpen: boolean;
  children: React.ReactNode;
};

function Accordion(props: AccordionProps) {
  const [isOpen, setIsOpen] = React.useState(props.isOpen || false);

  const accordionContents: React.ReactNode = (
    <ul>
      {React.Children.map(props.children, (child, index) => {
        return <li key={index}>{child}</li>;
      })}
    </ul>
  );

  return (
    <div className={styles["accordion"]}>
      <div
        className={styles["accordion-header"]}
        onClick={() => {
          setIsOpen((currentIsOpen: boolean) => !currentIsOpen);
        }}
      >
        {isOpen ? <IoMdArrowDropdown /> : <IoMdArrowDropright />}
        <h2>{props.title}</h2>
      </div>
      {isOpen ? accordionContents : null}
    </div>
  );
}

export default Accordion;
