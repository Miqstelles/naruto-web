import { useParams } from "react-router-dom";

export function CharacterDetails() {
    const { id } = useParams<{ id: string }>()

    return (
        <div>{id}</div>
    )
}