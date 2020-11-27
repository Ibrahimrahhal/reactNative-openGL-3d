import React, { Component } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      width:'100%'
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
    innerContainer: {
        flex: 1
    }
  });

type bgProps = {
    image:any,
    backgroundColor?:string,
    style?:any
}
class BackgroundImage extends Component<bgProps,{}> {

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={this.props.image} style={styles.image}>
                    <View style={{...styles.innerContainer,...(this.props.style || {}), backgroundColor:(this.props.backgroundColor || 'transparent')}}>
                        {this.props.children}
                    </View>
                </ImageBackground>
            </View>
        );
    }

}

export default BackgroundImage;