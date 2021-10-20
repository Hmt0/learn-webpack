import React from "react";
import store from "../store/store";
import "./editor.css"

export default function Editor({message, onInputChange}) {
    return(
        <textarea value={message} id="editor" 
        onChange={e => {
            e.preventDefault()
            console.log(e.target.value)
            onInputChange(e.target.value)
        }}
        >
            {/* 受控组件，填入value值,非受控组件 */}
        </textarea>
    )
}