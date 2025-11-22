import React from 'react';

const Question = ({ number, text, children, id }) => {
  return (
    <div className="question" id={id}>
      <div>
        <span className="question-number">{number}</span>
        <span className="question-text">{text}</span>
      </div>
      <div className="answer">
        {children}
      </div>
    </div>
  );
};

export default Question;