import React from 'react';
import { 
    View,
    Text,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback } from "react-native";
import { styles } from '../styles/home_styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
    useInputValue,
    useDate,
    handleInputValueChange,
    handleInputDescriptionChange,
    handleDateChange,
    showDatePickerModal,
    dismissDatePickerModal
} from '../hooks/home_hooks';

const Home = () => {
    const inputValue = useInputValue();
    const inputDescription = useInputValue();
    const dateProps = useDate(new Date());

    return (
        <TouchableWithoutFeedback onPress={dismissDatePickerModal} accessible={false}>
        <SafeAreaView>
            <View style={styles.conteiner_inputs}>
                <View style={styles.conteiner_inputs}>
                <Text>Valor</Text>
                <TextInput
                    style={styles.input}
                    placeholder="asasssa"
                    onChangeText={inputValue.onChange}
                    value={inputValue.value}
                />
                </View>
                <View style={styles.conteiner_inputs}>
                <Text>Descrição</Text>
                <TextInput
                    style={styles.input}
                    placeholder="asasssa"
                    onChangeText={inputDescription.onChange}
                    value={inputDescription.value}
                />
                </View>
                <View style={styles.conteiner_inputs}>
                <Text>Data</Text>
                <TouchableOpacity onPress={showDatePickerModal}>
                    <Text>{dateProps.selectedDate.toLocaleDateString()}</Text>
                </TouchableOpacity>
                {dateProps.showDatePicker && (
                    <DateTimePicker
                    value={dateProps.selectedDate}
                    mode="date"
                    display="default"
                    onChange={dateProps.handleDateChange}
                    />
                )}
                </View>
                <View>
                    <TouchableOpacity style={styles.registrarButton}>
                        <Text style={styles.registrarButtonText}>Registrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
        </TouchableWithoutFeedback>
    );
};

export default Home;
