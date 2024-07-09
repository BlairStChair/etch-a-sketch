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

    for(var i = 0; i < gridSize*gridSize; i++){
        const customDiv = document.createElement("div");
        customDiv.id = "div" + i;
        customDiv.className = "customDivClass";
        customDiv.style.flex = `0 0 calc(100% / (${gridSize} + 1))`;
        container.appendChild(customDiv);
    
        customDiv.addEventListener("mouseover", () => {
            customDiv.style.backgroundColor = "green";
            
        });
    }
    
});

