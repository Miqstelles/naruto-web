import { useEffect, useState } from "react";

import { CharacterCard } from "../../components/Character Card/CharacterCard";
import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Header/Navbar";

import kunaileft from '../../assets/kunaileft.png'
import kunairight from '../../assets/kunairight.png'
import { Filters } from "../../components/Filters";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export function Characters() {
    const [page, setPage] = useState(1)
    const pageNumber = useSelector((state: any) => state.filters.pageNumbers)
    const { afiliaton } = useParams<{ afiliaton: any }>()

    useEffect(() => {
        setPage(1)
    }, [pageNumber])

    return (
        <div className="w-full h-full">
            <header>
                <Navbar
                    items={['Characters', 'Clans', 'Akatsuki', 'Tailed Beasts']}
                />
            </header>

            <main className="h-full flex flex-col justify-center items-center mt-[32px] gap-[44px]">
                <article>
                    <p className="font-MPLUS1CODE font-bold text-white text-[2.5rem] text-center">
                        {afiliaton ? afiliaton : 'Characters'}
                    </p>

                    <div className={afiliaton && 'hidden'}><Filters /></div>
                </article>

                <CharacterCard
                    page={page}
                    limit={6}
                    filter={true}
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