import {createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Main from './pages/Main';

const Routes = createAppContainer(
    createSwitchNavigator({
        Cadastro,
        Login,
        Main,
    })
);
 export default Routes;