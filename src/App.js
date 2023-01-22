import './App.css';
import FileUploadBox from './Components/FileUploadBox';
import React from 'react';


class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          AI Music Generation
        </header>
        <body className='body'>
          <FileUploadBox fileType = "MP.3"/>
          <FileUploadBox fileType = "MIDI"/>
        </body>
        <footer className='footer'>
          This is the Final Year Project by Aryan Girish Kasliwal.
          For academic purposes only.
        </footer>
      </div>
    );
  }
}

export default App;
