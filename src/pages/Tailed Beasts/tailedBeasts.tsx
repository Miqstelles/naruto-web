import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Header/Navbar";
import { CharacterCard } from "../../components/Character Card/CharacterCard";
import { Filters } from "../../components/Filters";

export function TailedBeasts() {
    return (
        <div className="bg-[#343434] w-full h-full">
            <header>
                <Navbar
                    items={['Characters', 'Clans', 'Akatsuki', 'Tailed Beasts']}
                />
            </header>

            <div className="hidden"><Filters /></div>

            <p className="font-MPLUS1CODE font-bold text-white text-[2.5rem] text-center mt-[32px]">Tailed Beasts</p>
            <main className="flex justify-center mt-[32px]">
                <CharacterCard
                    filter={true}
                    page={1}
                    limit={10}
                />
            </main>

            <Footer />
        </div >
    )
}