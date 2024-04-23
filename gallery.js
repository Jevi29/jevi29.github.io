let pop = document.getElementById("pop")
let popImg = document.getElementById("pop-img")
let images = document.querySelectorAll("picture img")
let cancel = document.querySelector("#pop span")
let imgArray = [...images]
    
imgArray.forEach(img => {
    img.addEventListener("click", () => {
        pop.style.display = "block"
        popImg.src = img.getAttribute("src")
    })
});

cancel.addEventListener("click", () => {
    pop.style.display = "none"
})