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
    "": "Please select a model from above",
    "RNN": "Recurrent Neural Network",
    "VQ-VAE": "Vector Quantised-Variational AutoEncoder"
  }

  const modelDescriptions = {
    "": "",
    "RNN": "RNN uses long short-term memory (LSTM) RNNs to learn the patterns and structures of drum beats from the training data and input sequence. It also employs an attention mechanism that allows the model to focus on different parts of the drum track while generating new beats. It can generate MIDI sequences of various styles of drumming, such as rock, jazz, funk, and afro, and can be trained on any dataset of MIDI drum tracks.",
    "VQ-VAE": "VQ-VAE is a type of variational autoencoder that uses vector quantisation to obtain a discrete latent representation of input sequences. Using the VQ method allows the model to circumvent issues of posterior collapse - where the latents are ignored when they are paired with a powerful autoregressive decoder - typically observed in the VAE framework. Pairing these representations with an autoregressive prior, the model can generate high quality drum tracks in various genres such as rock, jazz, latin, and blues."
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
          {!selectedModel == "" && <p>
            {modelDescriptions[selectedModel]}
          </p>} 
        </div>
        <div className='upper-body'>
          {!selectedModel == "" && <FileUploadBox onFileNames={updateFileNames} onModelSelected={selectedModel}/>}
          {generatedFileNames.length > 0 && <ResultBox fileNames={generatedFileNames} modelName={selectedModel}></ResultBox>}
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
