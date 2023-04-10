import React from 'react'
import "../Styles/ModelSelection.css"

export function ModelSelection(props) {

  const handleChange = (event) => {
    props.setModelChoice(event.target.value);
  };

  return (
    <div className="top-section">
      <div>
        <h2 className='dropdown-header'>Select a model to generate music</h2>
      </div>
      <select className='dropdown' id="dropdown-select" onChange={handleChange}>
        <option value="">--Please choose an option--</option>
        <option value="RNN">RNN</option>
        <option value="VQ-VAE">VQ-VAE</option>
      </select>
    </div>
  )
}


export default ModelSelection