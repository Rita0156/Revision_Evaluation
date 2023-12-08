
const container=document.getElementById("container")
let token=localStorage.getItem("token")
let btns=document.getElementById("btns")
//container.addEventListener("load",()=>{
    let alink=document.getElementsByClassName("link")
    let getData=[];
    let lowData=[];
    let highdata=[];
  const handalToken =()=>{
        token="";
        localStorage.setItem("token",token);
    }

    function pagination(data,pageNo,limit){
         return data.slice((pageNo-1)*limit, (pageNo*limit-1)+1)
    }
    
  // if(token){
    fetch("https://fakestoreapi.com/products")
    .then((req)=>{
        return req.json()
    })
    .then((res)=>{
        console.log(res);
        getData=[...res];
        //lowData=[...res]
        btns.innerHTML=null;
        let limit=4
        let t=res.length
        let total=Math.ceil(t/limit)
        console.log(total,"total")
        highdata=[...res];
        for(let i=1; i<=total; i++){
          btns.append(createBtn(i))
        }
        let resArray=pagination(res,1,limit)
        appendData(resArray);
        
    })
//})

const select=document.getElementById("select");
select.addEventListener("change",()=>{
    lowData=[];
      const dataBy=getData.filter((item)=>{
          
          if(select.value==""){
              
              return true;
          }else{
           
            if(item.category==select.value){
              lowData.push(item)
              return true;
            }
            else return false;
          }
      })
      appendData(dataBy);
      
})
const price_select=document.getElementById("price_select")
price_select.addEventListener("change",()=>{
    getData.filter((item)=>{
         if(price_select.value==""){
            ///return true
            if(lowData.length>0){
                return appendData(lowData)
            }else{
                return appendData(highdata)
            }
         }else{
            if(price_select.value=="acd"){
               if(lowData.length>0){
                lowData.sort(function(a,b){return Number(a.price)-Number(b.price)})
              return appendData(lowData)
               }
               else{
                getData.sort(function(a,b){return Number(a.price)-Number(b.price)})
              return appendData(getData)
               }
            }
            else if(price_select.value=="dcd"){
               if(lowData.length>0){
                lowData.sort(function(a,b){return Number(b.price)-Number(a.price)})
                return appendData(lowData)
               }
               else{
                getData.sort(function(a,b){return Number(b.price)-Number(a.price)})
                return appendData(getData)
               }
            }
         }
    })
})
function createBtn(i){
  let button=document.createElement("button")
  let activeClass=""
  if(i==1){
    activeClass="active"
  }
  button.className=`.pagination_button ${activeClass}`
  button.innerText=i
  return button
}
setTimeout(async function(){
  const btns = document.querySelectorAll("#btns");
  let res = await fetch("https://fakestoreapi.com/products");
  let data = await res.json();
  let limit = 4;

  btns.forEach((b) => {
      b.addEventListener("click",function(){
          btns.forEach(btnb=> btnb.classList.remove('active'));
          b.classList.add("active")
          let i = b.innerText;
          let resArr = pagination(data, i, limit);
          appendData(resArr);
      })
  })
},500)

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
      //desc.innerText=ele.description
      price.innerText="$"+ele.price
      p.innerText=ele.category
      let btn=document.createElement("button")
      btn.innerText="Detais"
      btn.className="det"
       btn.addEventListener("click",()=>{
          localStorage.setItem("details",JSON.stringify(ele))
          window.location.href="./product.htm"
       })
      div.append(title,img,price,p,btn)
      container.append(div)
  });
}
//}
// else{
//     window.location.href="./signup.html"
// }