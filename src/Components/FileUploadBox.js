import { Button } from 'react-bootstrap';
import '../Styles/FileUploadBox.css';
import axios from "axios";
import React, { useState } from 'react';
import DialogueBox from './DialogueBox';

function FileUploadBox (props) {
    
    const [selectedFile, setSelectedFile] = useState(null);
    const [dialogueOpen, setDialogueOpen] = useState(false);
    const selectecModel = props.onModelSelected;

    const onFileChange = event => {
        setSelectedFile(event.target.files[0])
    }

    function uploadFile(e) {
        if (selectedFile == null){
            console.log("Testing")
            setDialogueOpen(true)
            {dialogueOpen && <DialogueBox onClose={() => setDialogueOpen(false)} />}
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