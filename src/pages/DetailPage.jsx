import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { archiveNote, unarchiveNote, deleteNote, getNote } from "../utils/local-data";
import { showFormattedDate } from '../utils'

const DetailPage = () => {
  const { id } = useParams();
  const note = getNote(id);
  const navigate = useNavigate();

  const archiveHandler = () => {
    archiveNote(id);
    navigate('/archive');
  };
  
  const unarchiveHandler = () => {
    unarchiveNote(id)
    navigate('/');
  }
  
  const deleteHandler = () => {
    deleteNote(id);
    navigate('/');
  };
  
  if (!note) {
    return <p>Nyari apa bos...</p>
  }

  return (
    <div className='detail-page'>
      <p className='detail-page__createdAt'>{showFormattedDate(note.createdAt)}</p>
      <h3 className='detail-page__title'>{note.title}</h3>
      <div className="detail-page__body">
        <p>{note.body}</p>
      </div>
      <div className="detail-page__action">
        {note.archived ? (
          <button className="action" title='munculkan' onClick={unarchiveHandler}>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.83 1H5.42l.82-1zM5 19V8h14v11H5zm3-5h2.55v3h2.9v-3H16l-4-4z"></path></svg>
          </button>
        ) : (
        <button className="action" title='arsipkan' onClick={archiveHandler}>
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.81.97H5.44l.8-.97zM5 19V8h14v11H5zm8.45-9h-2.9v3H8l4 4 4-4h-2.55z"></path></svg>
        </button>
        )}
        <button className="action" title='delete' onClick={deleteHandler}>
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>
        </button>
      </div>
    </div>
  )
}

export default DetailPage;