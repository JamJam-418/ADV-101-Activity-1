
const addBtn = document.getElementById("add button");
const taskList = document.getElementById("task-list");
const items = ["Gwapo", "kaayo", "si", "Jam", "Marcus", "Ondong", "ADV", "201"];
const longItems = items.filter(item => item.length > 5);
console.log(longItems);
addBtn.addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = "New item added";
    taskList.appendChild(li);
});

