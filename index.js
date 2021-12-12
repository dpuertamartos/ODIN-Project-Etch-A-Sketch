// Create a webpage with a 16x16 grid of square divs.



const container = document.querySelector(".gridContainer")

const createtGrid = () => {
    for(let i=0; i<16; i++){
        let secondContainer = document.createElement("div")
        secondContainer.id = i+1
        secondContainer.className = "rowContainer"
        container.appendChild(secondContainer)
        for(let j=0; j<16; j++){
            let thirdContainer = document.createElement("div")
            thirdContainer.id = `${i+1}-${j+1}`
            thirdContainer.className = "pixel"
            secondContainer.append(thirdContainer)
        }
    }
}

createtGrid()

/* Set up a “hover” effect so that the grid divs change color when your mouse passes 
over them, leaving a (pixelated) trail through your grid like a pen would. */

const pixels = document.querySelectorAll(".pixel")
pixels.forEach(pixel => pixel.addEventListener("mouseenter", ()=>pixel.className="pixel-hovered"))


/* Add a button to the top of the screen which will clear the current grid and send 
the user a popup asking for the number of squares per side for the new grid. 
Once entered, the new grid should be generated in the same total space as before (e.g. 960px wide) 
so that you’ve got a new sketch pad. Tip: Set the limit for the user input to a maximum of 100. 
A larger number of squares results in more computer resources 
being used, potentially causing delays, freezing, or crashing that we want to prevent. */

const resetButton = document.querySelector(".resetButton")
resetButton.addEventListener("click", ()=>{
    pixels.forEach(pixel => pixel.className="pixel")
})



/* (Optional): Instead of just changing the color of a square from black to white (for example), 
have each pass through with the mouse change it to a completely random RGB value. 
Then try having each pass just add another 
10% of black to it so that only after 10 passes is the square completely black. */