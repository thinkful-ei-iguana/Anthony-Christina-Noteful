import React from "react";
import "../styles/Sidebar.css";
import STORE from "./Store";

export default class Sidebar extends React.Component {
  render() {
    const folders = STORE.folders.map(folder => {
      return (
        <li className="foldersList">
          <h2>{folder.name}</h2>
        </li>
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
