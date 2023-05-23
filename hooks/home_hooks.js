import { useState } from 'react';
import { Platform } from 'react-native';

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

    export const useDate = (initialDate) => {
    const [selectedDate, setSelectedDate] = useState(initialDate);
    const [showDatePicker, setShowDatePicker] = useState(false);

    const handleDateChange = (event, date) => {
        if (Platform.OS === 'android') {
        setShowDatePicker(false);
        }

        setSelectedDate(date || selectedDate);
    };

    const showDatePickerModal = () => {
        setShowDatePicker(true);
    };

    const dismissDatePickerModal = () => {
        setShowDatePicker(false);
    };

    return {
        selectedDate,
        showDatePicker,
        handleDateChange,
        showDatePickerModal,
        dismissDatePickerModal,
    };
};
