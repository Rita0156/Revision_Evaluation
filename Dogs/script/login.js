let email=document.getElementById("email")
    let pass=document.getElementById("pass")
    let btn=document.getElementById("btn")

    const fetchData=()=>{
        let obj={
            email:email.value,
            password:pass.value
        }
        fetch("https://reqres.in/api/login",{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify(obj)

        })
        .then((req)=>{
            return req.json()
        })
        .then((res)=>{
            console.log(res);
            alert("Login Successfull")
            window.location.href="./data.html"

        })
        .catch((err)=>{
                console.error(err);
                alert("Something went wrong")
        })
    }

    btn.addEventListener("click",()=>{
           fetchData()

    })