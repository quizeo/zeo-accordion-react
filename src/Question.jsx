import React from "react";
import SingleQuestion from "./SingleQuestion";

const Question = ({ question }) => {
  return (
    <section className="container">
      <h1>Zeo Questions</h1>
      {question.map((item) => {
        return <SingleQuestion key={item.id} {...item} />;
      })}
    </section>
  );
};

export default Question;
