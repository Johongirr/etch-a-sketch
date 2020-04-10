 const container = document.querySelector('.container-grid');
 const clearGrid = document.querySelector('.clear-grid');
 const randomColor = document.querySelector('.random-color');
 

 function createGrid(gridSize){
 let size = Math.floor((container.offsetWidth/gridSize));
   
      for(let i = 0; i < gridSize; i++){
          let gridContainer = creteGridContainer(gridSize, size)
          for(let j = 0; j < gridSize; j++){
              let gridItem = createGridItem(size);
             
             
              gridContainer.appendChild(gridItem)
          }
          container.appendChild(gridContainer);
      }
 }
 
  
createGrid(prompt('Provide grid size max(64x64)'))
 
 function creteGridContainer(gridSize, size){
    let row = document.createElement('div');
    row.style = `display: grid; grid-template-columns: repeat(${gridSize}, ${size}px);
                 grid-auto-rows: ${size}px`
    return row;
 }
 function createGridItem(size){
    let cell = document.createElement('div');
    cell.classList.add('cell');
    return cell;
 }
 function addColor(){
     this.style.backgroundColor = `#000`;   
 }

 function resizeGrid(){ 
    container.innerHTML = '';
    createGrid(prompt('Provide grid size max(64x64)'))   
    selectCells()
 }
 function generateRandomColor(){
    document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('mouseover', colourfulColors))
 }
 function colourfulColors(){
     const colors = ['red','green','blue','yellow','orange','brown',
                    'pink','darkred','purple','grey','cyan','lightblue',
                    'lightgreen','darkbrown',];
     this.style.backgroundColor = `${colors[Math.floor(Math.random() * colors.length)]}`;
 }
 
 function selectCells (){
    document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('mouseover', addColor));
    document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('touchmove', addColor));
 }
 
  
    
    
 
 selectCells()
 clearGrid.addEventListener('click', resizeGrid)
 randomColor.addEventListener('click',generateRandomColor)
