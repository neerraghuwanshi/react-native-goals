import React from 'react'
import { View, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements'

import Colors from '../../constants/Colors';


function HeaderButton(props) {

    const { onPress, name, color, type, size } = props

    return (
        <TouchableOpacity onPress={onPress}>
            <View 
                style={{
                    ...styles.container,
                    ...props.style,
                }}>
                {props.children ? 
                    props.children :
                    <Icon
                        type={type}
                        size={size ? size : 30}
                        name={name}
                        color={color ? color : Colors.secondary}/>}
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginLeft: 10,
    },
})


export default HeaderButton