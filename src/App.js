import logo from './logo.svg';
import './App.css';
import React from 'react';
import ExperienceSection from './components/experienceSection';
import EducationSection from './components/educationSection';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      experienceSections: [],
    }

    this.SetIsEditing = this.SetIsEditing.bind(this);
    this.EditWorkExperience = this.EditWorkExperience.bind(this);
  }

  AddWorkExperience() {
    this.setState({experienceSections: this.state.experienceSections.concat({
      id: this.state.experienceSections.length,
      isEditing: false,
      organizationName: 'Enter Organization',
      positionTitle: 'Enter Position Title',
      responsibilities: 'Enter Responsibilities',
      lastDateWorked: 'Enter Last Date Worked'
    }
    )});
  }

  SetIsEditing(indexToEdit) {
    this.setState({experienceSections: 
      this.state.experienceSections.map((section, index) => {
        if (index === indexToEdit){
          return {
            id: section.id,
            isEditing: true,
            organizationName: section.organizationName,
            positionTitle: section.positionTitle,
            responsibilities: section.responsibilities,
            lastDateWorked: section.lastDateWorked  
          }
        }
        else {
          return section;
        }
      })
    })
  }

  EditWorkExperience(input) {
    this.setState({
      experienceSections: this.state.experienceSections.map((section, index) => {
          if (index === input.id) {
            return input;
          }
          else {
            return this.state.experienceSections[index];
          }
      })
    });
  }

  DeleteWorkExperienceAtIndex(input) {
    this.setState({
      experienceSections: this.state.experienceSections.slice(0, input).concat(
        this.state.experienceSections.slice(input))
    });
  }

  render() {
    return (
      <div className="App">
        <input id='name-input'></input>
        <input id='email-input'></input>
        <input id='phone-number-input'></input>
        <div id='experienceSections container'>
          <button onClick={
            () => this.AddWorkExperience()
          }>Add work experience</button>
          <ExperienceSection 
            experience={this.state.experienceSections}
            setIsEditing={this.SetIsEditing}
            EditWorkExperience={this.EditWorkExperience}
            DeleteWorkExperienceAtIndex={this.DeleteWorkExperienceAtIndex} />
        </div>
      </div>
    );
  }  
}

export default App;
