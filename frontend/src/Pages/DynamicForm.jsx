import React from 'react';
import Categorize from './Categorize';
import Cloze from './Cloze';
import Comprehension from './Comprehension';
  

const DynamicForm = () => {
    
    return (
      <div className="dynamic">
        <h3>Categroize</h3>
       <Categorize/>
        <h3>Cloze</h3>
       <Cloze/>
        <h3>Comprehension</h3>
       <Comprehension/>
      </div>
    );
}

export default DynamicForm;