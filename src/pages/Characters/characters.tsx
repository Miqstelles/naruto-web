import { useEffect, useState } from "react";

import { CharacterCard } from "../../components/Character Card/CharacterCard";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Header/Navbar";

import kunaileft from '../../assets/kunaileft.png'
import kunairight from '../../assets/kunairight.png'
import { Filters } from "../../components/Filters";
import { useSelector } from "react-redux";


export function Characters() {
    const [page, setPage] = useState(1)
    const pageNumber = useSelector((state: any) => state.filters.pageNumbers)

    useEffect(() => {
        setPage(1)
    }, [pageNumber])


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

                    />
                </article>

                <CharacterCard
                    page={page}
                    limit={5}
                />

                <div className="flex items-center gap-[20px] font-MPLUS1CODE font-bold text-[2rem] text-white">
                    <div className={page === 1 ? 'invisible' : ''}><button onClick={() => page === 1 ? setPage(1) : page === 286 ? setPage(284) : setPage(page - 1)}><img src={kunaileft} alt="" height="20px" /></button></div>

                    <p>{page}</p>

                    <div className={page >= pageNumber ? 'invisible' : ''}><button onClick={() => page >= pageNumber ? setPage(1) : setPage(page + 1)}><img src={kunairight} alt="" height="20px" /></button></div>
                </div>
            </main>
            <Footer />
        </div >
    )
}