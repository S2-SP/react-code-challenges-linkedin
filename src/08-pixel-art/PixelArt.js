import React, { createContext, useContext, useState } from 'react'

const Context = createContext({
  color:'lightGrey',
  setColor:()=>{

  }
})
function ColorPicker () {
  const colors = ['red', 'blue', 'yellow', 'green', 'black', 'white', 'purple']
  const { setColor } = useContext(Context);

  return (
    <div>
      <h1>Choose a color</h1>
      {colors.map(color => <button key={color} style={{ backgroundColor: color }} onClick={()=> setColor(color)}/>)}
    </div>
  )
}

function Pixel () {
  const {color} = useContext(Context);
  const [pixelBgColor, setPixelBgColor] = useState('lightGrey');

  return <div style={{ height: '20px', width: '20px', backgroundColor: pixelBgColor, margin: '1px' }} onClick={()=>setPixelBgColor(color)}/>
}

function Pixels () {
  const pixels = []
  for (let i = 0; i < 100; i++) pixels.push(<Pixel key={i} />)
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', width: '210px', margin: '0 auto' }}>
      {pixels}
    </div>
  )
}

export default function PixelArt () {
  const [color, setColor]=useState('lightGrey')
  return (
    <div>
      <Context.Provider value={{color, setColor}}>
      <ColorPicker />
      <Pixels />
      </Context.Provider>
     
      
    </div>
  )
}
