import React from "react";
import { TouchableOpacity, Image } from "react-native";
import headerStyles from './screenHeader.styles'

export const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {
    return (
        <TouchableOpacity style={headerStyles.btnConteiner} onPress={handlePress}>
            <Image
                source={iconUrl}
                resizeMode="cover"
                style={headerStyles.btnImg(dimension)}
            />
        </TouchableOpacity>
    )
}