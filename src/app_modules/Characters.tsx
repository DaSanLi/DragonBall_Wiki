import type { Character } from "../App"
type CharacterProps = {
    setCharacters: React.Dispatch<React.SetStateAction<Character[]>>
    characters: Character[]
    characterFilter: Character[]
}

import { useEffect, useState } from "react"

const Characters = ({ characterFilter, characters, setCharacters}: CharacterProps) => {

    const [ apiURL, setApiURL ] = useState("https://dragonball-api.com/api/characters");

    const takeCharacters = async() =>{
        
        try{
        const response = await fetch(apiURL)
        if(!response.ok) return console.log("La respuesta no ha sido exitosa", response.status)
        const json = await response.json()
        if(characters[0]?.id !== undefined){
            setCharacters((prev) => [...prev,...json.items])
        }else{
            setCharacters(json.items)
        } 
        setApiURL(json.links.next)
        }catch(e){
            console.error("Ha ocurrido un error al traer los personajes", e)
        }
    }

    useEffect(()=>{
        takeCharacters()
    },[])
    
    useEffect(() =>{
        if(apiURL !== ""){
            setTimeout(() =>{
                takeCharacters()
            }, 200)
        }
    },[apiURL])

    return(
        <div id="div_characters">{
            characterFilter.length === 0 || characterFilter[0] === undefined || characterFilter === null
            ? 
            (
                characters.length > 0 
                ? characters.map((item) => (
                    <div key={item.id} className="card">
                        <div className="card-inner">
                            {/* anverso */}
                            <div className="card-front">
                                <p className="p_name">{item.name}</p>
                                <img src={item.image} alt={`imagen of ${item.name}`}/>
                            </div>
                            {/* reverso */}
                            <div className="card-back">
                                <div className="div_p">
                                    <p className="p_name">{item.name}</p>
                                    <p className="description_card">{item.description}</p>
                                    <p>{`Gender: ${item.gender}`}</p>
                                    <p>{`Race: ${item.race}`}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
                : <p>Cargando personajes...</p>
            ) 
            : 
            (
                characterFilter.map((item) =>(
                    <div key={item.id} className="card">
                        <div className="card-inner">
                                {/* anverso */}
                            <div className="card-front">
                                <p className="p_name">{item.name}</p>
                                <img src={item.image} alt={`imagen of ${item.name}`} />
                            </div>
                            {/* reverso */}
                            <div className="card-back">
                                <p className="p_name">{item.name}</p>
                                <p className="description_card">{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))
            )
        }</div>
    )
}

export default Characters