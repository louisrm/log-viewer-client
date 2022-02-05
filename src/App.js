import React, { useState, useEffect } from 'react';

function App() {

  const [data, setData] = useState({})

  useEffect(() => {
    fetch("/members",{
      headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
    }).then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
    
  }, [])
  

  return (
    <div>
      {(typeof data.STATUSTEXT === 'undefined') ? (
        <p>Loading...</p> 
      ) : (
        Object.keys(data).map((member, i) => (
          <p key={i}>{member}</p>
        ))
      )}
     
      {(typeof data.STATUSTEXT === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        data.STATUSTEXT.text.map((member, i) => (
          <p key={i}>{member}</p>
        )))
      }
    </div>
  )
}

export default App