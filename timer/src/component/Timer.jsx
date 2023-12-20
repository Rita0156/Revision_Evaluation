import { useState } from "react"
import "./stop.css"
import { useEffect } from "react"
const Timer=()=>{
    const [min,setMin]=useState(0)
    const [sec,setSec]=useState(0)
    const [val,setValue]=useState("")
    const [isClick,setIsClick]=useState(false)
    useEffect(()=>{
        var timer=null
        if(isClick){
           timer=setInterval(()=>{
               if(sec==59){
                setMin(min+1)
                setSec(0)
               }else if(sec<59){
                   setSec(sec+1)
               }
           },1000)
           if(val==min){
            clearInterval(timer)
           }
        }
       //if(min==val){
        return ()=> clearInterval(timer)
       //}
    },[min,sec])

    

    
    return (
        <div>
            <div className="stop">
                <h1>Timer Watch</h1>
                <input value={val} onChange={(e)=>{setValue(e.target.value)}} type="number" placeholder="Enter Minutes" />
                 <div className="time">
                 <h2>Minute-:{min}</h2>
                 <h2>Seconds-:{sec}</h2>
                 </div>
                 <button onClick={()=>setIsClick(true)}>
                      Start 
                 </button>
            </div>
        </div>
    )
}
export default Timer