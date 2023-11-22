import React from 'react'
import { Fade } from 'react-reveal';

function Task({key, taskName, time}) {
    console.log("taskname" , taskName )
  return (
    <div className='single-task'>
      <Fade bottom>
        <p className='task-name'>
            Task Name: {taskName}
        </p>
      </Fade>
      <Fade top>
        <p className='task-time'>
            Time: {time}
        </p>
      </Fade>
    </div>
  )
}

export default Task