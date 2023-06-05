import { Navbar } from "../../components/Header/Navbar";

export function Home() {
    return (
        <>
            <div className="bg-[#343434] w-full h-[1000px]">
                <Navbar
                    items={['Characters', 'Clans', 'Akatsuki', 'Tailed Beasts']}
                />
            </div>
        </>
    )
}