import { StyleSheet } from 'react-native'
import Colors from '../Colors'


export const containerStyles = StyleSheet.create({
    normal: {
        margin: 20,
    },
    fullScreen: {
        flex: 1,
    },
    centre: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rowSpaceBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    card: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginTop: 20,
        borderRadius: 10,
        backgroundColor: Colors.primaryPair,
        elevation: 5,
        shadowColor: Colors.secondary,
        shadowRadius: 10,
        shadowOpacity: 0.23,
        shadowOffset: { 
            width: 0, 
            height: 10,
        },
    },
})