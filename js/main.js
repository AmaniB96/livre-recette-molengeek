let cards = document.querySelectorAll(".card")
let images = document.querySelectorAll(".card-img-top")
let footer = document.querySelector("footer")

cards.forEach((card, index) => {
    card.addEventListener("mouseleave", () => {
        card.style.backgroundColor = "";
    })
    images[index].addEventListener("dblclick", () => {
        card.remove()
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