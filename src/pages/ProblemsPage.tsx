import React from "react";
import styles from "./ProblemsPage.module.css";
import { Stopwatch } from "../problems/Stopwatch";

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
    component: <Stopwatch />,
  },
  {
    id: "timer",
    name: "Timer",
    description: "Build a timer with start, pause, reset controls.",
    component: <div />,
  },
];

function ProblemsPage() {
  const [selectedProblemId, setSelectedProblemId] = React.useState("stopwatch");
  const selectedProblem =
    problems.find((problem) => problem.id === selectedProblemId) ?? problems[0];

  return (
    <main className={styles.page}>
      <aside>
        <h2>Problems</h2>
        <nav>
          {problems.map((problem) => (
            <button
              key={problem.id}
              type="button"
              onClick={() => setSelectedProblemId(problem.id)}
            >
              {problem.name}
            </button>
          ))}
        </nav>
      </aside>
      <section>
        <h1>{selectedProblem.name}</h1>
        <p>{selectedProblem.description}</p>
        {selectedProblem.component}
      </section>
    </main>
  );
}

export default ProblemsPage;
