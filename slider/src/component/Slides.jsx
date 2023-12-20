import { useEffect, useState } from "react"

const Slides=()=>{
    const images=[
                    "https://i.pinimg.com/originals/84/d2/2d/84d22d672fac7724c2ef475bf2045482.jpg",
                    "https://img.freepik.com/free-photo/blue-house-with-blue-roof-sky-background_1340-25953.jpg",
                    "https://cdn4.sharechat.com/%E2%80%8D%EF%B8%8Fcutedolls_697e81a7-408e-4380-8dcf-55fbd49ef9c6-2f9f3c21-2816-45b9-81f8-e80b425d7312_cmprsd_40.jpg?tenant=sc&referrer=pwa-sharechat-service&f=rsd_40.jpg",
                    "https://i.pinimg.com/564x/5e/76/48/5e7648665906cfac23a7dfa35c640ba2.jpg"
                 ]
    const [current,setCurrent]=useState(0)
    //const [img,setImg]=useState(images[0])
    useEffect(()=>{
        const interval=setInterval(()=>{
            if(current==images.length-1){
                setCurrent(0)
                //setImg(images[current])
            }else{
                setCurrent(current+1)
               // setImg(images[current])
            } 
        },3000)

        return ()=> clearInterval(interval)
      
    },[current])
    return(
        <div style={{width:"50%",margin:"auto",border:"5px solid black",marginTop:"40px"}}>
              <img style={{width:"100%",height:"500px"}} src={images[current]}/>
        </div>
    )
}
export default Slides