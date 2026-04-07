import React, { useState } from 'react';
import { addNote } from '../utils/local-data';
import { useNavigate } from 'react-router-dom';


const AddNotePage = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate();
  
  const submitHandler = () => {
    addNote({title,body});
    navigate('/');
  }
  return (
    <div>
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} autoFocus required placeholder='Judulnya bang' />
      <input type="text" value={body} onChange={e => setBody(e.target.value)} required placeholder='Ini Deskripsinya bang' />
      <button onClick={submitHandler}>Submit</button>
    </div>
  )
}

export default AddNotePage;