
const container=document.getElementById("container")
const token=localStorage.getItem("token")

//container.addEventListener("load",()=>{
    let getData=[]
    let lowData=[]
    let highdata=[]
    
   if(token){
    fetch("https://fakestoreapi.com/products")
    .then((req)=>{
        return req.json()
    })
    .then((res)=>{
        console.log(res)
        getData=[...res]
        lowData=[...res]
        highdata=[...res]
        appendData(res)
    })
//})

const select=document.getElementById("select")
select.addEventListener("change",()=>{
      const dataBy=getData.filter((item)=>{
          if(select.value==""){
              return true
          }else{
            if(item.category==select.value){
                return true
            }
            else return false
          }
      })
      appendData(dataBy)
})
const price_select=document.getElementById("price_select")
price_select.addEventListener("change",()=>{
    getData.filter((item)=>{
         if(price_select.value==""){
            ///return true
            return appendData(getData)
         }else{
            if(price_select.value=="acd"){
               lowData.sort(function(a,b){return Number(a.price)-Number(b.price)})
              return appendData(lowData)
            }
            else if(price_select.value=="dcd"){
                highdata.sort(function(a,b){return Number(b.price)-Number(a.price)})
               return appendData(highdata)
            }
         }
    })
})

function appendData(data){
    container.innerHTML=null
  data.forEach(ele => {
      let div=document.createElement("div")
      let title=document.createElement("h2")
      let img=document.createElement("img")
      let desc=document.createElement("p")
      let price=document.createElement("h2")
      let p=document.createElement("p")

      title.innerText=ele.title
      img.src=ele.image
      desc.innerText=ele.description
      price.innerText="$"+ele.price
      p.innerText=ele.category
      div.append(title,img,desc,price,p)
      container.append(div)
  });
}
}
else{
    window.location.href="./login.html"
}