import React, { useState, useRef } from 'react';
import { TextField, IconButton, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface SearchBarProps {
    onSearch: (value: string) => void;
    title: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch, title }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const handleButtonClick = () => {
        setIsOpen(true);
        setTimeout(() => inputRef.current?.focus(), 100);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchValue(value);
        onSearch(value);
    };

    const handleBlur = () => {
        if (!searchValue.trim()) {
            setIsOpen(false);
        }
    };

    return (
        <Box display="flex" alignItems="center" width="100%" px={1}>
            {!isOpen &&
                <>
                    <Box sx={{ opacity: 0 }}>fake</Box>
                    <Box flex={1}>
                        {title}
                    </Box>
                </>
            }
            <Box width={isOpen ? "100%" : "auto"} display="flex" justifyContent={isOpen ? "flex-end" : "center"}>
                {isOpen && (
                    <TextField
                        fullWidth
                        inputRef={inputRef}
                        type="text"
                        value={searchValue}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        placeholder="Search..."
                        size="small"
                    />
                )}
                {!isOpen && (
                    <IconButton
                        onClick={handleButtonClick}
                        sx={{ '&:hover': { backgroundColor: 'grey.100' } }}
                    >
                        <SearchIcon />
                    </IconButton>
                )}
            </Box>
        </Box>
    );
};