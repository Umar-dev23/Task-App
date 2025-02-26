import React, { createContext, useState } from "react";

// Create Context
export const TaskContext = createContext();

// Create Provider Component
export const TaskProvider = ({ children }) => {
  const [selectedTask, setSelectedTask] = useState(null);

  return (
    <TaskContext.Provider value={{ selectedTask, setSelectedTask }}>
      {children}
    </TaskContext.Provider>
  );
};
