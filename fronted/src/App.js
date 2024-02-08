import React from 'react';
//import { BrowserRouter as Router, Route} from 'react-router-dom'
import { BrowserRouter, Route,Routes} from 'react-router-dom' //versión recientes

import './App.css';

import Navigation from'./components/Navigation'
import NotesList from './components/NotesList'
import NotesCreate from './components/NotesCreate'
import UsersCreate from './components/UsersCreate'

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" exact Component={NotesList}></Route>
        <Route path="/edit/:id" Component={NotesCreate}></Route>
        <Route path="/create" Component={NotesCreate}></Route>
        <Route path="/user" Component={UsersCreate}></Route>
      </Routes>
    </BrowserRouter>
      
  );
}

export default App;
