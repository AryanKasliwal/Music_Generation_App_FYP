import './Styles/App.css'
import FileUploadBox from './Components/FileUploadBox';
import React from 'react';
import { Option } from './Components/ModelSelection';
import ModelSelection from './Components/ModelSelection';
import ResultBox from './Components/ResultBox'


class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          AI Music Generation
        </header>
          <div className='audio-player'>
              <ModelSelection
                formLabel="Choose a model"
                buttonText="Send"
                action="/"
              >
                <Option selected value="Click to see options" />
                <Option value="RNN" />
                <Option value="VQ-VAE" />
              </ModelSelection>
            </div>
          <body className='body'>
            <div className='model-description'>
              <h1 className='desc-heading'>Description of chosen model</h1>
              <p>
                You have selected a RNN. This model can generate MIDI sequences of various styles of drumming, such as rock, jazz, and funk, and can be trained on any dataset of MIDI drum tracks. 
                This RNN uses long short-term memory (LSTM) RNNs to learn the patterns and structures of drum beats from the training data. It also employs an attention mechanism that allows the model to focus on different parts of the drum track while generating new beats.
              </p>
            </div>
            <div className='upper-body'>
              <FileUploadBox fileType = "MIDI"/>
              <ResultBox></ResultBox>
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
