import { Button } from 'react-bootstrap';
import '../Styles/FileUploadBox.css';
import axios from "axios";
import React, { useState } from 'react';

function FileUploadBox (props) {
    
    const [selectedFile, setSelectedFile] = useState(null);
    const selectecModel = props.onModelSelected;

    const onFileChange = event => {
        setSelectedFile(event.target.files[0])
    }

    function uploadFile(e) {
        if (selectedFile == null){
            console.log("Testing")
        }
        else {
            let file = selectedFile;
            let filename = file.name;
            const formData = new FormData();
            formData.append("file", file);
            formData.append("model", selectecModel);
            formData.append("filename", filename)

            axios
            .post("http://127.0.0.1:8080/upload", formData)
            .then(function (response) {
                console.log("Get function")
            },
            function (response) {
                console.log("Failed to post correctly")
                axios
                .get('http://127.0.0.1:8080/get_names')
                .then(res => props.onFileNames(res.data['data']))
                .catch(error => console.warn(error))
            })
            .catch(error => console.warn(error));
        }
    }

  
    return (
        <section className='fileBox'>
            <h3 className='boxHeader'>
                Drag and drop your MIDI files anywhere here.
                If you don't have MIDI drum files, you can find them {<a href='https://portland-my.sharepoint.com/:f:/g/personal/akasliwal2-c_my_cityu_edu_hk/EpLqpsnQvuBGuf2VOGbv_tIBrj6dGczdMv3RDptZA_Yf3A?e=itxlzB' target='_blank' rel='noreferrer'>here</a>}
            </h3>
            <Button type="upload_button" className='uploadButton'>
                <input className='chooseFileBox' type="file" name="file" onChange={onFileChange}/>
            </Button>
            <Button className='submitButton' onClick={uploadFile}>
                Submit
            </Button>
        </section>        
    );
}

export default FileUploadBox