import { useEffect, useState } from "react";
import type { Character } from "../App";
type NavBarprops ={
    setCharacterFilter: React.Dispatch<React.SetStateAction<Character[]>>
    characters: Character[]
}
const NavBar = ({ setCharacterFilter, characters }: NavBarprops) =>{

    const [ buscador, setBuscador ] = useState<string>("")

useEffect(()=>{
    const nuevoFiltro = characters.filter((personaje) =>{
        const { name } = personaje
        if(name.toLowerCase() === buscador.toLowerCase() || name.toLowerCase().startsWith(buscador)){
            return personaje
        }
    })
    setCharacterFilter(nuevoFiltro)
},[buscador])

const buscarNombre = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBuscador(e.target.value);
};


    return(
    <>
        <div className="div_NavBar">
            <a href="#div_characters">Characters</a>
            <input 
                type="text"
                value={buscador}
                onChange={buscarNombre}
                placeholder="Escribe el nombre del personaje"
            />
            <a href="#footer">Redes Sociales</a>
        </div>
    </>
    )
}

export default NavBar 