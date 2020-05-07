import projectsModel from './ProjectsModel';
export default (function(){
    const checkBoxes = function(){
        const checkmarks = document.querySelectorAll(".checkbox");
        checkmarks.forEach((checkmark,index)=>{
            checkmark.addEventListener('click',(e)=>{
                projectsModel.checkBox(index);
            })
            
        })
    }
    return {checkBoxes};   
})()