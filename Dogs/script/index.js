let dog=document.getElementById("name")
    let age=document.getElementById("age")
   
    let gen=document.getElementById("gender")
    let city=document.getElementById("city")
    let form=document.querySelector("form")
    let dogData=JSON.parse(localStorage.getItem("dogs"))||[]
    const fectData=()=>{
        //let ren=Math.random()
        let obj={
            name:dog.value,
            age:age.value,
            
            gender:gen.value,
            place:city.value
            
        }
        fetch("http://localhost:3030/dogs",{
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
            console.log(res,"db.json");
            alert(`Dog ${dog.value} is registered successfully`)
        })
        .catch((err)=>{
            console.log(err);
            alert(`Somithing went wrong`)
        })
    }
    form.addEventListener("submit",()=>{
        let ren=Math.random()
        let obj={
            name:dog.value,
            age:age.value,
            
            gender:gen.value,
            place:city.value,
            id:ren
        }
        fectData()
        dogData.push(obj)
        localStorage.setItem("dogs",JSON.stringify(dogData))
        //alert(`Dog ${dog.value} is registered successfully`)
        
    })