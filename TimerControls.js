import React, { useEffect, useRef } from "react";
import { PauseOutlined, CaretRightOutlined } from "@ant-design/icons";

function TimerControls({ timer, updateTimer }) {
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      updateTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [updateTimer]);

  const pauseTimer = () => {
    clearInterval(intervalRef.current);
  };

  const playTimer = () => {
    intervalRef.current = setInterval(() => {
      updateTimer((prevTimer) => prevTimer + 1);
    }, 1000);
  };

  return (
    <div>
      <p>Active since {timer} seconds</p>
      <button className="delete-all" onClick={pauseTimer}  type="primary">
  <PauseOutlined />
</button>

<button className="delete-all" onClick={playTimer}  type="primary">
  <CaretRightOutlined />
</button>

    </div>
  );
}

export default TimerControls;

