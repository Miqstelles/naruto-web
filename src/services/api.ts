import axios from 'axios';

export type Character = {
    id: number;
    name: string;
    images: string[];
    debut: {
        manga: string;
        anime: string;
        novel: string;
        movie: string;
        game: string;
        ova: string;
        appearsIn: string;
    };
    family: {
        father: string;
        mother: string;
        son: string;
        daughter: string;
        wife: string;
        godfather: string;
    };
    jutsu: string[];
    natureType: string[];
    personal: {
        birthdate: string;
        sex: string;
        age: {
            "Part I": string;
            "Part II": string;
            "Academy Graduate": string;
        };
        status: string;
        height: {
            "Part I": string;
            "Part II": string;
            "Blank Period": string;
        };
        weight: {
            "Part I": string;
            "Part II": string;
        };
        bloodType: string;
        kekkeiGenkai: string[];
        classification: string[];
        tailedBeast: string;
        occupation: string[];
        affiliation: string[];
        team: string[];
        clan: string;
        titles: string[];
    };
    rank: {
        ninjaRank: {
            "Part I": string;
            "Part II": string;
            Gaiden: string;
        };
        ninjaRegistration: string;
    };
    tools: string[];
    voiceActors: {
        japanese: string[];
        english: string[];
    };
};

export type Clan = {
    id: number;
    name: string;
    characters: Character;
}

export type Village = {
    name: string;
}

export const fetchCharacter = axios.create({
    baseURL: "https://api.narutodb.xyz/character/"
})

export const fetchClan = axios.create({
    baseURL: "https://api.narutodb.xyz/clan/"
})

export const fetchVillage = axios.create({
    baseURL: "https://api.narutodb.xyz/village/"
})

export const fetchTailedBeast = axios.create({
    baseURL: "https://api.narutodb.xyz/tailed-beast/"
})