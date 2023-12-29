import React, {useEffect, useState} from 'react';
import JsShowArray from './jsShowArray';

const JsArrays = () => {
    let styleItem = ""
    let myArray = []
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(0);
    const [lenArray, setLenArray] = useState(0);
    const [betNumber, setBetNumber] = useState(0);
    const [winnerNumber, setWinnerNumber] = useState();
    const [theArray, setTheArray] = useState([]);
    const [result, setResult] = useState("GUESS THE NUMBER")
    
    useEffect(() => {
        if (result !== "GUESS THE NUMBER"){
            if (winnerNumber === betNumber){
                setResult('YOU WIN!')
            }else{
                setResult('YOU LOOSE!')
            }
        }
    }, [winnerNumber]);

    const handleSize = e =>{
       setLenArray(parseInt(e.target.value.replace(/\D/g, '')))
       console.log("en handle size!!",lenArray)
    }

    const handleBetNumber = e => {
        setBetNumber(parseInt(e.target.value.replace(/\D/g, '')))
        console.log("en handle bet!!",betNumber)
    }
    // const handleMin = e =>{
    //     setMinValue(e.target.value.replace(/\D/g, ''))
    //     console.log("en handle min!!",minValue)
    //     //console.log("escribiendo => ",lenArray)
    //  }

    // const handleMax = e =>{
    // setMaxValue(e.target.value.replace(/\D/g, ''))
    // console.log("en handle max!!",maxValue)
    // //console.log("escribiendo => ",lenArray)
    // }

    const handleDraw = () => {
        setWinnerNumber(1 + parseInt(Math.floor(Math.random() * (lenArray))))
        //setWinnerNumber(parseInt("10"))
        console.log("TYPE NUMBER=======>", typeof betNumber)
        console.log("TYPE SIZE=======>", typeof lenArray)
        console.log("TYPE WINNER=======>", typeof winnerNumber)
        console.log("HANDLE DRAW BET NUMBER=======>",betNumber)
        console.log("HANDLE DRAW BET SIZE=======>",lenArray)
        console.log("HANDLE DRAW BET WINNER=======>",winnerNumber)
        if(betNumber>0 && betNumber < (lenArray+1)){
            for (let i=0; i<lenArray; i++){
                myArray.push(i+1)
                //myArray.push(Math.floor(Math.random() * 10))
                console.log(myArray[i])
            }
            console.log("winner ==>", winnerNumber)
            //setBetNumber("bet number ==>", )
            console.log("bet number ==>", betNumber)
            console.log("MY ARRAY en handle array", myArray)
            setTheArray(myArray.map(i => i))
            console.log("the ARRAY en handle array", theArray)
            
            // if (winnerNumber === betNumber){
            //     setResult('YOU WIN!')
            // }else{
            //     setResult('YOU LOOSE!')
            // }
            
        }else{
            alert("number out of scope")
        }
        
    }

    const getStyleItem = (prop) =>{
        if (prop === winnerNumber && prop === betNumber) {
            styleItem = "list-item bet-winner"
        } else {
            if (prop === betNumber) {
                styleItem = "list-item bet"
            }else{ if (prop === winnerNumber){
                styleItem = "list-item winner"
            }else{
                styleItem = "list-item"
            }
            }
        }
        return styleItem
    }

    
    //  const showArray = () => {

    //  }
     //  const showArray = () => {
    //     myArray.map((value)=>{
    //         return(
    //             <p key={value}>{value}</p>
    //         )
    //     })
    //  }
    // console.log("len array type ==>",typeof lenArray)
    // console.log("len array number ==>",Number(lenArray))
  return (
    <>
            <div>jsArrays</div>
        <div className='arrays-wrapper'>
            <div className='input-wrapper'>
                <div className='input-item'>
                    <label className='input-label'>size</label>
                    <input 
                        className='input-box'
                        type="text"
                        min="1"
                        onChange={handleSize}
                        //value={lenArray}
                    />

                </div>
                <div className='input-item'>
                    <label className='input-label'>Your number</label>
                    <input 
                        className='input-box'
                        type="text"
                        min="1"
                        onChange={handleBetNumber}
                        //value={betNumber}
                    />
                </div>
                <button 
                    className='go-btn'
                    onClick={ handleDraw } >
                    Good Luck
                </button>
                <div className='result'>
                    <h2>{result}</h2>
                </div>
            </div>

            <div className='list-wrapper'>
                <ul className='list'>
                    {theArray.map((prop) => {
                    return (
                        <li key={prop} className ={getStyleItem(prop)} >
                            {prop}
                        </li>
                    );
                    })}
                </ul>
            </div>
        </div>
    </>
  )
}

export default JsArrays