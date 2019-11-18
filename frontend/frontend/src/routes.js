import {createAppContainer, createSwichNavigator } from 'react-navigation'

import Login from './pages/Login';

const Routes = createAppContainer(
    createSwichNavigator({
        Login
    })
);
export default Routes;