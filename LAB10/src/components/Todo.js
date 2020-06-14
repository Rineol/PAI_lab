import React, { Component } from "react";


function Todo (props){
    const completedStyle = {
        fontStyle: "italic",
        color: "white",
        textDecoration: "line-through"
    }
    const hiddenStyle = {
        display: "none",
    }
    const normal = {
        fontStyle:  "bold",
        color: "white",
        fontSize: "15px",
        align: "left",
        
        //margin: "5px 0px"

    }
    return (

        <div  style={props.visible && props.item.completed ? hiddenStyle : normal}>
            <input
                type="checkbox"
                checked={props.item.completed}
                
                onClick={() => props.handleClick(props.item.id)}
            />
            <label style = {props.item.completed ? completedStyle: null}>{props.item.text}</label>
        </div>
    )

}
export default Todo;