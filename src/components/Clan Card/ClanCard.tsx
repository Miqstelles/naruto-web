import { Link } from "react-router-dom";
import { Clan } from "../../services/api";
import clanData from '../../data/clans.json';
import { useEffect, useState } from "react";

export function ClanCard() {
    const [clans, setClans] = useState<Clan[]>([])


    useEffect(() => {
        setClans(clanData)
    })


    return (
        <>
            {clans.map((clan, index) => {
                return (
                    <div key={index}>
                        <Link to={`/Characters/${clan.name}`} className="w-[150px] sm2:w-[180px] h-[50px] flex justify-center items-center bg-[#E29A79] border border-black rounded-[5px]" key={index}>
                            <p className="font-Lexend font-bold text-center text-black">Clan: {clan.name}</p>
                        </Link>
                    </div>
                )
            })
            }
        </>
    )
}