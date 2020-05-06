import   './sidebar';
import switchTabs from './switch-projects';
import ExpandItem from './expand-fold-todo';
import './projectsModel'
import projectsModel from './projectsModel';
import View from  './toDoList-View';
import handleCheckBoxes from './checkbox-handler';
switchTabs.switchTabs();
projectsModel.newProject("Today Tasks");
projectsModel.newTask("Do something productive about your life","25.05.2020",
                      "Description Is Right Here","regular","Today Tasks");
projectsModel.newTask("Do something productive right now","30.05.2020",
                      "Here goes my super duper long description","high","Today Tasks");
projectsModel.newProject("Tomorrow Tasks");
projectsModel.newTask("Do something productive about your life","25.05.2020",
                      "Description Is Right Here","moderate","Tomorrow Tasks",true);
const sidebarLinks = document.querySelectorAll(".sidebar a");
let activeProject = sidebarLinks[0].textContent;
View.renderList(activeProject);
ExpandItem();
handleCheckBoxes.checkBoxes();