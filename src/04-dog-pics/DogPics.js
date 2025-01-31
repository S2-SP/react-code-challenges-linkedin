import axios from 'axios';
import { useState } from 'react';
export default function DogPics () {
  const API= 'https://dog.ceo/dog-api/'
  const [dogPic, setDogPic] = useState('');

  const handleClick = async() =>{
    try{
      const result = await fetch('https://dog.ceo/api/breeds/image/random');
      const dog = await result.json()
      setDogPic(dog.message);
    }catch(error){
      console.error('Error fetching dog image:', error);
    }
    
  }

  return (
    <div className='dog-pics'>
     {dogPic && <img src={dogPic} alt='Random Dog'/>}
      <button onClick={handleClick}>🐶</button>
    </div>
  )
}
