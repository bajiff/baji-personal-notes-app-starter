// ? ArchivePage.jsx
import React, { useEffect, useState } from 'react';
import { getArchivedNotes } from '../utils/local-data';
import { NoteItem } from '../components';
import { useSearchParams } from 'react-router-dom';

const ArchivePage = ({}) => {
  const [notes, setNotes] = useState(getArchivedNotes());
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') || '';

  const onKeywordChangeHandler = (e) => {
    setSearchParams({keyword: e.target.value});
  };
  
  const filteredNotes = notes.filter(note => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  })
  

  useEffect(() => {
    setNotes(getArchivedNotes());
  }, []);

  return (
    <div>
      <h2>Catatan arsip {notes.length}</h2>
      <section className='search-bar'>
      <input type="text" placeholder='Nyari judul' autoFocus value={keyword} onChange={onKeywordChangeHandler} />
      </section>
      {filteredNotes.length > 0 ? (
        <div className="notes-list">
          {filteredNotes.map(note => (
            <NoteItem key={note.id} {...note} />
          ))}
        </div>
      ) : (
      <div className='notes-list-empty'>
        <p>Tidak ada catatan</p>
      </div>
      )}
    </div>
  );
};

export default ArchivePage;