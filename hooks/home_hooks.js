import { useState } from 'react';

export const useInputValue = () => {
    const [value, setValue] = useState('');

    const handleChange = (text) => {
        setValue(text);
    };

    return {
        value,
        onChange: handleChange,
    };
};

