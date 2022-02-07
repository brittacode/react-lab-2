import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SocialPosts } from './SocialPosts';
import { ReactDOM } from 'react';
import Modal from 'react-modal'



Modal.setAppElement(document.getElementById('root') as HTMLElement)
function App() {
  return (
    <div className="App">
      <div className="thoughts">
      <h1>My Thoughts</h1>

      </div>
      

      <SocialPosts></SocialPosts>
      
      
    </div>
  );
}

export default App;
