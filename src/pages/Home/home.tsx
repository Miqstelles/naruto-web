import { Navbar } from "../../components/Header/Navbar";
import narutochibi from '../../assets/narutochibi2.png'
import banner from '../../assets/naruto-chibi.png'

export function Home() {
    return (
        <>
            <div className="bg-[#343434] w-full h-[1000px]">
                <Navbar
                    items={['Characters', 'Clans', 'Akatsuki', 'Tailed Beasts']}
                />
                <img src={banner} alt="" className="w-full h-[155px]" />
                <div className="flex flex-col justify-center items-center mt-[32px]">
                    <img src={narutochibi} alt="Naruto Chibi" className="pb-[20px]" />
                    <h1 className="font-MPLUS1CODE font-light text-white text-[1.5rem] text-center w-[336px]">Explore the world of naruto characters, clans, villages and more.</h1>
                </div>
            </div>
        </>
    )
}