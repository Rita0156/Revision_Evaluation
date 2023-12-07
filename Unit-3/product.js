
const data=JSON.parse(localStorage.getItem("details"))||[]
    //data=JSON.parse(data)
    console.log(data)
    const container=document.getElementById("container")
    let cartItems=JSON.parse(localStorage.getItem("cartData"))||[]
    
function appendData(itemdata){
    //data=JSON.parse(data)
  //for(let ele=0; ele.length; ele++) {
      let div=document.createElement("div")
      let title=document.createElement("h2")
      let img=document.createElement("img")
      img.className="item"
      let desc=document.createElement("p")
      let price=document.createElement("h2")
      let p=document.createElement("p")

      title.innerText=data.title
      img.src=data.image
      desc.innerText=data.description
      price.innerText="$"+data.price
      p.innerText=data.category

      let btn=document.createElement("button")
      let cart=document.createElement("button")
      let btnCont=document.createElement("div")
      btnCont.className="btncont"
      cart.innerText="Add to Cart"
      cart.className="det"
      let rate=document.createElement("h3")
      let star=document.createElement("img")
      rate.innerText=data.rating.rate
      star.src="https://pngimg.com/d/star_PNG41474.png"
      btn.innerText="Go Back"
      btn.className="det"
       btn.addEventListener("click",()=>{
         data=''
          localStorage.setItem("details",JSON.stringify(data))
          window.location.href="./index.html"
       })
       cart.addEventListener("click",()=>{
          let obj={
            ...data,
            quantity:1
          }
          cartItems.push(obj)
          console.log(obj,"object cart")
          localStorage.setItem("cartData",JSON.stringify(cartItems))
       })
       div.className="star"
       btnCont.append(btn,cart)
      div.append(star,rate)
      container.append(title,img,desc,price,div,p,btnCont)
 // };
}
appendData(data)