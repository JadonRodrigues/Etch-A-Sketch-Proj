
const container = document.querySelector("#Container");
let resetB = document.querySelector(".reset");
let Change = document.querySelector(".confirm")
let sizeNO = document.querySelector("#sizeChange")


Change.addEventListener("click", () => {
    let val = Number(sizeNO.value);

    container.innerHTML="";
    container.style.gridTemplateColumns = `repeat(${val}, 1fr)`;

    for(let i =0; i<val*val;i++){
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
    square.addEventListener("mouseenter", () =>{
    square.style.backgroundColor = "yellow";
    });
    resetB.addEventListener("click", ()=>{
        square.style.backgroundColor = "white";
    });
}

});
