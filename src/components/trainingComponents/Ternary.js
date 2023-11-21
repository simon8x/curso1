import React, {useState} from 'react'



export default function Ternary() {
    //ternary and destructuring declarations
    const [showHeader, setShowHeader] = useState(false)
        
    function handleSwitchHeader(e){
        if (showHeader)
            setShowHeader(false)
        else
            setShowHeader(true)
    }
  return (
        <div className="single-excercise">
            <button 
                onClick={ e => handleSwitchHeader(e)}
            >Change Status</button>
            {showHeader 
            ? <h1> HEADER TRUE </h1>
            : <h1> HEADER FALSE </h1> }
        </div>
  )
}
