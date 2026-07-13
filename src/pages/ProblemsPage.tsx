import React from "react";
import styles from "./ProblemsPage.module.css";
import { Stopwatch } from "../problems/Stopwatch";
import { Accordion } from "../problems/Accordion";

type Problem = {
  id: string;
  name: string;
  description: string;
  component: React.ReactNode;
};

const problems: Problem[] = [
  {
    id: "stopwatch",
    name: "Stopwatch",
    description: "Build a stopwatch with start, pause, reset controls.",
    component: <Stopwatch style={{}} />,
  },
  {
    id: "timer",
    name: "Timer",
    description: "Build a timer with start, pause, reset controls.",
    component: <div />,
  },
  {
    id: "accordion",
    name: "Accordion",
    description: "Build an accordion that collapses and expands",
    component: (
      <Accordion title={"Cameras"}>
        <p>Camera 1</p>
        <p>Camera 2</p>
        <p>Camera 3</p>
      </Accordion>
    ),
  },
];

function ProblemsPage() {
  const [selectedProblemId, setSelectedProblemId] = React.useState("stopwatch");
  const selectedProblem =
    problems.find((problem) => problem.id === selectedProblemId) ?? problems[0];

  return (
    <main className={styles.page}>
      <aside className={styles["sidebar"]}>
        <h2>Problems</h2>
        <nav className={styles["nav-vertical"]}>
          {problems.map((problem) => (
            <button
              key={problem.id}
              type="button"
              onClick={() => setSelectedProblemId(problem.id)}
              className={`${styles["nav-button"]} ${selectedProblem.id === problem.id ? styles["active-tab"] : ""}`}
            >
              {problem.name}
            </button>
          ))}
        </nav>
      </aside>
      <section className={styles["contents"]}>
        <h1>{selectedProblem.name}</h1>
        <p>{selectedProblem.description}</p>
        <div className={styles["problem"]}>{selectedProblem.component}</div>
      </section>
    </main>
  );
}

export default ProblemsPage;
