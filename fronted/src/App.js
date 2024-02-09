import React from 'react';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navigation from'./components/Navigation'
import NotesList from './components/NotesList'
import NotesCreate from './components/NotesCreate'
import UsersCreate from './components/UsersCreate'

function App() {
  const Editroute = () => <NotesCreate params={useParams()} />; 

  return (
    <BrowserRouter>
      <Navigation />
      <div className="container p-4">
        <Routes>
          <Route path="/" exact element={<NotesList />} />
          <Route path="/edit/:id" element={<Editroute />} />
          <Route path="/create" element={<NotesCreate />} />
          <Route path="/user" element={<UsersCreate />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
