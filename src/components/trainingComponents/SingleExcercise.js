import React from 'react';
import Props from './Props';
import Persons from './Persons';
import States from './States';
import Login from './Login';
import ListOfNames from './ListOfNames';
import Ternary from './Ternary';
import Fade from 'react-reveal/Fade';
import ToDoList from './ToDoList';

function SingleExcercise({title, size}) {
  return (
    <Fade top>
        <div className={`${size} single-excercise`}>
            <Fade bottom>
                <h1 className='section-title'>
                    {title}
                </h1>
            </Fade>
            
            {title === "props" ?<Props/>:(null)}
            {title === "json mock" ? (<Persons/>):(null)}
            {title === "states uses" ? (<States/>):(null)}
            {title === "login" ? (<Login />):(null)}
            {title === "list of names" ? (<ListOfNames />):(null)}
            {title === "ternary" ? (<Ternary />):(null)}
            {title === "to do list" ? (<ToDoList />):(null)}
            
            {/* <Persons title={"json mock"} />     */}
        </div>
    </Fade>
  )
}

export default SingleExcercise;