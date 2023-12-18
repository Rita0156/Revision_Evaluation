let container=document.getElementById("container")
    
    let pageNo=document.getElementById("pageNo")
    let next=document.getElementById("next")
    let prev=document.getElementById("prev")
    let filData=[]
    let page=1
    let limit=4
    let modal=document.getElementById("modal")
    let nameCh=document.getElementById("name")
    let changeAge=document.getElementById("age")
    let place=document.getElementById("place")
    let xbtn=document.getElementById("xbtn")
    let sub=document.getElementById("sub")
   
    const fetchData=(page,limit)=>{
      fetch(`http://localhost:3030/dogs?_page=${page}&_limit=${limit}`)
      .then((req)=>{
         return req.json()
      })
      .then((res)=>{
         console.log(res,res.length);
         filData=[]
         filData=[...res]
        let total=Math.ceil((res.length)/limit)
         
         let allPages=[]
         for(let i=0; i<=total; i++){
           allPages.push(i)
         }
         

         let lastPage=limit*page
         let firstPage=lastPage-limit

         Display(res)
      })
    }
    fetchData(page,limit)
  
     let age=document.getElementById("agesel")
     let gender=document.getElementById("gendersel")



     age.addEventListener("change",()=>{
        let data=filData.filter((ele)=>{
           if(age.value==""){
            return  Display(filData)
           }else{
             if(age.value=="low"){
                filData.sort(function(a,b){return Number(a.age)-Number(b.age)})
                
                return  Display(filData)
             }else if(age.value=="high"){
                filData.sort(function(a,b){return Number(b.age)-Number(a.age)})
                return  Display(filData)
             }
             
           }
        })
       
     })

     gender.addEventListener("change",()=>{
        let fdata=filData.filter((ele)=>{
           if(gender.value==""){
            return  true
           }else{
             if(gender.value===ele.gender){
                return true
             }else{
                return false
             }
             
           }
        })
        Display(fdata)
       
     })

     next.addEventListener("click",()=>{
         if(filData.length==limit){
          page=page+1
         pageNo.innerText=page
         prev.style.color="black"
         fetchData(page,limit)
         }else{
          next.style.color="grey"
         }
     })
     if(page==1){
         prev.style.color="grey"
       }
      
     prev.addEventListener("click",()=>{
       if(page==1){
         prev.disabled=true
         prev.style.color="grey"
       }else if(page>1){
         prev.style.color="black"
         next.style.color="black"
         page=page-1
         pageNo.innerText=page
         fetchData(page,limit)
       }
     })
 pageNo.innerText=page

    function Display(data){
        container.innerHTML=null
         data.forEach(element => {
            let div=document.createElement("div")
            let h2=document.createElement("h2")
            h2.innerText=element.name
            let city=document.createElement("h2")
            city.innerText=element.place
            let gender=document.createElement("h2")
            gender.innerText=element.gender
            let img=document.createElement("img")
            img.src="https://static.vecteezy.com/system/resources/thumbnails/026/910/473/small/cute-cartoon-fox-isolated-on-ground-ai-generated-png.png"
            let det=document.createElement("button")
            let age=document.createElement("h2")
            age.innerText=element.age
            det.innerText="Remove"
            let edit=document.createElement("button")
            edit.innerText="Edit"
            edit.style.backgroundColor="green"

            edit.addEventListener("click",()=>{
               let ID=element.id
               container.style.display="none"
               modal.style.display="block"
               xbtn.addEventListener("click",()=>{
                  modal.style.display="none"
               })
               sub.addEventListener("click",()=>{
                  let obj={
                     name:nameCh.value,
                     age:changeAge.value,
                     place:place.value
                  }
                  const deleteData=(id)=>{
                     fetch(`http://localhost:3030/dogs/${id}`,{
                     method:"PATCH",
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
               alert("Edited Successfull")
               //window.location.href="./data.html"
   
               })
               .catch((err)=>{
                   console.error(err);
                   alert("Something went wrong")
                 })
               }
                   //Display(lsData)
                   deleteData(ID)
                   container.style.display="grid"
                   modal.style.display="none"
                   fetchData()
               })
            })

             det.addEventListener("click",()=>{
               let id=element.id
               console.log(id)
                const deleteData=(id)=>{
                  fetch(`http://localhost:3030/dogs/${id}`,{
                  method:"DELETE",
                  headers:{
                  "Content-Type": "application/json",
                  }
            

             })
            .then((req)=>{
            return req.json()
            })
           .then((res)=>{
            console.log(res);
            alert("Deleted Successfull")
            //window.location.href="./data.html"

            })
            .catch((err)=>{
                console.error(err);
                alert("Something went wrong")
              })
            }
                //Display(lsData)
                deleteData(id)
                fetchData()
             })
            div.append(h2,img,age,gender,city,det,edit)
            container.append(div)

         });

    }
    