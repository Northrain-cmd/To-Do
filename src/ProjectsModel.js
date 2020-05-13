import switchTabs from './switch-projects';
import parse from 'date-fns/parse';
import format from 'date-fns/format';
export default (function projectsModel(){
    const projects =  JSON.parse(localStorage.getItem("projects")) || {};
    const projectsFactory = function (title){
        const todoList = [];
        return {title,todoList}
    }
    const tasksFactory = function (title,dueDate,description,importance,checked){
        return {title,dueDate,description,importance,checked}
    }
    const newProject = function (projectName){
        projects[projectName] = projectsFactory(projectName);
        localStorage.setItem("projects",JSON.stringify(projects));
    }
    const deleteProject = function (projectName){
        delete projects[projectName];
        localStorage.setItem("projects",JSON.stringify(projects));
    }
    const renameObject = function (oldProject,projectName){
        projects[projectName] = projects[oldProject];
        deleteProject(oldProject);
        projects[projectName].title = projectName;
        localStorage.setItem("projects",JSON.stringify(projects));
    }
    const newTask = function (title,dueDate,description,importance,projectName,checked=false){
        projects[projectName].todoList.push(tasksFactory(title,dueDate.toString(),description,importance,checked));
        localStorage.setItem("projects",JSON.stringify(projects));
    }
    const deleteTask = function(title,date){
                let index = projects[switchTabs.getActiveProject()].todoList.findIndex((todo)=>{
                 return todo.title === title && format(new Date(todo.dueDate),"MM-dd-yyyy") === format(parse(date,"PPP",new Date()),"MM-dd-yyyy")
                })
                projects[switchTabs.getActiveProject()].todoList.splice(index,1);
                localStorage.setItem("projects",JSON.stringify(projects));
    }
    const editTask = function (toDo,title,dueDate,description,importance){
           toDo.title = title;
           toDo.dueDate = dueDate;
           toDo.description = description;
           toDo.importance = importance;
           localStorage.setItem("projects",JSON.stringify(projects));
        }
    const doesAlreadyExistForEdit = function(toDo,title,date) {
        if(toDo.title === title && format(new Date(toDo.dueDate),"MM-dd-yyyy") === format(parse(date,"yyyy-MM-dd",new Date()),"MM-dd-yyyy")){
            return false
        }
        else{
            if(projects[switchTabs.getActiveProject()].todoList.some((todo)=>{
                return todo.title === title && format(new Date(todo.dueDate),"MM-dd-yyyy") === format(parse(date,"yyyy-MM-dd",new Date()),"MM-dd-yyyy")
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
            return todo.title === title && format(new Date(todo.dueDate),"MM-dd-yyyy") === format(date,"MM-dd-yyyy")
           })){
               return true
           }
        else  {
            return false
        } 
    }
    const returnToDo = function (title,date){
        return projects[switchTabs.getActiveProject()].todoList.find((todo)=>{
            return todo.title === title && format(new Date(todo.dueDate),"MM-dd-yyyy") === format(parse(date,"PPP",new Date()),"MM-dd-yyyy")
        })
    }
    const checkBox = function (title,date){
       let checkedVar = projects[switchTabs.getActiveProject()].todoList.find((todo)=>{
        return todo.title === title && format(new Date(todo.dueDate),"MM-dd-yyyy") === format(parse(date,"PPP",new Date()),"MM-dd-yyyy")
           })
        checkedVar.checked = ! checkedVar.checked;
        localStorage.setItem("projects",JSON.stringify(projects));
        }
    return {newProject,projects,newTask,deleteProject,renameObject,deleteTask,editTask,doesAlreadyExist,doesAlreadyExistForEdit,projectAlreadyExists,returnToDo, checkBox}
})()