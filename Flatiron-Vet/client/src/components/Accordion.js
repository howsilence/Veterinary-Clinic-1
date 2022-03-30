import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  function sectionClick(){
    setIsActive(!isActive);
  }

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={sectionClick}>
        <div>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive?<div className="accordion-content">{content}</div>:null}
    </div>
  );
};

export default Accordion;