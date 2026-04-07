import React from 'react'
import { useParams } from 'react-router-dom';
import { getNote } from "../utils/local-data";

const DetailPage = () => {
  const { id } = useParams();
  const note = getNote(id)
  return (
    <div>
      <p> DetailPage {id} dan ini isi dari note {note.title}</p>
      <p>{note.body}</p>
    </div>
  )
}

export default DetailPage;