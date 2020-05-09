import   './sidebar';
import switchTabs from './switch-projects';
import toDoController from './toDoController';
import './ProjectsModel'
import projectsModel from './ProjectsModel';
import View from  './toDoView';
import newProject from './ProjectsView';
switchTabs.switchTabs();
projectsModel.newProject("Today Tasks");
projectsModel.newTask("Do something productive about your life","25.05.2020",
                      "Description Is Right Here","Regular","Today Tasks");
projectsModel.newTask("Do something productive right now","30.05.2020",
                      "Here goes my super duper long description","High","Today Tasks");
projectsModel.newProject("Tomorrow Tasks");
projectsModel.newTask("Do something productive about your life","25.05.2020",
                      "Description Is Right Here","Moderate","Tomorrow Tasks",true);
const sidebarLinks = document.querySelectorAll(".sidebar a");
let activeProject = sidebarLinks[0].textContent;
View.renderList(activeProject);
newProject.addProjectHandler();
toDoController();
