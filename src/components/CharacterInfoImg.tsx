interface imgProps {
    src: string;
    alt: string;
    title: string;
}

export function CharacterInfoImg(props: imgProps) {
    return (
        <img src={props.src} alt={props.alt} title={props.title} className="w-[74px] rotate-[-18.82deg] absolute mt-[-38px] ml-[-10px]" />
    )
}