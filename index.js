import 'react-native-gesture-handler';
import {Navigation} from "./App";
import { registerRootComponent } from 'expo';
Navigation.registerRootComponent('navigation.playground.WelcomeScreen', () => App)

import App from './App';

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            component: {
                name: "navigation.playground.WelcomeScreen"
            }
        }
    });
});

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
