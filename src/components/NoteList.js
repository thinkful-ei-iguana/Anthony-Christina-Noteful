import React from "react";
import STORE from "./Store";
import "../styles/NoteList.css";
import Note from "./Note";

export default class NoteList extends React.Component {
  render() {
    const notes = STORE.notes
      .filter(note => {
        if (note.folderId === this.props.match.params.folderId) {
          return true;
        }
      })
      .map(note => {
        return <Note id={note.id} />;
      });
    if (notes.length === 0) {
      return <p>This is an empty folder</p>;
    }
    return (
      <main>
        {notes}
        <button className="addNote">Add Note</button>
      </main>
    );
  }
}
