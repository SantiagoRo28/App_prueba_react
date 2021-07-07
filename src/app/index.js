import React, {Component} from 'react'
import {
    Text,
    View,
    TouchableHighlight,
    StyleSheet
} from 'react-native';
import { fromToptoBottom } from '..';

class Login extends Component {
    render(){
        return (
            <View style={styles.container}>
                <text>Login App</text>
                <TouchableHighlight onPress={() =>
                this.props.navigation.navigate('Login', {
                    transition: 'fromToptoBottom'
                })
                }>
                    <Text>Login with Custom transition</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() =>
                this.props.navigation.navigate('Login')
                }>
                    <text>Login with default transition</text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default Index;