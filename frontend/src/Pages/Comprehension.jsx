import React, { useState } from 'react';

const Comprehension = () => {
  const [mcqList, setMcqList] = useState([
    { question: '', options: ['', '', '', ''] },
  ]);

  const handleQuestionChange = (index, question) => {
    const updatedMcqList = [...mcqList];
    updatedMcqList[index].question = question;
    setMcqList(updatedMcqList);
  };

  const handleOptionChange = (mcqIndex, optionIndex, option) => {
    const updatedMcqList = [...mcqList];
    updatedMcqList[mcqIndex].options[optionIndex] = option;
    setMcqList(updatedMcqList);
  };

  const handleAddMcq = () => {
    setMcqList([...mcqList, { question: '', options: ['', '', '', ''] }]);
  };

  const handleRemoveMcq = (index) => {
    const updatedMcqList = [...mcqList];
    updatedMcqList.splice(index, 1);
    setMcqList(updatedMcqList);
  };

  const handleSubmit = () => {
    // Log all questions with their options to the console
    console.log('Submitted Questions:', mcqList);
  };

  return (
    <div>
      {mcqList.map((mcq, index) => (
        <div key={index}>
          <label>Question {index + 1}:</label>
          <input
            type="text"
            value={mcq.question}
            onChange={(e) => handleQuestionChange(index, e.target.value)}
          />

          <label>Options:</label>
          {mcq.options.map((option, optionIndex) => (
            <input
              key={optionIndex}
              type="text"
              placeholder={`Option ${optionIndex + 1}`}
              value={option}
              onChange={(e) =>
                handleOptionChange(index, optionIndex, e.target.value)
              }
            />
          ))}

          <button type="button" onClick={() => handleRemoveMcq(index)}>
            Remove Question
          </button>
        </div>
      ))}

      <button type="button" onClick={handleAddMcq}>
        Add Question
      </button>

      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default Comprehension