// ? NoteItem.jsx
import React from 'react';
import { showFormattedDate } from "../utils";
import { Link } from 'react-router-dom';

const NoteItem = ({ id, title, body, createdAt }) => {

  return (
    <Link to={`/notes/${id}`} style={{textDecoration: 'none', color: 'inherit'}}>
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{title}</h3>
        <p className="note-item__createdAt">{showFormattedDate(createdAt)}</p>
        <p className="note-item__body">{body}</p>
      </div>
    </div>
    </Link>
  )
}

export default NoteItem;