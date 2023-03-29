import './Styles/App.css'
import FileUploadBox from './Components/FileUploadBox';
import React from 'react';
import AudioPlayer from './Components/AudioPlayer';
import ResultBox from './Components/ResultBox'


class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          AI Music Generation
        </header>
        <body className='body'>
          <div className='upper-body'>
            <FileUploadBox fileType = "MIDI"/>
            <ResultBox></ResultBox>
          </div>
          <div className='audio-player'>
            <AudioPlayer/>
          </div>
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
