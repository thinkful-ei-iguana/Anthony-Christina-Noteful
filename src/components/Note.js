import React from "react";
import { Link } from "react-router-dom";
import STORE from "./Store";
import { format } from "date-fns";

export default function Note(props) {
  const id = props.id || props.match.params.noteId;
  const detail = !props.id;
  const note = STORE.notes.find(note => {
    if (note.id === id) {
      return true;
    }
  });
  if (!note) {
    return <p>No such note exist</p>;
  }

  return (
    <li key={note.id} className="notesList">
      <Link to={`/note/${note.id}`}>
        <h2>{note.name}</h2>
      </Link>
      <p>Last modified on {note.modified}</p>
      <p>{detail && note.content}</p>
      <button className="deleteBtn">Delete Note</button>
    </li>
  );
}
