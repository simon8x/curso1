import React from 'react'

const Prop = (props) => {
    //console.log("PROPSS ==============> ", props)
  return (
    <>
        <div className="person-wrapper"> 
            <div className='person-data-wrapper'>
                <h4 className="person-name">{props.name}</h4>
                <p className="person-role"> {props.lastname} lastname</p>
                <p className="person-role"> {props.email}</p>
            </div>
        </div>
    </>
  )
}

export default Prop;