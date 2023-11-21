import React from 'react';
import Props from './Props';
import Persons from './Persons';
import States from './States';
import Login from './Login';
import ListOfNames from './ListOfNames';
import Ternary from './Ternary';
import Fade from 'react-reveal/Fade';

function SingleExcercise({title}) {
  return (
    <Fade top>
        <div className="single-excercise">
            <Fade bottom>
                <h1 className='section-title'>
                    {title}
                </h1>
            </Fade>
            
            {title === "props" ?(<Props/>):(<></>)}
            {title === "json mock" ? (<Persons/>):(<></>)}
            {title === "states uses" ? (<States/>):(<></>)}
            {title === "login" ? (<Login />):(<></>)}
            {title === "list of names" ? (<ListOfNames />):(<></>)}
            {title === "ternary" ? (<Ternary />):(<></>)}
            
            {/* <Persons title={"json mock"} />     */}
        </div>
    </Fade>
  )
}

export default SingleExcercise;