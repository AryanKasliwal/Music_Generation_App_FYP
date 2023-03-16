import './App.css';
import FileUploadBox from './Components/FileUploadBox';
import React from 'react';
import Result from './Components/Result'


class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          AI Music Generation
        </header>
        <body className='body'>
          <FileUploadBox fileType = "MIDI"/>
          <Result></Result>
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
