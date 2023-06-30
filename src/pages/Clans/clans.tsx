import { ClanCard } from "../../components/Clan Card/ClanCard";
import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Header/Navbar";

export function Clans() {
    return (
        <div className="bg-[#343434] w-full h-full">
            <header>
                <Navbar
                    items={['Characters', 'Clans', 'Akatsuki', 'Tailed Beasts']}
                />
            </header>

            <main>
                <ClanCard />
            </main>

            <Footer />
        </div >
    )
}