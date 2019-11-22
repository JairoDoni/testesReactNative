import {createAppContainer, createSwichNavigator } from 'react-navigation'

import Login from './pages/Login';
import Login from './pages/Main';

const Routes = createAppContainer(
    createSwichNavigator({
        Login,
        Main
    })
);
export default Routes;