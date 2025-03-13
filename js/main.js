let cards= document.querySelectorAll(".card")

cards.forEach(card => {
    card.addEventListener("mouseleave", ()=> {
        card.style.backgroundColor= "";
        console.log(cards.length)
    })
});

cards.forEach(card => {
    card.addEventListener("mouseenter", ()=> {
        card.style.backgroundColor= "grey";
        console.log(cards.length)
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