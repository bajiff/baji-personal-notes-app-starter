// ? App.jsx
import React from 'react';
import { getAllNotes } from './utils/local-data';
import { NoteItem } from './components';
import { useState } from 'react';

const App = () => {
  const [notes, setNotes] = useState(getAllNotes());
  return(
    <section className='app-container'>
      <header>
        <h1>Baji Notes App</h1>
      </header>
      <main>
        {notes.length > 0 ? (<h1>Notes Available ({notes.length})</h1>) : ''}
        <div className='notes-list'>
          {notes.length > 0 ? (
            notes.map(note => (
            <NoteItem key={note.id} title={note.title} body={note.body} createdAt={note.createdAt} />
            ))
          ) : "Kosong"}
        </div>
      </main>
    </section>
  );
}

export default App