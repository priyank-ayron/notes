import "./App.css";
import { useState, useEffect } from "react";
import uuid from "react-uuid";
import Main from "./Main";
import Sidebar from "./Sidebar";

function App() {
  const [notes, setNotes] = useState(
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  );
  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

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

  const getActiveNote = () => {
    return notes.find((note) => note.key === activeNote);
  };

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if (note.key === updatedNote.key) {
        return updatedNote;
      }
      return note;
    });
    setNotes(updatedNotesArray);
  };
  return (
    <div className="App">
      <Sidebar
        notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      ></Sidebar>
      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote}></Main>
    </div>
  );
}

export default App;
