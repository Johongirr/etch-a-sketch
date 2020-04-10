 const container = document.querySelector('.container-grid');
 const clearGrid = document.querySelector('.clear-grid');
 const randomColor = document.querySelector('.random-color');

 console.dir(window)
 function createGrid(gridSize){
     
    let size = Math.floor((960/gridSize));
    console.log(size)
    console.log(size)
      for(let i = 0; i < gridSize; i++){
          let row = document.createElement('div');
          row.classList.add('flex');
          for(let j = 0; j < gridSize; j++){
              let cell = document.createElement('div');
              cell.classList.add('cell')
              cell.style.height = `${size}px`;
              cell.style.width = `${size}px`;
              row.appendChild(cell)
          }
          container.appendChild(row);
      }
 }
 
  
createGrid(prompt('Provide grid size max(64x64)'))
 
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
    document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('mouseover', addColor))
 }
 
  
    
    
 
 selectCells()
 clearGrid.addEventListener('click', resizeGrid)
 randomColor.addEventListener('click',generateRandomColor)
