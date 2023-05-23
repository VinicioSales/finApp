import React, { useState } from 'react';
import { View, Text, SafeAreaView, TextInput } from "react-native";
import { styles } from './styles/home_styles';
import DatePicker from 'react-native-datepicker';

const Home = () => {
    //NOTE - Consts
    const [inputValue, setInputValue] = useState('');
    const [inputDescription, setInputDescription] = useState('');
    const [selectedDate, setSelectedDate] = useState('');

    const handleInputValueChange = (text) => {
        setInputValue(text);
    };

    const handleInputDescriptionChange = (text) => {
        setInputDescription(text);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
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
        </SafeAreaView>
    );
};

export default Home;
