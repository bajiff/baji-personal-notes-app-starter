import { getActiveNotes } from '../utils/local-data';
import { NoteItem } from '../components';
import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const HomePage = () => {
  const [notes, setNotes] = useState(getActiveNotes());
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') || '';
  
  const onKeywordChangeHandler = (e) => {
    setSearchParams({keyword: e.target.value});
  };
  
  const filteredNotes = notes.filter(note => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  })
  
  useEffect(() => {
    setNotes(getActiveNotes());
  }, []);

  return (
    <div>
      <h2>Catatan aktif {notes.length}</h2>
      <section className="search-bar">
      <input type="text" placeholder='Nyari judul' autoFocus value={keyword} onChange={onKeywordChangeHandler} />
      </section>
      {filteredNotes.length > 0 ? (
        <div className="notes-list">
          {filteredNotes.map(note => (
            <NoteItem key={note.id} {...note} />
          ))}
        </div>
      ) : (<div className='notes-list-empty'>
        <p>Tidak ada catatan</p>
      </div>)}
      <div className="homepage__action">
        <Link to="/notes/new" title="Tambah" className="action">
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;