const container = document.querySelector("#container");
const newGridBtn = document.querySelector("#newGridBtn");

for(var i = 0; i < 256; i++){
    const newDiv = document.createElement("div");
    newDiv.id = "div" + i;
    newDiv.className = "newDivClass";
    container.appendChild(newDiv);

    newDiv.addEventListener("mouseover", () => {
        newDiv.style.backgroundColor = "green";
    });
}

newGridBtn.addEventListener("click", () => {
    const gridSize = prompt("Choose a size of your canvas (maximum size is 100x100)");
    
    document.querySelectorAll(".newDivClass").forEach(newDiv => newDiv.remove());
});

