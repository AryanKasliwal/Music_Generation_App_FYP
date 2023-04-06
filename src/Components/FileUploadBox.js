import { Button } from 'react-bootstrap';
import '../Styles/FileUploadBox.css';
import axios from "axios";
import React from 'react';


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
        formData.append("file", file);

        axios
        .post("http://127.0.0.1:8080/upload", formData)
        .then(res => console.log(res.data))
        .catch(error => console.warn(error));
    }
  
    render(){
        return (
            <section className='fileBox'>
                <h3 className='boxHeader'>
                    Drag and drop your {this.fileType} files anywhere here.
                </h3>
                <Button type="upload_button" className='uploadButton'>
                    {/* <i className="fas_fa-file-upload" /> */}
                    <input className='chooseFileBox' type="file" name="file" onChange={this.onFileChange.bind(this)}/>
                </Button>
                <Button className='submitButton' onClick={this.uploadFile.bind(this)}>
                    Submit
                </Button>
            </section>        
        );
    }
}

export default FileUploadBox