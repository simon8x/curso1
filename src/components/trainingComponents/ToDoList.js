import React, {useState, useRef} from 'react';
import Task from './Task';

function ToDoList() {
  const [taskName, setTaskName] = useState("");
  const [time, setTime] = useState("");
  const [taskList, setTaskList] = useState([]);
  
  const inputTask = useRef(null);
  const inputTime = useRef(null);

  const addTask = () => {
    setTaskList([...taskList,{task: taskName, time: time}])
    setTaskName('')
    inputTask.current.value = ""
    setTime('')
    inputTime.current.value = ""
    console.log("TASKLIST===> ",taskList)
  }

  const handleTaskname = (e) =>{
    const value = e.target.value;
    setTaskName(value);
    //console.log("task name ======>",taskName);
  }

  const handleTime = (e) => {
    const value = e.target.value;
    setTime(value);
    //console.log("time =======> ", time)
  }

    return (
    <div className='to-do-list-wrapper'>
        <section className='task-input-wrapper'>
            <label className='input-task-label'>task name</label>
            <input 
                className='input-task-input'
                type='text' 
                id="task" 
                onChange={e => handleTaskname(e)}
                ref={inputTask}
                />
            <label className='input-task-label'>time</label>
            <input 
                className='input-task-input'
                type='text' 
                id="time"
                onChange={e => handleTime(e)}
                ref={inputTime}
                />
            <button
                className='simple-btn'
                onClick={addTask}
            >
                add task
            </button>
        </section>
        <section className='task-list-wrapper'>
            {taskList.map((task)=> {
                return <Task key={task.id} taskName={task.task} time={task.time}/>
            })}
            
        </section>
    </div>
  )
}
export default ToDoList;