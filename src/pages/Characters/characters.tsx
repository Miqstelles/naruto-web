import { useEffect, useState } from "react";

import { CharacterCard } from "../../components/Character Card/CharacterCard";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Header/Navbar";

import kunaileft from '../../assets/kunaileft.png'
import kunairight from '../../assets/kunairight.png'
import { Filters } from "../../components/Filters";
import { Clan, Village, fetchClan, fetchVillage } from "../../services/api";


export function Characters() {
    const [page, setPage] = useState(1)
    const [clans, setClans] = useState<Clan[]>([])
    const ranks = ['Genin', 'Chūnin', 'Jōnin', 'Kage']
    const [villages, setVillages] = useState<Village[]>([])

    useEffect(() => {
        fetchClan(`?page=1&limit=58`)
            .then(response => setClans(response.data.clans))
            .catch(error => console.log(error))
    }, [])

    useEffect(() => {
        fetchVillage(`?page=1&limit=39`)
            .then(response => setVillages(response.data.villages))
            .catch(error => console.log(error))
    }, [])

    return (
        <div className="bg-[#343434] w-full h-full">
            <header>
                <Navbar
                    items={['Characters', 'Clans', 'Akatsuki', 'Tailed Beasts']}
                />
            </header>
            <main className="flex flex-col justify-center items-center mt-[32px] gap-[44px]">
                <article>
                    <p className="font-MPLUS1CODE font-bold text-white text-[2.5rem] text-center">Characters</p>
                    <Filters
                        clans={clans}
                        ranks={ranks}
                        villages={villages}
                    />
                </article>

                <CharacterCard
                    page={page}
                    limit={5}
                    pageControler={true}
                />
                <div className="flex items-center gap-[20px] font-MPLUS1CODE font-bold text-[2rem] text-white">
                    <div className={page === 1 ? 'invisible' : ''}><button onClick={() => page === 1 ? setPage(1) : page === 286 ? setPage(284) : setPage(page - 1)}><img src={kunaileft} alt="" height="20px" /></button></div>

                    <p>{page}</p>

                    <div className={page === 286 ? 'invisible' : ''}><button onClick={() => page === 284 ? setPage(286) : setPage(page + 1)}><img src={kunairight} alt="" height="20px" /></button></div>
                </div>
            </main>
            <Footer />
        </div >
    )
}