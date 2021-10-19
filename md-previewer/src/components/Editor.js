import React from "react";
import { placeholder } from "../assets/placeholder";
import store from "../store/store";
import "./editor.css"

export default function Editor({message}) {
    function handleChange(e) {

    }
    return(
        <textarea id="editor" onChange={handleChange}>
            {message}    
        </textarea>
    )
}