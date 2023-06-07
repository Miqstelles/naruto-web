import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

export function Footer() {
    return (
        <footer className="h-[90px] flex justify-center items-center gap-[14px]">
            <p className="font-MPLUS1CODE text-[16p] text-white">by miqstelles</p>
            <a href="https://github.com/miqstelles" target="_blank"><GithubLogo size={32} color="#fff" /></a>
            <a href="https://linkedin.com/in/miquéiastelles" target="_blank"><LinkedinLogo size={32} color="#fff" /></a>
        </footer>
    )
}