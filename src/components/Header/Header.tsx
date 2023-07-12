import { Navbar } from "./Navbar";
import banner from '../../assets/naruto-chibi.png'

export function Header() {
    return (
        <header>
            <Navbar
                items={['Characters', 'Clans', 'Akatsuki', 'Tailed Beasts']}
            />
            <img src={banner} alt="Naruto Characters" className="w-full h-[155px] md1:h-[350px]" />
        </header>
    )
}