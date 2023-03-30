import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import "../Styles/ResultBox.css"


export default class ResultBox extends Component {
  generated_files = [
    {
      path: '../Assets/generated3/2023-03-20_135750_01.midi',
      name: "Generated_drums_1"
    },
    {
      path: '../Assets/generated3/2023-03-20_135750_02.midi',
      name: "Generated_drums_2"
    },
    {
      path: '../Assets/generated3/2023-03-20_135750_03.midi',
      name: "Generated_drums_3"
    },
    {
      path: '../Assets/generated3/2023-03-20_135750_04.midi',
      name: "Generated_drums_4"
    },
    {
      path: '../Assets/generated3/2023-03-20_135750_05.midi',
      name: "Generated_drums_5"
    },
    {
      path: '../Assets/generated3/2023-03-20_135750_06.midi',
      name: "Generated_drums_6"
    },
    {
      path: '../Assets/generated3/2023-03-20_135750_07.midi',
      name: "Generated_drums_7"
    },
    {
      path: '../Assets/generated3/2023-03-20_135750_08.midi',
      name: "Generated_drums_8"
    },
    {
      path: '../Assets/generated3/2023-03-20_135750_09.midi',
      name: "Generated_drums_9"
    },
    {
      path: '../Assets/generated3/2023-03-20_135750_10.midi',
      name: "Generated_drums_10"
    },
  ]
  
  render() {
    return (
      <section className='box'>
          <h3 className='boxHeader'>
            Following pieces are generated by the RNN. Hope you like them!
          </h3>
          <div className='result-files'>
            {
              this.generated_files.map((item, index) => 
                <div className='generated-file-name'>{item.name}</div>
              )
            }
          </div>
          <Button className='download-button'>
              Download
          </Button>
      </section>
    )
  }
}
