import switchTabs from './switch-projects';
import parse from 'date-fns/parse';
import format from 'date-fns/format';
export default (function projectsModel(){
    const projects = {};
    const projectsFactory = function (title){
        const todoList = [];
        return {title,todoList}
    }
    const tasksFactory = function (title,dueDate,description,importance,checked){
        return {title,dueDate,description,importance,checked}
    }
    const newProject = function (projectName){
        projects[projectName] = projectsFactory(projectName);
    }
    const deleteProject = function (projectName){
        delete projects[projectName];
    }
    const renameObject = function (oldProject,projectName){
        projects[projectName] = projects[oldProject];
        deleteProject(oldProject);
        projects[projectName].title = projectName;
    }
    const newTask = function (title,dueDate,description,importance,projectName,checked=false){
        projects[projectName].todoList.push(tasksFactory(title,dueDate,description,importance,checked));
    }
    const deleteTask = function(title,date){
                let index = projects[switchTabs.getActiveProject()].todoList.findIndex((todo)=>{
                 return todo.title === title && format(todo.dueDate,"MM-dd-yyyy") === format(parse(date,'PPP',new Date()),"MM-dd-yyyy")
                })
                projects[switchTabs.getActiveProject()].todoList.splice(index,1);
    }
    const editTask = function (toDo,title,dueDate,description,importance){
           toDo.title = title;
           toDo.dueDate = dueDate;
           toDo.description = description;
           toDo.importance = importance;
        }
    const doesAlreadyExistForEdit = function(toDo,title,date) {
        if(toDo.title === title && format(toDo.dueDate,"MM-dd-yyyy") === format(date,"MM-dd-yyyy")){
            return false
        }
        else{
            if(projects[switchTabs.getActiveProject()].todoList.some((todo)=>{
                return todo.title === title && format(todo.dueDate,"MM-dd-yyyy") ===  format(date,"MM-dd-yyyy");
            })){
                return true
            }
            else  {
                return false
            } 
        }
    }
    const projectAlreadyExists = function (projectName){
        return (projects[projectName]) ?  true  : false
    }
    const doesAlreadyExist = function(title,date){
        if(projects[switchTabs.getActiveProject()].todoList.some((todo)=>{
            return todo.title === title && Date.parse(todo.dueDate) === Date.parse(date.toString());
           })){
               return true
           }
        else  {
            return false
        } 
    }
    const returnToDo = function (title,date){
        return projects[switchTabs.getActiveProject()].todoList.find((todo)=>{
            return todo.title === title && format(todo.dueDate,"MM-dd-yyyy") === format(parse(date,'PPP',new Date()),"MM-dd-yyyy");
        })
    }
    const checkBox = function (title,date){
       let checkedVar = projects[switchTabs.getActiveProject()].todoList.find((todo)=>{
            return todo.title === title && format(todo.dueDate,"PPP") === date;
           })
        checkedVar.checked = ! checkedVar.checked;
        }
    return {newProject,projects,newTask,deleteProject,renameObject,deleteTask,editTask,doesAlreadyExist,doesAlreadyExistForEdit,projectAlreadyExists,returnToDo, checkBox}
})()