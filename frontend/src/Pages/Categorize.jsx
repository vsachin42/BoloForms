import React, { useState } from 'react';

const Categorize = () => {
    const [qaPairs, setQAPairs] = useState([{ question: '', answer: '' }]);

  const handleChange = (index, field, value) => {
    const updatedPairs = [...qaPairs];
    updatedPairs[index][field] = value;
    setQAPairs(updatedPairs);
  };

  const handleAddPair = () => {
    setQAPairs([...qaPairs, { question: '', answer: '' }]);
  };

  const handleRemovePair = (index) => {
    const updatedPairs = [...qaPairs];
    updatedPairs.splice(index, 1);
    setQAPairs(updatedPairs);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted with values:', qaPairs);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {qaPairs.map((pair, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder={`Question ${index + 1}`}
              value={pair.question}
              onChange={(event) => handleChange(index, 'question', event.target.value)}
            />
            <input
              type="text"
              placeholder={`Answer ${index + 1}`}
              value={pair.answer}
              onChange={(event) => handleChange(index, 'answer', event.target.value)}
            />
            <button type="button" onClick={() => handleRemovePair(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={handleAddPair}>
          Add Question
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Categorize;