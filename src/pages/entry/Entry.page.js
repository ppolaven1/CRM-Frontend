import React, { useState } from 'react';
import { Jumbotron } from 'react-bootstrap';
import { LoginForm } from '../../components/login/Login.comp';
import { PasswordReset } from '../../components/password-reset/PasswordReset.comp';
import './entry.style.css';

const Entry = () => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[frmLoad, setFrmLoad] = useState('login');

    const handleOnChange = e => {
        const{name, value} = e.target;

        switch(name){
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                break;
        }
    };

    const handleOnSubmit = e => {
        e.preventDefault();
        if(!email || !password){
            return alert("Please fill the required fields!");
        }
        //TODO call api to submit the form
    }

    const handleOnResetSubmit = e => {
        e.preventDefault();
        if(!email){
            return alert("Please fill the required fields!");
        }
        //TODO call api to submit the form
    }


    const formSwitcher = formType =>{
        setFrmLoad(formType);
    }
    return (
        <div className="entry-page bg-info">
            <Jumbotron className="form-box">
                { frmLoad === 'login' &&
                <LoginForm 
                handleOnChange={handleOnChange} 
                email={email} 
                pass={password} 
                handleOnSubmit={handleOnSubmit} 
                formSwitcher={formSwitcher}
                />}

                {frmLoad === 'reset' &&
                <PasswordReset 
                handleOnChange={handleOnChange} 
                email={email} 
                handleOnResetSubmit={handleOnResetSubmit}
                formSwitcher={formSwitcher} 
                />}
            </Jumbotron>
        </div>
    )
}

export default Entry
