import React from "react";

function Sidebar({
  notes,
  onAddNote,
  onDeleteNote,
  activeNote,
  setActiveNote,
}) {
  const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);
  return (
    <div className="app-sidebar">
      <div class="app-sidebar-header">
        <h1>Notes</h1>
        <button onClick={onAddNote}>Add</button>
      </div>
      <div class="app-sidebar-notes">
        {sortedNotes.map((note) => (
          <div
            class={`app-sidebar-note ${note.key === activeNote && "active"}`}
            onClick={() => setActiveNote(note.key)}
          >
            <div class="sidebar-note-title">
              <strong>{note.title}</strong>
              <button onClick={(e) => onDeleteNote(note.key)}>Delete</button>
            </div>
            <p>{note.body && note.body.substr(0, 100) + "..."}</p>
            <small className="note-meta">
              Last modified{" "}
              {new Date(note.lastModified).toLocaleDateString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
