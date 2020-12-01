import React, { Component } from "react";
import "./Projects.css"

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          title: "Out Yonder",
          description: "React/Node/Express/Mongodb app made for locating parks across the US and any additional information about them",
          url: "",
          github: "https://github.com/wilsoncollin7/project-3",
          image: ""
        },
        {
          title: "Gallivant",
          description: "JS/JQuery/Node/HTML/CSS Web application that helps plan and display travel details, such as flight times, weatther info for the destination, and points of interest.",
          url: "https://wasteofadrumbum.github.io/Gallivant/",
          github: "https://github.com/WasteOfADrumBum/Gallivant",
          image: ""
        },
        {
          title: "Code Quiz",
          description: "The 'Code' Quiz is a fun web game that asks the user simple random coding questions and challenges them to get the highest score in the alloted time",
          url: "https://tanner336.github.io/CodeQuiz/",
          github: "https://github.com/Tanner336/CodeQuiz",
          image: ""
        },
        {
          title: "Personal Day Planner",
          description: "This is a reactive web application that utilizes local storage to schedule and plan events throught the day. It also notes the current date and time of day.",
          url: "https://tanner336.github.io/DayPlannerHW/",
          github: "https://github.com/Tanner336/DayPlannerHW",
          image: ""
        },
        {
          title: "Employee Directory",
          description: "React/JQuery/JS simple web application that allows the user to enter employee information and is then saved and displayed on a table.",
          url: "https://tanner336.github.io/React-Employee-Dir/",
          github: "https://github.com/Tanner336/React-Employee-Dir",
          image: ""
        },
        {
          title: "ThinkCakes",
          description: "*This project is still in development*  This is a JS/JQuery/SQL/Node/handlebars app that makes a user account and saves users favorite cake recipes. It allows them to upload their own recipes, as well as rate and comment on other users recipes.",
          url: "",
          github: "https://github.com/arodrigu1/Project2",
          image: ""
        }
      ]

    };
    this.renderProjects = this.renderProjects.bind(this);
  }

  renderProjects() {
    const projects = this.state.projects.map((project, index) => {
      // return <ProjectItem project={project} key={index}/>
        return <li>{project.title} {index}</li> 
    })
    return projects;
      
  }
    

  

  render() {
    return (
      <div className="work">
        <h1>Current Projects Finished and in Development</h1>
        <section className="projects">
          <ol>
            {this.renderProjects()}
          </ol>
        </section>
      </div>
    )
  }
}

export default Projects;