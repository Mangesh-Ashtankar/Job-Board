import React from 'react';
import {Switch,Route} from 'react-router-dom';
import signin from './signin';
import userHome from './userdash';
import signup from './signup';

const Main = () => (
    <Switch>
        <Route exact path = '/' component={userHome}/>
        <Route exact path = '/signup' component={signup}/>
    </Switch>
)

export default Main;
