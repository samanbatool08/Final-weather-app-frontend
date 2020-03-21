import React from 'react';

const Login = (props) => {
    console.log(props.user)
        return (
            <div className="login-modal">
            <form>
                <input type="text" value={props.username} name="username" placeholder="Username" onChange={props.handleChange}/>
                <input type="text" value={props.password} name="password" placeholder="Password" onChange={props.handleChange}/>
                <input className="button" onClick={props.getuser} type="submit" name="login" value="Log in"/> 
                <input className="button" onClick={props.getUser} type="submit" name="signup" value="Sign up"/>
                {/* <button name="login" onClick={props.getUser}>Log In</button> <button name="signup" onClick={props.getUser}>Sign Up</button> */}
                
            </form>
            </div>
        )
    }

export default Login;