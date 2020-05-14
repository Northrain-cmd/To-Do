import  '../src/CSS/style.css'
import   './sidebar';
import authentication from './auth';
import switchTabs from './switch-projects';
import toDoController from './toDoController';
import './ProjectsModel'
import projectsModel from './ProjectsModel';
import View from  './toDoView';
import newProject from './ProjectsView';

if(! localStorage.noFirstVisit){
        projectsModel.newProject("Important");
        projectsModel.newProject("Movies to watch");
        projectsModel.newTask("I am a sample task (click me to expand)",new Date('2020/10/03'),
                            "You can click the project title to rename it","High","Important");
        projectsModel.newTask("Buy milk",new Date('2020/05/30'),
                            "Four bottles","Moderate","Important");
        projectsModel.newTask("Star Wars IX",new Date('2020/06/10'),
                            "Please don't","Moderate","Movies to watch",false);
        localStorage.noFirstVisit = "1";
}
newProject.renderProjects();
const sidebarLinks = document.querySelectorAll(".sidebar a");
let activeProject = sidebarLinks[0].textContent || "";
View.renderUnchecked(activeProject);
toDoController.controlFlow();
newProject.addProjectHandler();
View.addNewItemHandler();
switchTabs.switchTabs();
authentication.authenticate();

