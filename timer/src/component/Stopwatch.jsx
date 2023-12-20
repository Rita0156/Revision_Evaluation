import { useState } from "react"
import "./stop.css"
import { useEffect } from "react"
const Stopwatch=()=>{
    const [min,setMin]=useState(0)
    const [sec,setSec]=useState(0)
    const [val,setValue]=useState("")
    const [isClick,setIsClick]=useState(false)

    useEffect(()=>{
        var timer=null
        
        if(isClick){
            
           timer=setInterval(()=>{
            if(val>0){
                setMin(val-1)
                setSec(59)
            }
               if(sec==0){
                setMin(min-1)
                setSec(0)
               }else if(sec>0){
                   setSec(sec-1)
               }
           },1000)
           if(min==0){
            clearInterval(timer)
           }
        }
       //if(min==val){
        return ()=> clearInterval(timer)
    },[sec,min])

    return (
        <div>
            <div className="stop">
                <h1>Stop Watch</h1>
                <input value={val} onChange={(e)=>{setValue(e.target.value)}} type="number" placeholder="Enter Minutes" />
                 <div className="time">
                 <h2>Minute-:{min}</h2>
                 <h2>Seconds-:{sec}</h2>
                 </div>
                 <button id="btn" onClick={()=>{setIsClick(true)}}>
                      Start 
                 </button>
            </div>
        </div>
    )
}
export default Stopwatch