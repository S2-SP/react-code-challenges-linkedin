import { useEffect, useState } from "react";

export default function Color ({ hex, name, setBackgroundColor }) {
  const [bgColor, setBgColor] = useState(false);

  useEffect(()=>{
    setBackgroundColor(bgColor);
  }, [bgColor]);
  return (
    <button
      className='color-square'
      style={{ backgroundColor: hex }}
      onClick={()=> setBgColor(hex)}
    >
      <h2>{name}</h2>
    </button>
  )
}
