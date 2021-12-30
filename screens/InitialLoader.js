import React, { useEffect } from 'react'
import { View } from 'react-native'


export default InitialLoader = () => {

    const loadData = () => {
        console.log('Loading Inital Data')
    }

    useEffect(() => {
        loadData()
    }, [])

    return (
        <View></View>
    )
}