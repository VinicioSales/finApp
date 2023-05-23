import React, { useState } from 'react';
import { View, Text, SafeAreaView, TextInput, Platform, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from "react-native";
import { styles } from './styles/home_styles';
import DateTimePicker from '@react-native-community/datetimepicker';

const Home = () => {
    const [inputValue, setInputValue] = useState('');
    const [inputDescription, setInputDescription] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);

    const handleInputValueChange = (text) => {
        setInputValue(text);
    };

    const handleInputDescriptionChange = (text) => {
        setInputDescription(text);
    };

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

    return (
        <TouchableWithoutFeedback onPress={dismissDatePickerModal} accessible={false}>
            <SafeAreaView>
                <View>
                    <Text>Valor</Text>
                    <TextInput
                    style={styles.input}
                    placeholder="asasssa"
                    onChangeText={handleInputValueChange}
                    value={inputValue}
                    />
                </View>
                <View>
                    <Text>Descrição</Text>
                    <TextInput
                    style={styles.input}
                    placeholder="asasssa"
                    onChangeText={handleInputDescriptionChange}
                    value={inputDescription}
                    />
                </View>
                <View>
                    <Text>Data</Text>
                    <TouchableOpacity onPress={showDatePickerModal}>
                        <Text>{selectedDate.toLocaleDateString()}</Text>
                    </TouchableOpacity>
                    {showDatePicker && (
                        <DateTimePicker
                            value={selectedDate}
                            mode="date"
                            display="default"
                            onChange={handleDateChange}
                        />
                    )}
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
};

export default Home;
