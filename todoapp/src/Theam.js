import React, { useState } from 'react'

const light={
    backgroundColor: 'yellow',
    color:'black'
}
const dark={
    backgroundColor: 'black',
    color:'white'
}

function Theam() {
    // const [theamText, setTheamText]=useState('Dark')
    const [theam, setTheam] =useState(light)
    

    const toggleTheam=()=>{
        (theam.color==='black')? setTheam(dark) :setTheam(light)
    }
  return (
    <div>
        <button className='theam' onClick={toggleTheam} style={theam}>{(theam.color=== 'black')?'Light':'Dark'} </button>
    </div>
  )
}

export default Theam