let users=JSON.parse(localStorage.getItem("login"));
let displayUserName = document.getElementById("display-user-name")
if(users != undefined){
    displayUserName.innerText = `👱🏻 Hi ! ${users.firstName}`;
}
let time=document.getElementById("h3t")
let flag=true

let form = document.querySelector("form");
let applyData = JSON.parse(localStorage.getItem("applying-course")) || [];

let title = document.getElementById("name");
let category = document.getElementById("category");
let price = document.getElementById("price");
let payBtn = document.getElementById("submit");
let otpinp=document.getElementById("otpinp")
//payBtn.value = `Pay ₹${applyData[0].price} 🔒`;
//title.textContent = `Title : ${applyData[0].name}`;
//category.textContent = `Category : ${applyData[0].category}`;
//price.textContent = `Price : ${applyData[0].price}`;
// let  sec=30
// const set30secTime=setInterval(()=>{
//    if(sec>0){
//     sec=sec-1
//     time.innerText=sec
//    }
//    if(sec==0){
//     sec=30
//     alert("timed out for otp")
//     clearInterval(set30secTime())
//    }
// },1000)

form.addEventListener("submit",function(e){
    e.preventDefault();
    
    let cardNumber = document.getElementById("cardnumber").value;
    let expirymonth = document.getElementById("expirymonth").value;
    let expiryyear = document.getElementById("expiryyear").value;
    let cvv = document.getElementById("cvv").value;
    //let time=document.createElement("h2")
    
    if(cardNumber && expirymonth && expiryyear && cvv){
        
         
        checkOTP();
       
        
    }else{
        alert("Please fill all the parameters !!");
    }
    
    
    
})

function checkTime(timer){
    time.innerText=timer
    
    const interval=setInterval(()=>{
       if(timer>0){
         timer=timer-1
         time.innerText=timer
       }
       else if(timer==0){
        timer=30
        time.innerText=timer
         alert("Timed out for OTP")
         clearInterval(interval())
       }
    },1000)
 }
  let mnb;
 function handalOTP(){
     let otp = Math.floor(1000 + Math.random() * 9000);
     mnb=otp

     alert("Your OTP is " + otp);

     checkTime(30)
     //checkOTP(otp)
 }

function checkOTP(mnb){
    
    //let mnb;

   // let verifyOtp = prompt("Enter OTP ");

   //setTimeout(()=>{
    if(mnb == otpinp.value){
        let paymentCont = document.getElementById("payment-container");
        let thankyouImg = document.querySelector(".thankyou-img");
        paymentCont.style.display = "none";
        thankyouImg.style.display = "block"
        //flag=false
        //setTimeout(function(){
            window.location.href = "index.html"
       // },2000)
     }else{
    //     //flag=false
         alert("Wrong OTP");
     }
  // },3000)
}