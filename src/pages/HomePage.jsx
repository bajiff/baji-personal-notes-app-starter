import { getActiveNotes } from '../utils/local-data';
import { NoteItem } from '../components';
import React, { useState } from 'react';

const HomePage = () => {
  const [notes, setNotes] = useState(getActiveNotes());
  return (
    <div>
      <h2>Catatan aktif {notes.length}</h2>
      {notes.length > 0 ? (
        <div className="notes-list">
          {notes.map(note => (
            <NoteItem key={note.id} {...note} />
          ))}
        </div>
      ) : (<div className='notes-list-empty'>
        <p>Tidak ada catatan</p>
      </div>)}
    </div>
  )
}

export default HomePage;