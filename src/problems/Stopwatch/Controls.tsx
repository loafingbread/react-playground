import React from "react";

function Controls(props: {
  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
}) {
  return (
    <div>
      <Button buttonText="Start" onClick={props.onStart} />
      <Button buttonText="Pause" onClick={props.onPause} />
      <Button buttonText="Reset" onClick={props.onReset} />
    </div>
  );
}

function Button(props: {
  buttonText: string;
  buttonIcon: string;
  onClick: () => void;
}) {
  return (
    <button type="button" onClick={() => props.onClick()}>
      {props.buttonText}
    </button>
  );
}

export default Controls;
