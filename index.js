const createtGrid = (a=16) => {
    if(a>100){return reset()}
    const container = document.querySelector(".gridContainer")
    for(let i=0; i<a; i++){
        let secondContainer = document.createElement("div")
        secondContainer.id = i+1
        secondContainer.className = "rowContainer"
        container.appendChild(secondContainer)
        for(let j=0; j<a; j++){
            let thirdContainer = document.createElement("div")
            thirdContainer.id = `${i+1}-${j+1}`
            thirdContainer.className = "pixel"
            thirdContainer.style.width = 960/a
            thirdContainer.style.height = 960/a
            secondContainer.append(thirdContainer)
        }
    }
    const pixels = document.querySelectorAll(".pixel")
    pixels.forEach(pixel => pixel.addEventListener("mouseenter", ()=>pixel.className="pixel-hovered"))
}

const destroyGrid = () => {
    const container = document.querySelector(".gridContainer")
    const body = document.querySelector("body")
    body.removeChild(container)
    const newContainer = document.createElement("div")
    newContainer.className = "gridContainer"
    body.appendChild(newContainer)
}

const reset = () =>{
    destroyGrid()
    n=Number(window.prompt("How many squares per side you want? Max: 100"))
    createtGrid(n)
}


const resetButton = document.querySelector(".resetButton")
resetButton.addEventListener("click", ()=>reset())

const destroyButton = document.querySelector(".destroyButton")
destroyButton.addEventListener("click", ()=>destroyGrid())


createtGrid()



/* (Optional): Instead of just changing the color of a square from black to white (for example), 
have each pass through with the mouse change it to a completely random RGB value. 
Then try having each pass just add another 
10% of black to it so that only after 10 passes is the square completely black. */