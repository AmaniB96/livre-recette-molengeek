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


let form=document.createElement("form")
form.style.backgroundColor = "white"
form.style.color= "grey"
form.style.width= "175px"
form.style.height= "35px"
footer.appendChild(form)

let input = document.createElement("input")
input.type = "text"
input.placeholder = "Type here..."
input.style.width = "175px"
input.style.height = "35px"
form.appendChild(input)

let btn=document.createElement("button")
btn.innerText = "Newsletter"
btn.style.backgroundColor = "rgba(0, 255, 200, 0.152)"
btn.style.color= "white"
btn.style.width= "100px"
btn.style.height= "35px"
btn.type ="submit"
form.appendChild(btn) 

btn.addEventListener("click", ()=>{
    alert("L'adresse: "+ input + "est inscrit à la newsletter")
})