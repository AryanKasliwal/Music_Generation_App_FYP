import axios from 'axios';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import "../Styles/ResultBox.css"


function ResultBox(props){
  const generated_files = props.fileNames
  const [download_clicked, set_download_clicked] = useState(false)
  const displayLoading = props.isModelGenerating

  const downloadZipFile = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8080/download", {
        responseType: "blob",
      });
  
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "Generated_music.zip");
      document.body.appendChild(link);
      link.click();
      set_download_clicked(true)
    } catch (error) {
      set_download_clicked(false)
      console.error(error);
    }
  };
  
  return (
    <section className='box'>
      {displayLoading && 
        <h3>Your file is sent to the model for music genertion. Once generated, the results will be shown here.</h3>
      }
      {!displayLoading && 
        <div>
          <h3 className='boxHeader'>
            Following pieces are generated by the RNN. Hope you like them!
          </h3>
          <div className='result-files'>
            {generated_files.map((item, index) => 
                <div className='generated-file-name'>{item}</div>
              )
            }
          </div>
          {!download_clicked && 
            <Button className='download-button' onClick={downloadZipFile}>
                Download
            </Button>
          }
          {download_clicked && 
            <p>The files are being downoaded. Check your downloads folder for a zipped file named Generated_music.zip</p>
          }
        </div>
      }
    </section>
  )
}

export default ResultBox;