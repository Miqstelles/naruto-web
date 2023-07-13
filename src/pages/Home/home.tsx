import { CharacterCard } from "../../components/Character Card/CharacterCard";
import { Header } from "../../components/Header/Header";

import narutochibi from '../../assets/narutochibi2.png'
import { Footer } from "../../components/Footer/Footer";
import { useEffect, useState } from "react";
import { usePageSize } from "../../functions/pageSize";

export function Home() {
    const [pageWidth, setPageWidth] = useState(0)

    const dynamicWidth = usePageSize()

    useEffect(() => {
        setPageWidth(dynamicWidth)
    })

    return (
        <div className="bg-[#343434] w-full h-full">
            <Header />

            <main className="flex flex-col justify-center items-center mt-[32px]">
                <article className="grid justify-center pb-[34px]">
                    <figure>
                        <img src={narutochibi} alt="Naruto Chibi" className="pb-[20px] mx-auto" />
                    </figure>

                    <p className="font-MPLUS1CODE font-light text-white text-[1.5rem] md1:text-[2.5rem] text-center  w-[290px] sm2:w-[336px] md1:w-[730px]">Explore the world of naruto characters, clans, villages and more.</p>
                </article>

                <section className="grid justify-center w-full h-full pb-[52px] bg-[#C9683C] pt-[52px] ">
                    <div className="mt-[32px]">
                        <CharacterCard
                            page={Math.floor(Math.random() * 250)}
                            limit={pageWidth < 1440 ? 6 : 8}
                            filter={false}
                        />
                    </div>
                </section>
            </main>

            <Footer />
        </div >
    )
}