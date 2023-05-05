import '../App.css';
import React from 'react';

class EducationSection extends React.Component {
  render() {
    return (
      <div className="education-section">
        <input className='school-name-input-input'></input>
        <input className='title-of-study-input'></input>
        <input type='date' className='date-of-graduation-input'></input>
      </div>
      )
  }
}

export default EducationSection;