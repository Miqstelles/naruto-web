import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Character, fetchCharacter } from "../../services/api";
import { Navbar } from "../../components/Header/Navbar";
import { Footer } from "../../components/Footer";

export function CharacterDetails() {
    const { id } = useParams<{ id: string }>()
    const [character, setCharacter] = useState<Character[]>([])
    const [part, setPart] = useState(true)

    useEffect(() => {
        fetchCharacter(`?page=${Number(id) + 1}&limit=1`)
            .then(response => setCharacter(response.data.characters))
            .catch(error => console.log(error))
    })


    return (
        <div className="bg-[#343434] w-full h-full">
            <Navbar
                items={['Characters', 'Clans', 'Akatsuki', 'Tailed Beasts']}
            />

            <main className="flex justify-center items-center">
                {character && character.map(character => {
                    const characterImg = character.images[character.images.length === 1 ? 0 : part ? 1 : 0]?.replace(/\/revision\/.*$/, '')

                    return (
                        <div key={character.id}>
                            <div className="w-[330px] h-full pb-[20px] bg-[#C9683C] font-MPLUS1CODE mt-[20px] rounded-[5px]">
                                <div className="w-full h-[44px] flex justify-between bg-white rounded-t-[5px] text-black">
                                    <div className={`${!part ? 'bg-[#C9683C] mt-[42px] w-[165px] h-[3px]' : 'w-0 ml-[77px]'} flex justify-center text-[1.25rem]`}>
                                        <button
                                            onClick={() => setPart(false)}
                                            className={!part ? 'text-[#C9683C] mt-[-42px]' : 'text-black mt-1'}
                                        >
                                            Classic
                                        </button>
                                    </div>

                                    <div className={`${part ? 'bg-[#C9683C] mt-[42px] w-[165px] h-[3px]' : 'w-0 mr-[77px]'} flex justify-center text-[1.25rem]`}>
                                        <button
                                            onClick={() => setPart(true)}
                                            className={part ? 'text-[#C9683C] mt-[-42px]' : 'text-black mt-0'}
                                        >
                                            Shippuden
                                        </button>
                                    </div>
                                </div>

                                <img src={characterImg} alt={character.name} title={character.name} className="w-full h-[291px] drop-shadow-lg" />

                                <div className="text-white">
                                    <h1 className="text-center text-[2.5rem] font-bold mt-[17px]">{character.name}</h1>

                                    <div className="grid-cols-2 mx-[10px] text-[24px]">
                                        <div className="flex justify-between">

                                            <p className="text-center mt-[16px]">
                                                <span className="font-bold">Clan: </span>
                                                {character.personal.clan ? character.personal.clan : 'unknown'}
                                            </p>

                                            <p className="text-center mt-[16px]">
                                                <span className="font-bold">Age: </span>
                                                {character.personal.age ? character.personal.age[part ? 'Part II' : 'Part I'] : 'unknown'}
                                            </p>

                                        </div>

                                        <div className="mt-[15px] text-center">
                                            {character.personal.status ?
                                                <p><span className="font-bold">Status: </span> Dead</p>
                                                :
                                                <p><span className="font-bold">Status: </span> Alive</p>
                                            }
                                        </div>
                                    </div>

                                    <div className="h-[66px] bg-[#E29A79] font-bold text-[2.5rem] text-center drop-shadow-lg mt-[28px]">Personal</div>

                                    <div className="ml-[25px] mt-[30px] text-[1.5rem] grid gap-[18px]">
                                        <p>
                                            <span className="font-bold">Sex: </span>
                                            {character.personal.sex ? character.personal.sex : 'unknown'}
                                        </p>

                                        <p>
                                            <span className="font-bold">Height </span>
                                            {character.personal.height ? character.personal.height[part ? 'Part II' : 'Part I'] : 'unknown'}
                                        </p>

                                        <p>
                                            <span className="font-bold">Weight: </span>
                                            {character.personal.weight ? character.personal.weight[part ? 'Part II' : 'Part I'] : 'unknown'}
                                        </p>

                                        <p>
                                            <span className="font-bold">Rank: </span>
                                            {character.rank.ninjaRank[part ? 'Part II' : 'Part I'] ? character.rank.ninjaRank[part ? 'Part II' : 'Part I'] : 'unknown'}
                                        </p>

                                        <p>
                                            <span className="font-bold">Birthdate: </span>
                                            {character.personal.birthdate ? character.personal.birthdate : 'unknown'}
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                })
                }
            </main>
            <Footer />
        </div>
    )
}