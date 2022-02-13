import { React , useCallback } from 'react'
import {useDropzone} from 'react-dropzone'
import { StyledDropbox } from './DropBox.styles'

function DropBox({ setFlightData, routeChange, setFilename }) {

  const onDrop = useCallback(acceptedFiles => {
    routeChange()

    console.log(acceptedFiles)
    const formData = new FormData()
    const firstAcceptedFile = acceptedFiles[0]
    setFilename(firstAcceptedFile.name.substring(0, firstAcceptedFile.name.length - 5))
    formData.append('file', firstAcceptedFile)

    fetch('/customData', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        console.log(JSON.parse(data))
        setFlightData(JSON.parse(data))
    })
    .catch(error => {
        console.error(error)
    })

  }, [])

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <StyledDropbox>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {
          isDragActive ?
            <p>Drop the files here ...</p> :
            <p>Drag 'n' drop .tlog file here</p>
        }
      </div>
    </StyledDropbox>
  );
}

export default DropBox;