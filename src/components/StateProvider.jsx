import React, { createContext, useEffect, useState } from "react";
export const StateContext = createContext();

const StateProvider = ({ children }) => {
  const [workTime, setWorkTime] = useState(25 * 60);
  const [shortBreakTime, setShortBreakTime] = useState(5 * 60);
  const [longBreakTime, setLongBreakTime] = useState(30 * 60);

  const [initTime, setInitTime] = useState(0);

  const [activeTag, setActiveTag] = useState(0);
  const [progress, setProgess] = useState(50);
  const [time, setTime] = useState(500);
  const [isActive, setActive] = useState(false);
  useEffect(() => {
    switch (activeTag) {
      case 0:
        setTime(workTime);
        setInitTime(workTime);
        break;
      case 1:
        setTime(shortBreakTime);
        setInitTime(shortBreakTime);
        break;
      case 2:
        setTime(longBreakTime);
        setInitTime(longBreakTime);
        break;
      default:
        break;
    }
  }, [activeTag, workTime, shortBreakTime, longBreakTime]);
  return (
    <StateContext.Provider
      value={{
        activeTag,
        setActiveTag,
        progress,
        setProgess,
        time,
        setTime,
        isActive,
        setActive,
        initTime,
        setInitTime,
        workTime,
        setWorkTime,
        shortBreakTime,
        setShortBreakTime,
        longBreakTime,
        setLongBreakTime,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export default StateProvider;
