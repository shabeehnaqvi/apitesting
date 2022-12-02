import { useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button'


function Login() {
    function myfunction(){}
    return (
        <>

            <h1>Login</h1>
            <label>
                <p>Email</p>
                <input  name="Id" />
            </label>
            <br></br>
            <label>
                <p>Password</p>
                <input  name="name" />
            </label>
            <br></br>
            <br>

            </br>
            <Button variant='primary' type="submit" onClick={myfunction}>Sign in</Button>
           
            
        </>
    );
}

export default Login;
