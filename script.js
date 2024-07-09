const container = document.querySelector("#container");

for(var i = 0; i < 256; i++){
    const newDiv = document.createElement("div");
    newDiv.id = "div" + i;
    newDiv.className = "newDivClass";
    container.appendChild(newDiv);

    newDiv.addEventListener("mouseover", () => {
        newDiv.style.backgroundColor = "green";
    });
}

