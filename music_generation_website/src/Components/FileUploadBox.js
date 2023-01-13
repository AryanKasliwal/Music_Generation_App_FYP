import { Button } from 'react-bootstrap';
import './FileUploadBox.css';
import axios from "axios";
import React, {useState} from 'react';


class FileUploadBox extends React.Component {
    constructor(props){
        super(props)
        this.fileType = props.fileType
        this.state = {
            selectedFile: null
        };
    };

    onFileChange = event => {
        this.setState({selectedFile: event.target.files[0]})
    }

    uploadFile(e) {
        let file = this.state.selectedFile;
        const formData = new FormData();
        formData.append("File", file);

        axios
        .post("http://localhost:8080/", file)
        .then(res => console.log(res.data))
        .catch(error => console.warn(error));
    }
  
    render(){
        return (
            <section className='fileBox'>
                <h3 className='boxHeader'>
                    Drag and drop your {this.fileType} files anywhere here.
                </h3>
                <Button type="button" className='uploadButton'>
                    <i className="fas_fa-file-upload" />
                    <input type="file" name="file" onChange={this.onFileChange.bind(this)}/>
                </Button>
                <Button className='submitButton' onClick={this.uploadFile.bind(this)}>
                    Submit
                </Button>
            </section>        
        );
    }
}

export default FileUploadBox