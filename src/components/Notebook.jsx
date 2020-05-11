import React from "react";
import NoteStruct from "./NoteStruct";
import notes from "../notes";

function newNote(noteComponents){
    return(
        <NoteStruct
        key = {noteComponents.id}
        title = {noteComponents.title}
        content = {noteComponents.content}
        />
    )
}

function Notebook(){
    return notes.map(newNote);
}

export default Notebook;