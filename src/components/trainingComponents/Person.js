import React from 'react'

const Person = (props) => {
    
  return (
    <div className="person-wrapper"> 
      <div className="person-img-wrapper"> 
        <img className="person-img" src={props.img} alt='' />
      </div>
        <div className='person-data-wrapper'>
            <h4 className="person-name">{props.name}</h4>
            <p className="person-role">{props.role}</p>
        </div>
    </div>
  )
}

export default Person;