import { useEffect, useState } from 'react'
import Color from './Color'

const colors = [{
  hex: '#91A6FF',
  name: 'Cornflower Blue'
},
{
  hex: '#FF88DC',
  name: 'Persian Pink'
},
{
  hex: '#80FF72',
  name: 'Screamin Green'
},
{
  hex: '#FF5154',
  name: 'Tart Orange'
}]

export default function ColorPicker () {
  const [backgroundColor, setBackgroundColor] = useState('white')
  const [color, setColor] = useState('')

  useEffect(()=>{

    if(color){
      setBackgroundColor(color)
    }
    
  }, [color])

  return (
    <div className='page' style={{ backgroundColor }}>
      {
        colors.map(color => (
          <Color key={color.hex} hex={color.hex} name={color.name} setBackgroundColor={setColor}/>
        ))
      }
    </div>
  )
}
