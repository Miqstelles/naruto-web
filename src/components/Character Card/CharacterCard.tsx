import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";

import { Character } from '../../services/api'
import charactersData from '../../data/characters.json'
import { CharacterInfoImg } from '../CharacterInfoImg'
import { SkeletonCharacterCard } from '../Skeletons/SkeletonCharacterCard'

import Akatsuki from '../../assets/akatsuki.png'
import Tsuchikage from '../../assets/tsuchikage.svg'
import Hokage from '../../assets/hokage.svg'
import Raikage from '../../assets/raikage.svg'
import Kazekage from '../../assets/kazekage.svg'
import Mizukage from '../../assets/mizukage.svg'

import { setPageNumber } from '../../redux/action'

interface pageProp {
    page: number
    limit: number
    filter: boolean
}

export function CharacterCard(props: pageProp) {
    const [characters, setCharacters] = useState<Character[]>([])
    const [loading, setLoading] = useState(false)
    const part = true

    const filteredItems = useSelector((state: any) => state.filters.filteredItems)

    useEffect(() => {
        setLoading(true)
        setCharacters(charactersData)
    }, [filteredItems])

    const [itemsData, setItemsData] = useState<Character[]>([])

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 600)
    }, [itemsData])

    const currentPage = props.page
    const itemsPerPage = props.limit

    const lastIndex = currentPage * itemsPerPage
    const firstIndex = lastIndex - itemsPerPage

    const dispatch = useDispatch()
    const filter = props.filter

    useEffect(() => {
        let filtered = characters

        if (filter === true && filteredItems.length > 0) {
            filtered = characters.filter((character) => {
                const matchesClan = filteredItems.includes(character.personal?.clan)
                const matchesAfiliation = filteredItems.includes(character.personal?.affiliation)
                const matchesAfilliation = filteredItems.includes(character.personal?.affiliation?.[1])
                const matchesRankPartOne = filteredItems.includes(character.rank?.ninjaRank?.['Part I'])
                const matchesRankPartTwo = filteredItems.includes(character.rank?.ninjaRank?.['Part II'])
                const matchesRankGaiden = filteredItems.includes(character.rank?.ninjaRank?.['Gaiden'])
                const matchesKages = filteredItems.includes(character.personal?.occupation)
                const matchesNaruto = filteredItems.includes(character.personal?.occupation?.[0])
                const matchesHashirama = filteredItems.includes(character.personal?.occupation?.[1])
                const matchesTailedBeasts = filteredItems.includes(character.id)
                return matchesClan || matchesAfiliation || matchesAfilliation || matchesRankPartOne || matchesRankPartTwo || matchesRankGaiden || matchesKages || matchesNaruto || matchesHashirama || matchesTailedBeasts
            })
        }
        setItemsData(filtered)
    }, [filteredItems, characters])

    const characterName = useSelector((state: any) => state.filters.characterName)

    useEffect(() => {
        setItemsData(characters.filter(item => item.name.toLowerCase().includes(characterName)))
    }, [characterName])

    useEffect(() => {
        dispatch(setPageNumber(Math.ceil(itemsData.length / itemsPerPage)))
    }, [itemsData, filteredItems])

    const currentItems = itemsData.slice(firstIndex, lastIndex)

    return (
        <div className="grid md1:grid-cols-2 md2:grid-cols-3 lg2:grid-cols-3 gap-[30px] md3:gap-[40px]">
            {loading &&
                Array.from(Array(6), (_, i) =>
                    <SkeletonCharacterCard key={i} />
                )
            }

            {charactersData && !loading && currentItems.map(character => {
                const characterImg = character.images[character.images.length === 1 ? 0 : 1]?.replace(/\/revision\/.*$/, '')

                const appearsLength = character && character.debut && character?.debut?.appearsIn?.length

                const isAkatsuki = character && character.personal && character?.personal?.affiliation?.includes('Akatsuki')
                    ? 'text-white bg-gradient-to-r from-[#C93636] via-[#E17A7A] to-[#E13434]'
                    : 'text-white bg-gradient-to-r from-[#C9683C] via-[#DB8F6C] to-[#F07942]'

                const bgCard = appearsLength && appearsLength >= 32 ? isAkatsuki : 'bg-white'

                return (
                    <div key={character.id} title={character.name} className={`w-[290px] h-[219px] sm2:w-[330px] rounded-[5px] ${bgCard} duration-75 hover:scale-105`}>
                        <Link to={`/Character/${character.id}`}>
                            {character.personal?.affiliation?.includes('Akatsuki') && <img src={Akatsuki} alt="Akatsuki Logo" title="Akatsuki" className="w-[74px] rotate-[-104.85deg] absolute mt-[-38px] ml-[-10px]" />}
                            {character.personal.occupation?.includes('Hokage') && <CharacterInfoImg src={Hokage} alt="Hokage Logo" title="Hokage" />}
                            {character.personal.occupation?.includes('Kazekage') && <CharacterInfoImg src={Kazekage} alt="Kazekage Logo" title="Kazekage" />}
                            {character.personal.occupation?.includes('Raikage') && <CharacterInfoImg src={Raikage} alt="Raikage Logo" title="Raikage" />}
                            {character.personal.occupation?.includes('Tsuchikage') && <CharacterInfoImg src={Tsuchikage} alt="Tsuchikage Logo" title="Tsuchikage" />}
                            {character.personal.occupation?.includes('Mizukage') && <CharacterInfoImg src={Mizukage} alt="Mizukage Logo" title="Mizukage" />}

                            {character && (
                                <>
                                    <div
                                        className="w-[290px] sm2:w-[330px] h-[132px] rounded-t-[5px] bg-no-repeat bg-center bg-cover"
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
                                                    {character?.personal?.clan.length >= 16 ? character.personal.clan.substring(0, 7) + "..." : character.personal.clan}
                                                </p>
                                                :
                                                <p>Clan: unknown</p>
                                            }
                                        </div>

                                        <div className="flex justify-between items-center">
                                            {character.personal.age ?
                                                <p className="font-MPLUS1CODE"><span className="font-bold">Age: </span>
                                                    {character.personal.age
                                                        ? character.personal.age[part ? 'Part II' : 'Part I']
                                                            ? character.personal.age[part ? 'Part II' : 'Part I']
                                                            : 'unknown'
                                                        : 'unknown'
                                                    }
                                                </p>
                                                :
                                                <p>Age: unknown</p>
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
                        </Link>
                    </div>
                )
            })}
        </div>

    )
}