import '../App.css';
import React from 'react';

class ExperienceSection extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      changedSections: []
    };
  }

  // EditSection(indexToEdit) {
  //   this.setState({
  //     changedSections: 
  //   })
  // }

  render() {
    return (
      this.props.experience.map((experienceSection) => {
        if (experienceSection.isEditing){
          return (  
            <div className="experience-section" key={experienceSection.id}>
              <h2>Experience:</h2>
              <h3>Organization Name</h3>
              <input 
                className='organization-name-input' 
                defaultValue={experienceSection.organizationName}
                onChange={() => {
                  
                }}  
              ></input>
              <h3>Position Title</h3>
              <input 
                className='position-title-input' 
                defaultValue={experienceSection.positionTitle}></input>
              <h3>Responsibilities Input</h3>
              <input 
                className='responsibilities-input' 
                defaultValue={experienceSection.responsibilities}></input>
              <h3>Last Date Worked At Organization</h3>
              <input 
                type='date' 
                className='last-date-worked-input' 
                defaultValue={experienceSection.lastDateWorked}></input>
              <button>Finish Editing</button>
              <button
              >delete</button>
            </div>  
          )
        }
        else {
          return (
            <div className="experience-section" key={experienceSection.id}>
              <h2>Experience:</h2>
              <h3>Organization Name</h3>
              <h4 
                className='organization-name' 
              >{experienceSection.organizationName}</h4>
              <h3>Position Title</h3>
              <h4 
                className='position-title' 
              >{experienceSection.positionTitle}</h4>
              <h3>Responsibilities Input</h3>
              <h4 
                className='responsibilities' 
              >{experienceSection.responsibilities}</h4>
              <h3>Last Date Worked At Organization</h3>
              <h4 
                type='date' 
                className='last-date-worked' 
              >{experienceSection.lastDateWorked}</h4>
              <button onClick={() => 
                this.props.setIsEditing(experienceSection.id)
              }
              >Edit</button>
              <button>delete</button>
            </div>
          )
        } 
      }
    ))
  }
}

export default ExperienceSection;