export default (function expandToDo(){
    const descriptions = document.querySelectorAll(".description");
    const toDoItems= document.querySelectorAll(".to-do-item");
    const foldItems = document.querySelectorAll(".fold-item");
    toDoItems.forEach((item,index)=>{
        item.addEventListener('click',(e)=>{
            if(e.target.classList.contains("title")){
                descriptions[index].style.display="flex";
                foldItems[index].style.display="flex";
            }
            })
    })
    foldItems.forEach((item,index)=>{
        item.addEventListener('click',()=>{
            item.style.display="none";
            descriptions[index].style.display="none";
        })
    })
})()
