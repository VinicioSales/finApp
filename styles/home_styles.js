import { StyleSheet } from 'react-native'

export const homeStyles = StyleSheet.create({
    conteiner_inputs: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    text_inputs: {
        textAlign: 'center',
    },
    input: {
        width: 200,
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
    },
    registrarButton: {
        elevation: 8,
        backgroundColor: '#009688',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    registrarButtonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        alignSelf: 'center',
        textTransform: 'uppercase'
    },
    menuConteiner: {
        paddingHorizontal: 10
    },
    menu: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        margingRight: 10,
        backgroundColor: '#e0e0e0',
        borderRadios: 5
    },
    menuText: {
        fontSize: 16
    },
    footerConteiner: {
        backgroundColor: '#8B10AE',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
    },
    menuItem: {
        alignItems: 'center',
    },
    menuItemLabel: {
        color: '#FFF',
        marginTop: 5
    }
});