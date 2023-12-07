
let users=JSON.parse(localStorage.getItem("login"))||[]


let name=document.getElementById("name")
let email=document.getElementById("email")
let password=document.getElementById('pass')

let form=document.querySelector("form")

//let registerData=JSON.parse(localStorage.getItem("account"))||[]

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let obj={
       name:name.value,
       email:email.value,
       pass:password.value
    } 
    users.push(obj)
    localStorage.setItem("account",JSON.stringify(users))
    alert("Account created Successfully","Hi"+obj.name)
    window.location.href="./index.html"
})