import React, { useEffect, useState} from 'react';
import './MyButton.css'

const MyButton = (props) => {
  const [count, setCount] = useState(0)
  return(
    <>
    <div>
      <h3>Current count: {count}</h3>
      <button onClick={()=>setCount(count+1)}>+</button>
      <button onClick={()=>setCount(count-1)}>-</button>
    </div>


    </>
  )

}


export default MyButton;
