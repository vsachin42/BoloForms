import React, { useState } from 'react';

const Cloze = () => {
  const [sentence, setSentence] = useState('');
  const [underlinedWord, setUnderlinedWord] = useState('');
  const [questionsWithAnswers, setQuestionsWithAnswers] = useState([]);

  const handleSentenceChange = (event) => {
    setSentence(event.target.value);
    setUnderlinedWord('');
  };

  const handleUnderline = (word) => {
    setUnderlinedWord(word);
  };

  const handleAddQuestion = () => {
    // Add the current underlined word to the list of questions with answers
    if (underlinedWord) {
      setQuestionsWithAnswers([
        ...questionsWithAnswers,
        { question: sentence, answer: underlinedWord },
      ]);
    }

    // Reset the sentence and underlined word
    setSentence('');
    setUnderlinedWord('');
  };

  const handleSubmit = () => {
    // Log all questions with their answers to the console
    console.log('Submitted Questions:', questionsWithAnswers);
  };

  return (
    <div>
      <div>
        <label>Sentence:</label>
        <input
          type="text"
          value={sentence}
          onChange={handleSentenceChange}
        />
      </div>
      <div>
        <label>Underlined Word:</label>
        <input
          type="text"
          value={underlinedWord}
          readOnly
        />
      </div>
      <div>
        {sentence.split(' ').map((word, index) => (
          <span key={index}>
            {underlinedWord === word ? (
              <u>{word}</u>
            ) : (
              <span onClick={() => handleUnderline(word)}>{word}</span>
            )}{' '}
          </span>
        ))}
      </div>
      <button type="button" onClick={handleAddQuestion}>
        Add Question
      </button>
      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default Cloze