import React, { Component } from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'react-native';
class Button extends Component<{
    onPress?:any,
    label:string
},{}> {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
            <View>
                <Text>
                "ijoijioijioj"
                </Text>
            </View>
            </TouchableOpacity>
        );
    }
}

export default Button;