import { Link } from "react-router-dom";
import { fetchClan, Clan } from "../../services/api";
import { useEffect, useState } from "react";

export function ClanCard() {
    const [clans, setClans] = useState<Clan[]>([])

    useEffect(() => {
        fetchClan(`?page=1&limit=58`)
            .then(response => setClans(response.data.clans))
            .catch(error => console.log(error))
    })

    return (
        <>
            {
                clans.map((clan, index) => {
                    return (
                        <div>
                            <Link to={`/Characters/${clan.name}`} className="w-[180px] h-[50px] flex justify-center items-center bg-[#E29A79] border border-black rounded-[5px]" key={index}>
                                <p className="font-Lexend font-bold text-center text-black">Clan: {clan.name}</p>
                            </Link>
                        </div>
                    )
                })
            }
        </>
    )
}