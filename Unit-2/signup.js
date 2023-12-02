

let name=document.getElementById("name")
let email=document.getElementById("email")
let password=document.getElementById('pass')

let form=document.querySelector("form")

let registerData=JSON.parse(localStorage.getItem("account"))||[]

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let obj={
       name:name.value,
       email:email.value,
       pass:password.value
    } 
    registerData.push(obj)
    localStorage.setItem("account",JSON.stringify(registerData))
    alert("Account created Successfully")
    window.location.href="./login.html"
})