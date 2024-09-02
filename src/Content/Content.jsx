import styles from "./Content.module.css"
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


function Content () {

    const [tasks, setTasks] = useState([]);
    const [newTasks, setNewTasks] = useState("");

    function handleInputChange(event){
        setNewTasks(event.target.value);
    }

    function addTask(){

        if(newTasks.trim() !== "") {
        setTasks( t => [...tasks, newTasks]);
        setNewTasks("");
        }
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_,i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index){
        if(index > 0 ){
            const updatedTasks = [...tasks];
            [updatedTasks [index],updatedTasks[index -1]] = 
            [updatedTasks[index -1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks [index],updatedTasks[index + 1]] = 
            [updatedTasks[index + 1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return (
        <div className={styles.toDoList}>
        <div className={styles.input}>
            <input type="text" placeholder="Enter a Task..."
            value={newTasks}
            onChange={handleInputChange}>
            </input>
                <Button variant="primary" style={{backgroundColor : "#FF8225", borderStyle : "none", marginLeft : "5px"}} onClick={addTask}>Add</Button>
        </div>

        <ol >
            {tasks.map((task, index) =>
             <li key={index}>
                <span className={styles.text}>{task}</span>

                <Button 
                 variant="danger"
                 style={{borderStyle : "none", fontSize : "12px", marginLeft:"10px" }}
                 onClick={() => deleteTask(index)}>
                Delete</Button>

                <Button 
                 variant="danger"
                 style={{backgroundColor : "#FF8225", borderStyle : "none", fontSize : "12px",marginLeft:"10px" }}
                 onClick={() => moveTaskUp(index)}>
                    Up</Button>

                <Button 
                 variant="danger"
                 style={{backgroundColor : "#FF8225", borderStyle : "none", fontSize : "12px",marginLeft:"10px" }}
                 onClick={() => moveTaskDown(index)}>
                    Down</Button>
             </li>)}
        </ol>
        </div>);
}

export default Content