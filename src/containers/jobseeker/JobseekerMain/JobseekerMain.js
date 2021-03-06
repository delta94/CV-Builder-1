import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Homepage from '../Homepage/Homepage';
import Login from './../../Login/Login';
import SignUp from './../../SignUp/SignUp';
import Menu from '../Menu/Menu';
import SubMenu from '../subMenu/SubMenu'

class JobseekerMain extends React.Component {
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
        return(
            <React.Fragment>
                {/* <Menu /> */}
                {/* <SubMenu /> */}
                <Switch>
                    <Route path='/' exact component={Homepage} />
                    <Route path='/login' exact component={Login} />
                    <Route path='/register' exact component={SignUp} />
                </Switch>
                </React.Fragment>
        )
    }
}

export default JobseekerMain;