


let email=document.getElementById("email")
let password=document.getElementById('pass')

let form=document.querySelector("form")

let registerData=JSON.parse(localStorage.getItem("account"))||[]
console.log(registerData,"localstorage")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    
    //console.log(obj,"obj")
    
    
        let flag=true
        if(registerData.length>0){
            registerData.map((item)=>{
                if(item.email==email.value && item.pass==password.value){
                    flag=false
                    const token="Radha-Goving"
                    localStorage.setItem("token",token)
                }
            })
        }
        else{
            alert("Please signup first")
            window.location.href="./signup.html"
        }
        console.log(flag,"flag")
        if(flag==false){
            alert("Login Successfully")
            window.location.href="./index.html"
        }
        else{
            let h1=document.createElement("h3")
            h1.innerText="Invalid email or password"
            h1.style.color="red"
            form.append(h1)
        }
    
    
})