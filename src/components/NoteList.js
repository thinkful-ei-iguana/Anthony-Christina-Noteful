import React from "react";
import STORE from "./Store";
import "../styles/NoteList.css";

export default class NoteList extends React.Component {
  render() {
    const notes = STORE.notes.map(note => {
      return (
        <li className="notesList">
          <h2>{note.name}</h2>
          <p>Last modified on {note.modified}</p>
          <button className="deleteBtn">Delete Note</button>
        </li>
      );
    });
    return (
      <main>
        {notes}
        <button className="addNote">Add Note</button>
      </main>
    );
  }
}
