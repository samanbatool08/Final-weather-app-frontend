import React from 'react';

class Login extends React.Component {

    state = {
        username: "",
        password: "",
        signupToggle: false,
        noUserFoundToggle: false
    }

    componentDidMount() {
        this.props.getUser("") // logs out user
    }

    handleChange = (e) => {
        const attribute = e.target.name
        const value = e.target.value
        this.setState(() => {
            return {[attribute]: value}
        })}

    handleFormClick = (e) => {
        e.preventDefault()
        if(e.target.name === 'login') {
            console.log('hitting')
            // fetch('https://weatheryoushouldgo-app-api.herokuapp.com/login', {
                fetch('http://localhost:3000/login', {

                method: "POST",
                headers: {'content-type': 'application/json',
                        accepts: 'application/json'},
                body: JSON.stringify({
                    user: {username: this.state.username,
                    password: this.state.password}
                })})
            .then((response) => {
                console.log(response, 'login')
                return response.json()})
            .then((user) => {
                if (user.errors) {
                    alert(user.errors)
                } else {
                    this.props.getUser(user)
                    this.props.setUserId(user.id)
                    this.props.fillingUpUserActivities(user.activities)
                    this.props.history.push("/activities")
                }})} else if (e.target.name === "signup") {
            // fetch('https://weatheryoushouldgo-app-api.herokuapp.com/signup',{
                fetch('http://localhost:3000/signup',{

            method: "POST",
            headers: {'content-type': 'application/json',
                    accepts: 'application/json'},
            body: JSON.stringify({
                user: {username: this.state.username,
                password: this.state.password}
            })})
            .then(resp => resp.json())
            .then(newUser => {
                console.log(newUser)
                if (newUser.errors) {
                    alert(newUser.errors)
                } else {
                    this.props.getUser(newUser)
                    this.props.setUserId(newUser.id)
                    this.props.history.push("/activities")
            }})}}

    render() {
        return (
            <div className="login-modal">
                <div className="login-form">
                <h1 className="title-container__title">Login to see Activities</h1>
            <form>
                <input name="username" value={this.state.username} type="text" onChange={this.handleChange} placeholder="Username"></input>
                <input name="password" value={this.state.password} type="password" onChange={this.handleChange} placeholder="Password"></input> 
                <input className="button" onClick={this.handleFormClick} type="submit" name="login" value="Log in" /> 
                <input className="button" onClick={this.handleFormClick} type="submit" name="signup" value="Sign up"/>
            </form>
            <br />
            {this.state.noUserFoundToggle && <p className="error">Username and/or password incorrect</p>}
            <br />
            </div>
            </div>
        )}}

export default Login;