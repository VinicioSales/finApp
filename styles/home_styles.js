import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
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
    }
});