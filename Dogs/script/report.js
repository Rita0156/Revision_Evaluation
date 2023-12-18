let tot=document.getElementById("tot")
    let fe=document.getElementById("fe")
    let ma=document.getElementById("ma")
    let ave= document.getElementById("ave")
    let dogData=[]
    const fetchData=()=>{
      fetch("http://localhost:3030/dogs")
      .then((req)=>{
         return req.json()
      })
      .then((res)=>{
         console.log(res,"dogs");
         dogData=[...res]
         //Display(res)
         tot.innerText=res.length
    let sum=0
    let f=0
    let m=0
    for(let i=0; i<res.length; i++){
        sum+=Number(res[i].age);
        if(res[i].gender=="Female"){
           f++
        }
        else if(res[i].gender=="Male"){
           m++
        }
    }
    fe.innerText=f
    ma.innerText=m
    ave.innerText=(sum/res.length).toFixed(2)
      })
    }
    fetchData()
     //console.log(dogData,"dogs")
    