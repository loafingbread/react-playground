import React from "react";

type AccordionProps = {
  title: string;
  children: React.ReactNode;
};

function Accordion(props: AccordionProps) {
  return (
    <div>
      <h2>{props.title}</h2>
      <ul>
        {React.Children.map(props.children, (child) => {
          return child;
        })}
      </ul>
    </div>
  );
}

export default Accordion;
