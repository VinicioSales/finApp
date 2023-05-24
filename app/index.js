import React from 'react';
import { 
    View,
    Text,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    ScrollView } from "react-native";
import { homeStyles as homeStyles } from '../styles/home_styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
    useInputValue,
    dismissDatePickerModal
} from '../hooks/home_hooks';

const Home = () => {
    const inputValue = useInputValue();
    const inputDescription = useInputValue();
    const menu = ['Home', 'Notes', 'Wallet']
    const menuItems = [
        { label: 'Início', icon: 'home' },
        { label: 'Pagamentos', icon: 'attach-money' },
        { label: 'Transferências', icon: 'compare-arrows' },
        { label: 'Investimentos', icon: 'trending-up' },
        { label: 'Configurações', icon: 'settings' },
    ];

    return (
        <SafeAreaView>
            <View style={homeStyles.conteiner_inputs}>
                <View style={homeStyles.conteiner_inputs}>
                <Text>Valor</Text>
                <TextInput
                    style={homeStyles.input}
                    placeholder="asasssa"
                    onChangeText={inputValue.onChange}
                    value={inputValue.value}
                />
                </View>
                <View style={homeStyles.conteiner_inputs}>
                <Text>Descrição</Text>
                <TextInput
                    style={homeStyles.input}
                    placeholder="asasssa"
                    onChangeText={inputDescription.onChange}
                    value={inputDescription.value}
                />
                </View>
                <View style={homeStyles.conteiner_inputs}>
                <Text>Data</Text>
                <TextInput
                    style={homeStyles.input}
                    placeholder="asasssa"
                    onChangeText={inputDescription.onChange}
                    value={inputDescription.value}
                />
                </View>
                <TouchableOpacity style={homeStyles.registrarButton}>
                    <Text style={homeStyles.registrarButtonText}>Registrar</Text>
                </TouchableOpacity>
            </View>
            
            <View style={homeStyles.footerConteiner}>
                {menuItems.map((item, index) => (
                    <TouchableOpacity key={index} style={homeStyles.menuItem}>
                    <Icon name={item.icon} size={24} color="#FFF" />
                    <Text style={homeStyles.menuItemLabel}>{item.label}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </SafeAreaView>
    );
};

export default Home;
