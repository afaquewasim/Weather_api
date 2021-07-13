import React, { useState } from "react";
import ToDoLists from './ToDoLists';
import './css/mystyle.css';

const Main = () => {

    const [inputList, setInputList] = useState("");
    const [items, setitems] = useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value);
    };
    const doWork = () => {
        setitems((olditems) =>{
            return [...olditems, inputList];
        })
        setInputList('');
    };
    const deleteitems = (id) => {
        console.log("deleted");
        setitems((olditems) => {
            return olditems.filter((arrElem, index) => {
                return index !== id ;
            })
        })
    };
    


    return (
        <>
            <div className="main-div">
                <div className="center-div">
                    <br />
                    <h1>ToDo List</h1>
                    <br />
                    <input type="text" placeholder="Add a Item" onChange={itemEvent} value = {inputList} />
                    <button onClick = {doWork}>+</button>

                    <ol>
                        
                        {items.map((itemval, index) =>{
                            return <ToDoLists
                                text={itemval}
                                key={index}
                                id={index}
                                onSelect = {deleteitems} />
                        })}
                    </ol>
                </div>
            </div>
        </>
    );
}
export default Main;