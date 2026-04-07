// ? App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AddNotePage, ArchivePage, DetailPage, HomePage, NotFoundPage } from '../pages';

const App = () => {
  return(
    <div className='app-container'>
      <header>
        <h1>
          <a href="/">Baji Notes App</a>
        </h1>
      </header>
      <main>
        
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/notes/new' element={<AddNotePage/>} />
          <Route path='/notes/:id' element={<DetailPage/>} />
          <Route path='/archive' element={<ArchivePage/>} />
          <Route path='/*' element={<NotFoundPage/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App