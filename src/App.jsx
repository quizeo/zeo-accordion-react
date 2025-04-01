import React, { useState, createContext, useContext } from "react";
import questions from "./data";
import SingleQuestion from "./SingleQuestion";
import Question from "./Question";

export const AppContext = createContext();
export const useAppContext = () => {
  return useContext(AppContext);
};

const App = () => {
  const [question, setQuestion] = useState(questions);
  const [openIds, setOpenIds] = useState(null);

  const toggleQuestion = (id) => {
    const isActive = openIds === id ? null : id;
    setOpenIds(isActive);
  };

  return (
    <AppContext.Provider value={{ toggleQuestion, openIds }}>
      <main>
        <Question question={question} />
      </main>
    </AppContext.Provider>
  );
};
export default App;
