import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
export default class Login extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            uname:'',
            pass:'',
            warn:''
        }
    }
    Change=input=>e=>{
        this.setState({
            [input]:e.target.value
        })
    }
    submit=input=>e=>{
        axios.post('/login',{data:this.state})
        .then(ret=>{
            switch(ret.data.status)
            {
                case 1:this.setState({warn:'Login Successful'});
                        return (<Redirect to='/admin'/>);
                        break;
                case -1:this.setState({warn:'Incorrect Password'});
                        break;
                case -2:this.setState({warn:'Username not found'});
                        break;
                default: break;
            }
        })
    }
    render = () => {
        return(
            <div className="login">
                <h2>Login Form</h2>
                <div className='warning'>{this.state.warn}</div>
                <form name="login-form">
                    <table>
                        <tbody>
                            <tr>
                                <th>Username</th>
                                <td><input type="text" value={this.state.uname} onChange={this.Change("uname")}/></td>
                            </tr>
                            <tr>
                                <th>Password</th>
                                <td><input type="password" value={this.state.pass} onChange={this.Change("pass")}/></td>
                            </tr>   
                            <tr>
                                <th><input type="button" value="LOGIN" onClick={this.submit()}/></th>
                                <td><input type="reset" value="RESET"/></td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        )
    }
}