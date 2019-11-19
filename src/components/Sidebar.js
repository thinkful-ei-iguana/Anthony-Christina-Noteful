import React from "react";
import "../styles/Sidebar.css";
import STORE from "./Store";

export default class Sidebar extends React.Component {
  renderfolder() {
    const folderId = STORE.folders.filter(id => {
      if (id === STORE.notes.folderId) {
        return folderId;
      }
    });
  }

  render() {
    const folders = STORE.folders.map(folder => {
      return (
        <button className="folderBtn" onClick={this.renderFolder}>
          <li className="foldersList">
            <h2>{folder.name}</h2>
          </li>
        </button>
      );
    });
    return (
      <section>
        {folders}
        <button className="addFolder">Add Folder</button>
      </section>
    );
  }
}
