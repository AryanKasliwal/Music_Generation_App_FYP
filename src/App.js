import './Styles/App.css'
import FileUploadBox from './Components/FileUploadBox';
import React, { useState } from 'react';
import ResultBox from './Components/ResultBox';
import ModelSelection from './Components/ModelSelection';


function App() {
  const [generatedFileNames, setGeneratedFileNames] = useState([])
  const [selectedModel, setSelectedModel] = useState("")

  const updateSelectedModel = (choice) => {
    setSelectedModel(choice)
  }

  const updateFileNames = (data) => {
    setGeneratedFileNames(data)
  }

  const modelDescriptionHeadings = {
    "": "Please select a model above",
    "RNN": "Capabilities of RNN",
    "VQ-VAE": "Description of chosen model"
  }

  const modelDescriptions = {
    "": "",
    "RNN": "You have selected a RNN. This model can generate MIDI sequences of various styles of drumming, such as rock, jazz, and funk, and can be trained on any dataset of MIDI drum tracks. This RNN uses long short-term memory (LSTM) RNNs to learn the patterns and structures of drum beats from the training data. It also employs an attention mechanism that allows the model to focus on different parts of the drum track while generating new beats.",
    "VQ-VAE": ""
  }
  return (
    <div className='App'>
      <header className='App-header'>
        AI Music Generation
      </header>
      <div className='audio-player'>
        <ModelSelection setModelChoice={updateSelectedModel}/>
      </div>
      <body className='body'>
        <div className='model-description'>
          <h1 className='desc-heading'>{modelDescriptionHeadings[selectedModel]}</h1>
          <p>
            {modelDescriptions[selectedModel]}
          </p>
        </div>
        <div className='upper-body'>
          <FileUploadBox onFileNames={updateFileNames}/>
          {generatedFileNames.length > 0 && <ResultBox fileNames={generatedFileNames}></ResultBox>}
        </div>
      </body>
      <footer className='footer'>
        This is the Final Year Project by Aryan Girish Kasliwal.
        For academic purposes only.
      </footer>
    </div>
  );
}

export default App;
