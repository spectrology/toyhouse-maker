import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { Character } from "../types/character";

type NewCharacter = Partial<Omit<Character, "id">> & { id?: string };

type CharacterContextValue = {
    characters: Character[];
    addCharacter: (character: NewCharacter) => void;
    addCharacters: (characters: NewCharacter[]) => void;
    deleteCharacter: (id: string) => void;
    setCharacter: (id: string, updates: Partial<Character>) => void;
    selectedId: string | null;
    setSelectedId: (id: string | null) => void;
    selectedCharacter: Character | null;
};

const CharacterContext = createContext<CharacterContextValue>({
    characters: [],
    addCharacter: () => {},
    addCharacters: () => {},
    deleteCharacter: () => {},
    setCharacter: () => {},
    selectedId: null,
    setSelectedId: () => {},
    selectedCharacter: null,
});

function generateId() {
    return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 9)}`;
}

export const CharacterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

    useEffect(() => {
        if (selectedId) {
            setSelectedCharacter(characters.find((c) => c.id === selectedId) || null);          
        } else {
            setSelectedCharacter(null);
        }
    }, [selectedId, characters]);

    const ensureId = (c: NewCharacter): Character => ({
        ...(c as Omit<Character, "id">),
        id: c.id ?? generateId(),
    });

    const setCharacter = (id: string, updates: Partial<Character>) => {
        setCharacters((prev) => prev.map((c) => (c.id === id ? { ...c, ...updates } : c)));
    };

    const addCharacter = (character: NewCharacter) => {
        console.log(character)
        setCharacters((prev) => [...prev, ensureId(character)]);
    };

    const addCharacters = (chars: NewCharacter[]) => {
        console.log(chars)
        setCharacters((prev) => {
            const next = [...prev, ...chars.map(ensureId)];
            if (!selectedId && next[0]) setSelectedId(next[0].id);
            return next;
        });
    };

    const deleteCharacter = (id: string) => {
        const currIndex = characters.findIndex((c) => c.id === id)
        const indexToSelect = characters[currIndex - 1] ? currIndex - 1 : (characters[currIndex + 1] ? currIndex + 1 : -1);
        setCharacters((prev) => prev.filter((c) => c.id !== id));
        if (selectedId === id) setSelectedId(indexToSelect >= 0 ? characters[indexToSelect].id : null);
    };

    return (
        <CharacterContext.Provider value={{ characters, addCharacter, addCharacters, deleteCharacter, setCharacter, selectedId, setSelectedId, selectedCharacter }}>
            {children}
        </CharacterContext.Provider>
    );
};

export const useCharacterContext = () => useContext(CharacterContext);

export default CharacterContext;