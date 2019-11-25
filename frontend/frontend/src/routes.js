import {createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Main from './pages/Main';

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        Cadastro,
        Main,
    })
);
 export default Routes;