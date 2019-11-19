import React from "react";
import "../styles/Sidebar.css";
import STORE from "./Store";
import { Link } from "react-router-dom";

export default class Sidebar extends React.Component {
  render() {
    const folders = STORE.folders.map(folder => {
      return (
        <li key={folder.id} className="foldersList">
          <Link to={`/folder/${folder.id}`} className="folderBtn">
            <h2>{folder.name}</h2>
          </Link>
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
