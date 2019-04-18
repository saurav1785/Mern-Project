import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { NavLink } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import './student.css'

export default class SignUp extends Component {

    // handleSubmit(e) ={
    //     e.preventDefault();
    //     this.setState({
    //             name: ''
    //     })
    //     axios.2('localhost:3001/user/signup',this.state).then("navigate").then();
    // }
    render() {
        return (


            <div className='signup'>
                <span className='typography'>SignUp</span>
                <br />
                <br />
                <MuiThemeProvider>
                    <TextField className='text-field'
                        label="Name"
                        variant="outlined"
                    />
                </MuiThemeProvider>
                <br />
                <br />
                <MuiThemeProvider >
                    <TextField className='text-field'
                        label="Chitkara ID"
                        variant="outlined"
                    />
                </MuiThemeProvider>
                <br />
                <br />
                <MuiThemeProvider >
                    <TextField className='text-field'
                        label="Email Address"
                        variant="outlined"
                    />
                </MuiThemeProvider>
                <br />
                <br />
                <MuiThemeProvider >
                    <TextField className='text-field'
                        label="Password"
                        variant="outlined"
                    />
                </MuiThemeProvider>
                <br />
                <br />
                <MuiThemeProvider >
                    <TextField className='text-field'
                        label="Department"
                        variant="outlined"
                    />
                </MuiThemeProvider>
                <br />
                <br />
                <MuiThemeProvider >
                    <TextField className='text-field'
                        label="Contact Number"
                        variant="outlined"
                    />
                </MuiThemeProvider>
                <br />
                <br />

                {/*  add data to database */}
                <NavLink to='/studentlogin'>
                    {/* onSubmit() */}
                    <Button color='primary' variant="outlined" >Submit</Button>
                </NavLink>
            </div>
        )
    }
}