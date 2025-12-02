console.log(document)
const testObject = {
    name :"UPAM",
    address : "KUBWA"
}
console.log(testObject)

const button = document.querySelector(".btn")
console.log(button)
button.addEventListener("click",function(){
    prompt("ENTER YOUR NAME")
})


const home = document.querySelector(".home")
home.addEventListener("click", function(){
    alert("THIS IS THE HOME PAGE")
})

const about = document.querySelector(".about")
about.addEventListener("click", function(){
    alert("THIS IS THE ABOUT PAGE")
})