let cards= document.querySelectorAll(".card")
let images= document.querySelectorAll("img")

cards.forEach(card => {
    card.addEventListener("mouseleave", ()=> {
        card.style.backgroundColor= "";
    })
});

cards.forEach(card => {
    card.addEventListener("mouseenter", ()=> {
        card.style.backgroundColor= "grey";
    })
});

cards.forEach(card => {
    card.addEventListener("click", ()=>{
        card.style.boxShadow = "10px 5px 5px cyan";
    })
});

cards.forEach(card => {
    card.addEventListener("dblclick", ()=>{
        card.remove()
    })
});

images.forEach(image => {
    image.addEventListener("click", () =>{
        let btn= document.createElement("button");
        btn.style.backgroundColor ="red";
        btn.innerText="X";
        image.appendChild(btn)
        btn.addEventListener("click", ()=>{
            card.remove()
        })
    })
});