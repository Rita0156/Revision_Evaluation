let container=document.getElementById("container")
let buttonWrapper=document.getElementById("button-wrapper")

function pagination(data,page,limit){
      return data.slice((page-1)*limit,(page*limit-1)+1)
}
async function fetchData(){
  try{
    let res=await fetch("https://fakestoreapi.com/products")
     let data=await res.json()
     console.log(data)
     let limit=4
     let t=data.length; 
     let total=Math.ceil(t/limit)
     buttonWrapper.innerHTML=null
     for(let i=1; i<=total; i++){
      buttonWrapper.append(createBtn(i))
     }
     let resArr =pagination(data, 1, limit);
        appendData(resArr);

  }
  catch(err){
    console.log(err);
  }
}
fetchData()
function createBtn(i){
  let btn = document.createElement("button");

  let activeClass = '';
  if(i==1){
      activeClass = 'active';
  }
  btn.className = `.pagination-button ${activeClass}`;
  btn.innerText = i;
  return btn;
}
setTimeout(async function(){
  const btns = document.querySelectorAll("#button-wrapper button");
  let res = await fetch("https://fakestoreapi.com/products");
  let data = await res.json();
  let limit = 4;

  btns.forEach((btn) => {
      btn.addEventListener("click",function(){
          btns.forEach(btnb=> btnb.classList.remove('active'));
          btn.classList.add("active")
          let i = btn.innerText;
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