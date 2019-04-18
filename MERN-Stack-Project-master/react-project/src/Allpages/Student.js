import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { NavLink } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import './student.css'

export default class Student extends Component {
    render() {
        return (
            <div className='student'>
                <span className='typography'>Login</span>
                <br />
                <br />
                <MuiThemeProvider >
                    <TextField className='text-field'
                        label="Email Address"
                        variant="outlined"
                    />
                </MuiThemeProvider>
                <br /> <br /><br />
                <MuiThemeProvider >
                    <TextField className='text-field'
                        label="Password"
                        variant="outlined"
                    />
                </MuiThemeProvider>
                <br />
                {/* conditional rendering */}
                {/* database fetch */}
                <p>Forget Password ?  &nbsp;&nbsp;&nbsp;&nbsp;
                <NavLink to='/notification'>
                        <Button color='primary'>Login</Button>
                    </NavLink>
                </p>
                <p>
                    Don't have an account ?
                    <NavLink to='/signup'>
                        <Button color='primary' onClick={this.handleClickSecond}>
                            SignUp
               </Button>
                    </NavLink>
                </p>
                <p className='policy'>By creating this account, you agree to our Privacy Policy & Cookie Policy.</p>
            </div >
        )
    }
}