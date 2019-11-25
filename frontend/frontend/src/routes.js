import {createAppContainer, createSwichNavigator } from 'react-navigation';

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Main from './pages/Main';

const Routes = createAppContainer(
    createSwichNavigator({
        Login,
        Cadastro,
        Main,
    })
);
 export default Routes;