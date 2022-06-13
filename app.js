const rippleButton = document.querySelector('.ripple-button')

function mousePositionToCustomProperty(event,element){
    let x = event.offsetX;
    let y = event.offsetY;
    // console.log(x,y)
    element.style.setProperty('--x',x + 'px')
    element.style.setProperty('--y',y + 'px')
}

rippleButton.addEventListener('click',(event)=>{
    mousePositionToCustomProperty(event,rippleButton)
    rippleButton.classList.add("pulse")
    rippleButton.addEventListener("animationend", () => {
        rippleButton.classList.remove("pulse")
    })
    
})

