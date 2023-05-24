import React from 'react';
import { 
    View,
    Text,
    SafeAreaView,
    TextInput,
    TouchableOpacity,} from "react-native";
import { Stack, useRouter } from 'expo-router'
import {
    homeStyles,
    footerStyles,
    headerStyles } from '../styles/home_styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useInputValue } from '../hooks/home_hooks';

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
            <Stack.Screen
                options={{
                    headerStyle: headerStyles.headerConteiner,
                    headerTitle: '',
                    headerShadowVisible: false,
                }}
            />
            <View style={homeStyles.conteiner_inputs}>
                <View style={homeStyles.conteiner_inputs}>
                    <TextInput
                        style={homeStyles.input}
                        placeholder="Valor"
                        onChangeText={inputValue.onChange}
                        value={inputValue.value}
                    />
                </View>
                <View style={homeStyles.conteiner_inputs}>
                    <TextInput
                        style={homeStyles.input}
                        placeholder="Descrição"
                        onChangeText={inputDescription.onChange}
                        value={inputDescription.value}
                    />
                </View>
                <View style={homeStyles.conteiner_inputs}>
                <TextInput
                    style={homeStyles.input}
                    placeholder="Data"
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
