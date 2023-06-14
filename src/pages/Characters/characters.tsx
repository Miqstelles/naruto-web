import { useEffect, useState } from "react";

import { Navbar } from "../../components/Header/Navbar";
import { Character, fetchCharacter } from "../../services/api";
import { Filters } from "../../components/Filters";

export function Characters() {
    const [characters, setCharacters] = useState<Character[]>([])
    console.log(characters)
    useEffect(() => {
        fetchCharacter(`?page=1&limit=10`)
            .then(response => setCharacters(response.data.characters))
            .catch(error => console.log(error))
    }, []);

    return (
        <div className="bg-[#343434] w-full h-full">
            <header>
                <Navbar
                    items={['Characters', 'Clans', 'Akatsuki', 'Tailed Beasts']}
                />
            </header>
            <main className="flex flex-col justify-center items-center mt-[32px] ">
                <article>
                    <p className="font-MPLUS1CODE font-bold text-white text-[2.5rem] text-center">Characters</p>
                    <Filters />
                </article>
            </main>
        </div >
    )
}