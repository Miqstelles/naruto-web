import { Navbar } from "./Navbar";
import banner from '../../assets/naruto-chibi.png'

export function Header() {
    return (
        <header>
            <Navbar
                items={['Characters', 'Clans', 'Akatsuki', 'Tailed Beasts']}
            />
            <img src={banner} alt="" className="w-full h-[155px]" />
        </header>
    )
}