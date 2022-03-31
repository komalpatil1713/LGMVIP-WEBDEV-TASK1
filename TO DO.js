//--------------all required------------------
const inputBox = document.querySelector(".input input");
const addBtn = document.querySelector(".input button");
const todoList = document.querySelector(".List");
const deleteAllBtn = document.querySelector(".end button");
const date = new Date();
//--------------dates------------------
date.getDate();
document.getElementById("date").innerHTML = date;
//--------------get value------------------
inputBox.onkeyup = ()=>{
  let userEnteredValue = inputBox.value;
  if(userEnteredValue.trim() != 0){ 
    addBtn.classList.add("active"); 
  }else{
    addBtn.classList.remove("active");
  }
}
showTasks();
addBtn.onclick = ()=>{ 
  //---------add task-----------------
  let userEnteredValue = inputBox.value;
  let getLocalStorageData = localStorage.getItem("New LIST"); 
  if(getLocalStorageData == null){ 
    //--------------overflow data------------------
    listArray = []; 
  }else{
    listArray = JSON.parse(getLocalStorageData); 
  }
  listArray.push(userEnteredValue);
  localStorage.setItem("New LIST", JSON.stringify(listArray));
  showTasks();
  addBtn.classList.remove("active");
}
//---------------------------------------
function showTasks(){
  let getLocalStorageData = localStorage.getItem("New LIST");
  if(getLocalStorageData == null){
    listArray = [];
  }else{
    listArray = JSON.parse(getLocalStorageData); 
  }
    

//--------------pending task------------------

  const pendingTasksNumb = document.querySelector(".pendings");
  pendingTasksNumb.textContent = listArray.length;  
  if(listArray.length > 0){
    deleteAllBtn.classList.add("active");
  }else{
    deleteAllBtn.classList.remove("active");
  }
  let newLiTag = "";
  listArray.forEach((element, index) => {
    newLiTag += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="add-trash"></i></span></li>`;
  });
  todoList.innerHTML = newLiTag;  
  inputBox.value = ""; 
}
  
  //--------------delete data------------------

function deleteTask(index){
  let getLocalStorageData = localStorage.getItem("New LIST");
  listArray = JSON.parse(getLocalStorageData);
  listArray.splice(index, 1); 
  localStorage.setItem("New LIST", JSON.stringify(listArray));
  showTasks();
}
    //--------------delete all data------------------

  deleteAllBtn.onclick = ()=>{
  listArray = []; 
  localStorage.setItem("New LIST", JSON.stringify(listArray));
  showTasks(); 
}


 