import "./App.css";
import { useState } from "react";
import uuid from "react-uuid";
import Main from "./Main";
import Sidebar from "./Sidebar";

function App() {
  const [notes, setNotes] = useState([]);

  const onAddNote = () => {
    const newNote = {
      key: uuid(),
      title: "Untitled Note",
      body: "",
      lastModified: Date.now(),
    };
    setNotes([newNote, ...notes]);
  };

  const onDeleteNote = (key) => {
    setNotes(notes.filter((note) => note.key !== key));
  };
  return (
    <div className="App">
      <Sidebar
        notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
      ></Sidebar>
      <Main></Main>
    </div>
  );
}

export default App;
