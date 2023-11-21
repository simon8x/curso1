import React, {useState} from 'react';


function States() {
    //declarate state states exercises
    const [dummyState, setDummyState] = useState(0);
    function decrece(){
        setDummyState(dummyState - 1)
    }
    function increce(){
        setDummyState(dummyState + 1)
    }
  return (
    <div>
        <div className="controls-wrapper">
            <button className="control-btn"
                onClick= {decrece}
            >
                -
            </button>
            <p className="result">
                { dummyState }
            </p>
            <button className="control-btn"
                onClick={increce}
            >
                +
            </button>
        </div>
    </div>
  )
}
export default States;