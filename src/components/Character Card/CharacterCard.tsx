import { useEffect, useState } from 'react'
import { fetchCharacter, Character } from '../../services/api';
import Akatsuki from '../../assets/akatsuki.png'
import Tsuchikage from '../../assets/tsuchikage.svg'
import Hokage from '../../assets/hokage.svg'
import Raikage from '../../assets/raikage.svg'
import Kazekage from '../../assets/kazekage.svg'
import Mizukage from '../../assets/mizukage.svg'
import { CharacterInfoImg } from '../CharacterInfoImg';
import { Skeleton } from '../Skeleton';

interface pageProp {
    page: number;
    pageControler: boolean;
    limit: number;
}

export function CharacterCard(props: pageProp) {
    const [characters, setCharacters] = useState<Character[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)

        fetchCharacter(`?page=${props.page}&limit=${props.limit}`)
            .then(response => setCharacters(response.data.characters))
            .catch(error => console.log(error));

        const timer = setTimeout(() => {
            setLoading(false)
        }, 1500);

        setCharacters([])

        return () => clearTimeout(timer);
    }, [props.page]);

    return (
        <div className="grid gap-[20px]">
            {loading &&
                Array.from(Array(5), (_, i) =>
                    <Skeleton key={i} />
                )
            }

            {!loading && characters.map(character => {
                const characterImg = character.images[character.images.length === 1 ? 0 : 1]?.replace(/\/revision\/.*$/, '')

                const appearsLength = character && character.debut && character?.debut?.appearsIn?.length
                const isAkatsuki = character && character.personal && character?.personal?.affiliation?.includes('Akatsuki') ?
                    'text-white bg-gradient-to-r from-[#C93636] via-[#E17A7A] to-[#E13434]'
                    :
                    'text-white bg-gradient-to-r from-[#C9683C] via-[#DB8F6C] to-[#F07942]'
                const bgCard = appearsLength && appearsLength >= 32 ? isAkatsuki : 'bg-white'

                return (
                    <div key={character.id} title={character.name} className={`w-[330px] h-[219px] rounded-[5px] !shadow-2xl ${bgCard} duration-75 hover:scale-105`}>
                        {character.personal?.affiliation?.includes('Akatsuki') ?
                            <img src={Akatsuki} alt="Akatsuki Logo" title="Akatsuki" className="w-[74px] rotate-[-104.85deg] absolute mt-[-38px] ml-[-10px]" />
                            :
                            character.personal.occupation?.includes('Hokage') ? <CharacterInfoImg src={Hokage} alt="Hokage Logo" title="Hokage" />
                                : character.personal.occupation?.includes('Kazekage') ? <CharacterInfoImg src={Kazekage} alt="Kazekage Logo" title="Kazekage" /> :
                                    character.personal.occupation?.includes('Raikage') ? <CharacterInfoImg src={Raikage} alt="Raikage Logo" title="Raikage" /> :
                                        character.personal.occupation?.includes('Tsuchikage') ? <CharacterInfoImg src={Tsuchikage} alt="Tsuchikage Logo" title="Tsuchikage" /> :
                                            character.personal.occupation?.includes('Mizukage') ? <CharacterInfoImg src={Mizukage} alt="Mizukage Logo" title="Mizukage" /> : null
                        }
                        {character && (
                            <>
                                <div
                                    className="w-[330px] h-[132px] rounded-t-[5px] bg-no-repeat bg-center bg-cover"
                                    style={{ backgroundImage: `url(${characterImg})` }}
                                />

                                <div className="grid gap-[20px] mt-[10px] mx-[14px]">
                                    <div className={`flex justify-between`}>
                                        <p className="font-MPLUS1CODE font-bold" title={character.name}>
                                            {character.name.length >= 16 ? character.name.substring(0, 10) + "..." : character.name}
                                        </p>

                                        {character.personal.clan ?
                                            <p className="font-MPLUS1CODE" title={character.personal.clan}>
                                                <span className="font-bold">Clan: </span>
                                                {character?.personal?.clan?.length >= 16 ? character.personal.clan.substring(0, 7) + "..." : character.personal.clan}
                                            </p>
                                            :
                                            <p>Clan: Undefinded</p>
                                        }
                                    </div>

                                    <div className="flex justify-between items-center">
                                        {character.personal.age ?
                                            <p className="font-MPLUS1CODE"><span className="font-bold">Age: </span>{character.personal.age['Part II'] ? character.personal.age['Part II'] : character.personal.age['Part I']}</p>
                                            :
                                            <p>Age: Undefinded</p>
                                        }

                                        {character.personal.status ?
                                            <div className="flex items-center gap-[14px] font-MPLUS1CODE"><div className="w-[16px] h-[16px] bg-[#E91C00] rounded-full"></div>Dead</div>
                                            :
                                            <div className="flex items-center gap-[14px] font-MPLUS1CODE"><div className="w-[16px] h-[16px] bg-[#82E048] rounded-full"></div>Alive</div>
                                        }
                                    </div>
                                </div>
                            </>
                        )
                        }
                    </div>
                )
            })}
        </div>

    )
}