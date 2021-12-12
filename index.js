const maxSideSize = 960

const randomizeRgb = () => Math.floor(Math.random()*256)

const pixelListener = (pixel) => {
    // If attribute hovers is 0, create a new random RGB background-color
    if(pixel.getAttribute('hovers')==="0"){
        const randomRgb =`rgb(${randomizeRgb()},${randomizeRgb()},${randomizeRgb()})`
        pixel.style.backgroundColor=randomRgb
    }
    // If pixel was already colored, conver the RGB string into array of numbers with 25.5 decreased
    // Use that array to create a new rgb styling. This way after 10 hovers the color will be 0,0,0-BLACK
    
    else{
        const rgbToChange = pixel.style.backgroundColor
        let arrayRGB = rgbToChange.split("(")[1].split(")")[0].split(", ").map(n=>(Number(n)-25.5))
        pixel.style.backgroundColor=`rgb(${arrayRGB[0]},${arrayRGB[1]},${arrayRGB[2]})`
    }
    // Finally increase hover counter every mouseover
    pixel.setAttribute('hovers', `${Number(pixel.getAttribute('hovers'))+1}`)
}

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
            thirdContainer.style.width = maxSideSize/a
            thirdContainer.style.height = maxSideSize/a
            // Created attribute hovers that will increase everytime you hover the pixel
            thirdContainer.setAttribute('hovers','0')
            secondContainer.append(thirdContainer)
        }
    }
    const pixels = document.querySelectorAll(".pixel")
    pixels.forEach(pixel => pixel.addEventListener("mouseenter", ()=> pixelListener(pixel)))
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

