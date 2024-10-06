const nav=document.querySelector('.navdiv')
//load navbar


fetch('./navbar.html')
.then(res=>res.text())
.then(
    data=>{
        nav.innerHTML=data
    }
)
//loading from localstorage

document.addEventListener("DOMContentLoaded",()=>{
    const storedTasks=JSON.parse(localStorage.getItem('tasks'))
    if(storedTasks){
        storedTasks.forEach((task)=>tasks.push(task))
        updateTaskList();
        updateStats();
    }
})

//step 1
let tasks = [];
//8 local storage
const saveTasks=()=>{
    localStorage.setItem('tasks',JSON.stringify(tasks))
}

//step 3
const addTask = () => {
    const taskInput = document.getElementById("taskInput");
    const text = taskInput.value.trim();

    if (text) {
        tasks.push({ text: text, completed: false });
        updateTaskList();
        updateStats();
        saveTasks();
        taskInput.value='';
    }
    console.log(tasks)
};
//5
const toggleTaskComplet=(index)=>{
    tasks[index].completed=!tasks[index].completed;
    updateTaskList();
    updateStats();
    saveTasks();
}
//6 del function
const deleteTask=(index)=>{
    tasks.splice(index,1);
    updateTaskList();
    updateStats();
    saveTasks();
}
//7 edit function

const editTask=(index)=>{
    const taskInput=document.getElementById("taskInput");
    taskInput.value=tasks[index].text
    
    tasks.splice(index,1)
    updateTaskList();
    updateStats();
    saveTasks();
}

//progressive bar
const updateStats=()=>{
    const completedTask=tasks.filter((task)=>task.completed).length;
    const totalTask=tasks.length;
    const progress=(completedTask/totalTask)*100;
    const progressBar=document.getElementById("progress");
    progressBar.style.width=`${progress}%`;
    document.getElementById("number").innerText=`${completedTask}/${totalTask}` 
    if (tasks.length && completedTask==totalTask ){
        confittiBlast();
    }

}


//step 4

//4.1
const updateTaskList = () => {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = '';
//4.2
    tasks.forEach((task,index) => {
        const listItem = document.createElement("li");
//4.3
        listItem.innerHTML = `
        <div class="taskItem">   
         <div class="task ${task.completed ? "completed" : ""}">
        <input type="checkbox" class="checkbox" ${task.completed ? "Checked": ""}/>
        <p>${task.text}</p>
         </div>
         <div class="icon">
        <img src="./image/edit.png" alt="edit" onclick="editTask(${index})" />
        <img src="./image/bin.png" alt="bin" onclick="deleteTask(${index})" />
         </div>
        </div>
        `;
        //4.4
        listItem.addEventListener("change",()=> toggleTaskComplet(index));
        taskList.append(listItem)
    });
};
//step 2
document.getElementById("newtask").addEventListener("click",(e) => {
    e.preventDefault();
    addTask();
});

const confittiBlast=()=>{
    const defaults = {
        spread: 360,
        ticks: 50,
        gravity: 0,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["star"],
        colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
      };
      
      function shoot() {
        confetti({
          ...defaults,
          particleCount: 40,
          scalar: 1.2,
          shapes: ["star"],
        });
      
        confetti({
          ...defaults,
          particleCount: 10,
          scalar: 0.75,
          shapes: ["circle"],
        });
      }
      
      setTimeout(shoot, 0);
      setTimeout(shoot, 100);
      setTimeout(shoot, 200);
}
