import   './sidebar';
import switchTabs from './switch-projects';
import toDoController from './toDoController';
import './ProjectsModel'
import projectsModel from './ProjectsModel';
import View from  './toDoView';
import newProject from './ProjectsView';
import ProjectsModel from './ProjectsModel';
projectsModel.newProject("Today Tasks");
projectsModel.newTask("Do something productive about your life",new Date('2020-10-10'),
                      "Description Is Right Here","Regular","Today Tasks");
projectsModel.newTask("Do something productive right now",new Date('2020-05-10'),
                      "Here goes my super duper long description","High","Today Tasks");
projectsModel.newProject("Tomorrow Tasks");
projectsModel.newTask("Do something productive about your life",new Date('2020-10-10'),
                      "Description Is Right Here","Moderate","Tomorrow Tasks",true);
const sidebarLinks = document.querySelectorAll(".sidebar a");
let activeProject = sidebarLinks[0].textContent;
View.renderList(activeProject);
newProject.addProjectHandler();
switchTabs.switchTabs();
toDoController();
