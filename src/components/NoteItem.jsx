// ? NoteItem.jsx
import React from 'react';
import { showFormattedDate } from "../utils";

const NoteItem = ({ title, body, createdAt}) => {
  return (
    <section className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{title}</h3>
        <p className="note-item__createdAt">{showFormattedDate(createdAt)}</p>
        <p className="note-item__body">{body}</p>
      </div>
    </section>
  )
}

export default NoteItem;