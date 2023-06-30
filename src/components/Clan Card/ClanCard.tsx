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
        <div>
            {clans.map((clan, index) => {
                return (
                    <p>{clan.name}</p>
                )
            })}
        </div>
    )
}