import React,{useState} from 'react'

export default function ListOfNames() {
    // declarate verbals and states to list of names excercises
    const[name, setName] = useState(['']);
    const[listOfNames, setListOfNames] = useState([]);

    function handleName(e){
        const value = e.target.value;
        setName(value);
    }

    function handleList(e){
        setListOfNames([...listOfNames,name]);
        setName('');
        console.log(listOfNames);
    }

  return (
    <div>
        <input 
            type="text" 
            onChange={ e => handleName(e)}
        />
        <button
            onClick={ e => handleList(e)} 
        >
            Add Name
        </button>
        {listOfNames.map((value)=>{
            return(
                <p>{value}</p>
            )
        })}
    </div>
  )
}
