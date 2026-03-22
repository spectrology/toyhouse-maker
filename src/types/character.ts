export type CharacterModel = {
    id: string;
    name: string;
    age?: number;
    ageunit?: "sweeps" | "years" | string;
    height?: number;
    pronouns?: string;
    occupation?: string;
    blood?: string;
    bio?: string;
    createdAt?: string;
    [key: string]: any; // Allow additional fields
};

export class Character implements Character {
    id: string;
    name: string;
    age?: number;
    ageunit?: "sweeps" | "years" | string;
    height?: string;
    pronouns?: string;
    occupation?: string;
    blood?: string;
    bio?: string;
    createdAt?: string;

    constructor(id: string, name?: string, age?: number, ageunit?: "sweeps" | "years" | string, height?: string, pronouns?: string, occupation?: string, blood?: string, bio?: string, createdAt?: string) {
        this.id = id;
        this.name = name || "Unnamed";
        this.age = age;
        this.ageunit = ageunit;
        this.height = height;
        this.pronouns = pronouns;
        this.occupation = occupation;
        this.blood = blood;
        this.bio = bio;
        this.createdAt = createdAt;
    }
}