function createGrid(boxNumber){
    const grid = document.querySelector(".grid-container");
    
    removeChildren(grid);
    
    grid.style["grid-template-columns"] = `repeat(${boxNumber}, 1fr)`;
    

    for(let i=0; i<boxNumber; i++){
        for(let j=0; j<boxNumber; j++){
            let gridItem = document.createElement("div");
            gridItem.classList.add("grid-item");
            grid.appendChild(gridItem);
        }
    }


    const gridItem = document.querySelectorAll(".grid-item");

    gridItem.forEach(grid => grid.addEventListener("mouseover", changeGridColor));
    
    function changeGridColor(){
        this.style.backgroundColor = backgroundColor;
    }

}


function removeChildren(grid){
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}

createGrid(16);


let backgroundColor = "black";


const colorButtons = document.querySelectorAll(".brush");

colorButtons.forEach(button => button.addEventListener("click", changeColor));

function changeColor(){
    if(this.getAttribute("data-color") === "random"){
        backgroundColor = createRandomColor();
    }else{
        backgroundColor = this.getAttribute("data-color");
    }
}

function createRandomColor(){

    let hexadecimalArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
                                "a", "b", "c", "d", "e", "f"];

    let color = "#"

    for(let i = 0; i< 6; i++){
        color+= hexadecimalArray[Math.floor(Math.random() * hexadecimalArray.length)];
    }

    const randomButton = document.querySelector(".random");
    
    randomButton.style.color = color;

    return color;
}

const eraser = document.querySelector(".erase");

eraser.addEventListener("click", clearGrid);

function clearGrid(){
    const gridItems = document.querySelectorAll(".grid-item");

    gridItems.forEach(grid => grid.style.backgroundColor = "white");
}


const gridSize = document.querySelector("#grid-size");

gridSize.addEventListener("change", () => {

    clearGrid();
    const boxSize = gridSize.value;
    console.log(boxSize);
    createGrid(boxSize);
});


const favoriteColor = document.querySelector("#favcolor");

favoriteColor.addEventListener("change", () => {
    backgroundColor = favoriteColor.value;
    const label = document.querySelector(".color-picker-label");

    label.style.color = backgroundColor;
});