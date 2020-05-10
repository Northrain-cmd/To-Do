import   './sidebar';
import switchTabs from './switch-projects';
import toDoController from './toDoController';
import './ProjectsModel'
import projectsModel from './ProjectsModel';
import View from  './toDoView';
import newProject from './ProjectsView';
switchTabs.switchTabs();
projectsModel.newProject("Today Tasks");
projectsModel.newTask("Do something productive about your life","2021-10-10",
                      "Description Is Right Here","Regular","Today Tasks");
projectsModel.newTask("Do something productive right now","2020-05-10",
                      "Here goes my super duper long description","High","Today Tasks");
projectsModel.newProject("Tomorrow Tasks");
projectsModel.newTask("Do something productive about your life","2020-10-10",
                      "Description Is Right Here","Moderate","Tomorrow Tasks",true);
const sidebarLinks = document.querySelectorAll(".sidebar a");
let activeProject = sidebarLinks[0].textContent;
View.renderList(activeProject);
newProject.addProjectHandler();
toDoController();
