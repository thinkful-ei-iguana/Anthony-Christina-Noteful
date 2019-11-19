import React from "react";
import "./App.css";
import Header from "./components/Header";
import NoteList from "./components/NoteList";
import Sidebar from "./components/Sidebar";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="group">
          <div className="column">
            <div className="left">
              <Sidebar />
            </div>
          </div>
          <div className="column">
            <div className="right">
              <NoteList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
