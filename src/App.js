import React from "react";
import "./App.css";
import Header from "./components/Header";
import NoteList from "./components/NoteList";
import Sidebar from "./components/Sidebar";
import Note from "./components/Note";
import { Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.setFolder = this.setFolder.bind(this);
    this.state = {
      activeFolder: [],
      activeNotes: []
    };
  }

  setFolder(folderId) {
    this.setState({ activeFolder: folderId });
  }

  render() {
    console.log(this.state.activeFolder);
    return (
      <div className="App">
        <Header />
        <div className="group">
          <div className="folder-column">
            <div className="left">
              <Sidebar setFolder={this.setFolder} />
            </div>
          </div>
          <div className="note-column">
            <div className="right">
              <Route path="/folder/:folderId" component={NoteList}></Route>
              <Route path="/note/:noteId" component={Note}></Route>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
