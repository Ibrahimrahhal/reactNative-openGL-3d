import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, Button } from 'react-native';
import Swiper from 'react-native-swiper'
import BackgroundImage from '../components/BackgroundImage';

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'  
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  backgroundConainer: {
      justifyContent: 'center',
      alignContent: 'center'
  }
})
class GetStartedSwiper extends Component<{navigation:any}, {}> {
    navigate = ()=>{
      this.props.navigation.replace('Login')
    }
    render() {
        return (
        <React.Fragment>
          <Swiper style={styles.wrapper} dotColor={'#ffffff'} activeDotColor={'#e25252'} loop={false} autoplay={true}>
            <View style={styles.slide}>
                <BackgroundImage 
                image={require('../assets/slider1.jpg')} 
                backgroundColor={'rgba(0,0,0,0.7)'}
                style={styles.backgroundConainer}>
                    <Text style={styles.text}>Beautiful</Text>     
                </BackgroundImage>
            </View>
            <View style={styles.slide}>
                <BackgroundImage 
                image={require('../assets/slider2.jpg')} 
                backgroundColor={'rgba(0,0,0,0.7)'}
                style={styles.backgroundConainer}>
                    <Text style={styles.text}>Beautiful</Text>     
                </BackgroundImage>
            </View>
            <View style={styles.slide}>
            <BackgroundImage 
            image={require('../assets/slider3.jpg')} 
            backgroundColor={'rgba(0,0,0,0.7)'}
            style={styles.backgroundConainer}>
            <Button
            onPress={this.navigate}
            title="Get Started"
            color="#e25252"
            accessibilityLabel="Learn more about this purple button"
          />     
            </BackgroundImage>
        </View>
        </Swiper>
        <StatusBar barStyle={"light-content"} backgroundColor={"#000000"}/>
      </React.Fragment>
        );
    }
}

export default GetStartedSwiper;