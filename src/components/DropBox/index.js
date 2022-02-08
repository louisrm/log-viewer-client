import { React, useEffect } from 'react';
import {useDropzone} from 'react-dropzone';
import { StyledDropbox } from './DropBox.styles';

function DropBox(props) {
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();

    // useEffect(() => {

    //     console.log(acceptedFiles)
    //     const formData = new FormData()
    //     formData.append(acceptedFiles[0])

    //     fetch('/customData', {
    //         method: 'POST',
    //         body: formData
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //     })
    //     .catch(error => {
    //         console.error(error)
    //     })
        

    // }, [acceptedFiles])
    

  return (
    <StyledDropbox className="container">
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop .tlog file here</p>
      </div>
    </StyledDropbox>
  );
}

export default DropBox;