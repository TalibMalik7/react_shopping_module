import React,{useState} from 'react'

const TypingBox = () => {
const [time,setTime] = useState(15);
  return (
    <div>
      <div className='row-1'>
       <div>{time}</div> 
       <div>
        <button onClick={()=>setTime(15)}>15s</button>
        <button onClick={()=>setTime(30)}>30s</button>
        <button onClick={()=>setTime(60)}>60s</button>
       </div>
      </div>
      
    </div>
  )
}

export default TypingBox