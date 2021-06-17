const etchSketchContainer = document.querySelector(".game__box");
const blackColorBtn = document.querySelector("#make-black-btn");
const grayScaleBtn =  document.querySelector("#make-grayscale-btn");
const rainbowBtn = document.querySelector("#make-rainbow-btn");
const clearGridBtn = document.querySelector("#clear-btn");

let color = "black";

const changeGridColor = (e)=>{
    if(!e.target.classList.contains("game__column")) return;   
    switch(color){
        case "rainbow":
            e.target.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;   
            e.target.classList.remove('gray');
        break;
        case "black":
            e.target.style.backgroundColor = `rgb(0, 0, 0)`;
            e.target.classList.remove('gray');
        break;
        case "grayscale":
            if(e.target.style.backgroundColor.match(/rgba/)) {
                const currentOpacity =  Number(e.target.style.backgroundColor.slice(-4, -1));
                if (currentOpacity <= 0.9) {
                    e.target.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity + 0.1})`;
                    e.target.classList.add('gray');         
                } 
            } else if (e.target.classList.contains('gray') && e.target.style.backgroundColor == 'rgb(0, 0, 0)') {
                return;
            }  else {
                e.target.style.backgroundColor = `rgba(0, 0, 0, 0.1)`;
            }
        break;
           
    }
}
const getGridSize = ()=>{
    let gridSize = Number(prompt("Please provide grid maximum of 64"));
    while(gridSize == 0 || gridSize > 64){
        gridSize = Number(prompt("Please provide grid maximum of 64"));
    }
    return gridSize;
}
const clearDrawingArea = ()=>{
   etchSketchContainer.innerHTML = "";
}
const createGrid = ()=>{
    clearDrawingArea();
    let gridArea = getGridSize();
    for(let i = 0; i < gridArea * gridArea; i++){
        const div = document.createElement("div");
        div.classList.add("game__column");
        etchSketchContainer.appendChild(div)
    }
    etchSketchContainer.style.gridTemplateColumns = `repeat(${gridArea}, 1fr)`;
    etchSketchContainer.style.gridTemplateRows = `repeat(${gridArea}, 1fr)`;
    etchSketchContainer.addEventListener("mouseover", changeGridColor);
}
const clearGridArea = ()=>{
    window.location.reload();
}

window.addEventListener("DOMContentLoaded", createGrid);
rainbowBtn.addEventListener("click", ()=> {color = "rainbow"});
blackColorBtn.addEventListener("click",()=>{color = "black"});
grayScaleBtn.addEventListener("click", ()=>{color = "grayscale"});
clearGridBtn.addEventListener("click", clearGridArea);
 