import React from "react";

function Clock(props: { time: number }) {
  return <div>{props.time.toFixed(2)}</div>;
}

export default Clock;
