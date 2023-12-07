
let cartItems=JSON.parse(localStorage.getItem("cartData"))||[]
console.log(cartItems,"cart items",cartItems.length)
let container=document.getElementById("cont")
 let tot=document.getElementById("tot")
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
      let plus=document.createElement("button")
      let min=document.createElement("button")
      let quantity=document.createElement("span")
      plus.innerText="+"
      min.innerText="-"
      quantity.innerText=ele.quantity
      price.innerText="$"+ele.price
      p.innerText=ele.category
      let btn=document.createElement("button")
      btn.innerText="Remove"
      plus.className="quant"
      min.className="quant"
      btn.className="det"
       btn.addEventListener("click",()=>{
          
          window.location.href="./product.htm"
       })
       plus.addEventListener("click",(e)=>{
        console.log(ele.quantity,"qua")
          ele.quantity++
          localStorage.setItem("cartData",JSON.stringify(cartItems))
          appendData(cartItems)
       })
       min.addEventListener("click",(e)=>{
        console.log(ele.quantity,"qua")
          if(ele.quantity>1){
            ele.quantity--
          localStorage.setItem("cartData",JSON.stringify(cartItems))
          appendData(cartItems)
          }
       })
      div.append(title,img,price,p,min,quantity,plus,btn)
      container.append(div)
  });
}
let items=document.createElement("h3")
let total=document.createElement("h3")
let sip=document.createElement("h3")
//console.log(cartItems.length,"length")
let gst=document.createElement("h3")
items.innerText="total items:"+cartItems.length;
gst.innerText="GST Charge:"+22.00
sip.innerText="Sipping Charge:"+5.00
let sum=0
let payment=document.createElement("button")
payment.innerText="Proceed to Payment"
for(let i=0; i<cartItems.length; i++){
   sum+=(Number(cartItems[i].price)*cartItems[i].quantity)
}
total.innerText="Total:"+sum
let fin=document.createElement("h2")
fin.innerText="Total"+"-:"+(sum+22+5)
tot.append(items,total,sip,gst,fin,payment)
appendData(cartItems)