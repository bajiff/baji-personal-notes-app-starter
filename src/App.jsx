// ? App.jsx
import { Component } from 'react';
import { getAllNotes } from './utils/local-data';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getAllNotes()
    }
  }
  
  render() {
    const {notes} = this.state;
    return(
      <section className="app-container">
        <header>
          <h1>Baji Notes App</h1>
        </header>
        <main>
          <ul>
            {notes.map(note => (
              <>
                <br />
                <li>{note.body}</li>
                <br />
              </>
            ))}
          </ul>
        </main>
      </section>
    );
  };
}