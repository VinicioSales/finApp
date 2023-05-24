import React from 'react';
import { 
    View,
    Text,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    ScrollView } from "react-native";
import { homeStyles, footerStyles } from '../styles/home_styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
    useInputValue,
    dismissDatePickerModal
} from '../hooks/home_hooks';

const Home = () => {
    const inputValue = useInputValue();
    const inputDescription = useInputValue();
    const menuItems = [
        { label: 'Início', icon: 'home' },
        { label: 'Carteira', icon: 'attach-money' },
        { label: 'Economia', icon: 'trending-up' },
        { label: 'Configurações', icon: 'settings' },
    ];

    return (
        <SafeAreaView style={homeStyles.safeAreaView}>
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
            
            <View style={footerStyles.footerConteiner}>
                <View style={footerStyles.footer}>
                    {menuItems.map((item, index) => (
                        <TouchableOpacity key={index} style={footerStyles.menuItem}>
                            <Icon name={item.icon} size={24} color="#FFF" />
                            <Text style={footerStyles.menuItemLabel}>{item.label}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

        </SafeAreaView>
    );
};

export default Home;
