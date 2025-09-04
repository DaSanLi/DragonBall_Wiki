import { useState } from 'react'
import "./sass/index.css"
import Inic from './app_modules/Inic'
import NavBar from './app_modules/NavBar'
import Characters from './app_modules/Characters'
import Footer from './app_modules/Footer'

export interface Character {
    id: number;
    name: string;
    image: string;
    description: string;
    gender: string;
    race: string;
}

function App() {

  const [ characters, setCharacters ] = useState<Character[]>([])
  const [ characterFilter, setCharacterFilter ] = useState<Character[]>([])

  return (
    <div className='container'>
      <NavBar setCharacterFilter={setCharacterFilter} characters={characters}/>
      <Inic />
      <Characters characters={characters} setCharacters={setCharacters} characterFilter={characterFilter} />
      <Footer />
    </div>
  )
}

export default App
