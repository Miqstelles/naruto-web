import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Character, fetchCharacter } from "../../services/api";

export function CharacterDetails() {
    const { id } = useParams<{ id: string }>()
    const [character, setCharacter] = useState<Character[]>([])

    useEffect(() => {
        fetchCharacter(`?page=${Number(id) + 1}&limit=1`)
            .then(response => setCharacter(response.data.characters))
            .catch(error => console.log(error))
    })

    return (
        <div className="w-full h-full">
            {character && character.map(character => {
                return (
                    <p>{character.name}</p>
                )
            })
            }
        </div>
    )
}