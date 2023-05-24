import { StyleSheet } from 'react-native'

//NOTE - headerStyles
export const headerStyles = StyleSheet.create({
    headerConteiner: {
        backgroundColor: '#202639',
    }
})

//NOTE - homeStyles
export const homeStyles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: '#202639',
    },
    conteiner_inputs: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    text_inputs: {
        color: '#fff'
    },
    input: {
        width: 200,
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        color: '#fff'
    },
    registrarButton: {
        elevation: 8,
        backgroundColor: '#009688',
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 50,
        marginTop: 20
    },
    registrarButtonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        alignSelf: 'center',
        textTransform: 'uppercase'
    },
    
});

//NOTE - footerStyles
export const footerStyles = StyleSheet.create({
    footerConteiner: {
        position: 'absolute',
        bottom: 30,
        left: 0,
        right: 0,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
    },
    menuItem: {
        alignItems: 'center',
    },
    menuItemLabel: {
        color: '#FFF',
        marginTop: 5,
        fontSize: 10
    }
})
