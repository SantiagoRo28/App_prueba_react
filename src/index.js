import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Results from './components/results';
import Details from './components/details';
import {StackNavigator} from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/view';
import App from '../App.js';
import {
    Dimensions
} from 'react-navigation';

const {width, height} = Dimensions.get('Window');

import App from './app/index.js'
import Login from './app/login/index.js'

export const fromToptoBottom = (index, position) => {
    const inputRage = [0, index, index + 0,80, index + 1];
    const opacity = position.interpolate({
        inputRage,
        outputRage: [1,1,1,1]
    })
    const translateY = position.interpolate({
        inputRage,
        outputRage: [height, 0, 0, 0]
    })
    
    return {
        opacity,
        transform: [
            {translateY}
        ]
    }
}

const transConfig = () => {
    return {
        screenInterpolator: (sceneProps) => {
            const {position, scene} = sceneProps;
            const {index, route} = scene;
            const params = route.params || {}
            const transition = params. transition || 'default';
            
            return {

                default: CardStackStyleInterpolator.forHorizontal(sceneProps),
                fromToptoBottom: fromToptoBottom(index, position)
            }

        }
    }
}
const Root = (
    <BrowserRouter>
        <Switch>
            <Route path="/results" component={Results} />
            <Route path="/detail/:itemId" component={Details} />
            <Redirect from="/" to="/results" />
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(Root, document, document.getElementById('root'));

let scenes = {
    Home: {
        screen: App
    },
    Login: {
        screen: Login
    }
}

const Stack = StackNavigator(scenes, {

    transitionConfig: transConfig
})

export default Stack;