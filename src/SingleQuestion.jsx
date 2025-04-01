import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useAppContext } from "./App";

const SingleQuestion = ({ id, title, info }) => {
  //   const [open, setOpen] = useState(false);
  //   const toggleQuestion = (id) => {
  //     setOpen((prevOpen) => !prevOpen);
  //   };

  const { toggleQuestion, openIds } = useAppContext();
  const isActive = openIds === id;

  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button className="question-btn" onClick={() => toggleQuestion(id)}>
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      <p> {isActive ? info : ""}</p>
    </article>
  );
};

export default SingleQuestion;
