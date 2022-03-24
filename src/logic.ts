import { start } from "repl"
import { receiveMessageOnPort } from "worker_threads"
import {notes,Note} from "./data.js"
import { createBtn,render } from "./main.js"

export function allNodes(){
    return notes
}

export function addNotes( note:Note){
    notes.push (note)
}


// export function local() {

//     localStorage.setItem(,renderAll)
//     alert('Saqlandi!')

// }


localStorage.setItem("tKey", 'addNotes');
console.log(localStorage.getItem("tKey"));