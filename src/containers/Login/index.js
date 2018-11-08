import React, {Component} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import "./style.css";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    clickLogin = () => {
        const { history } = this.props;

        if (this.state.username !== "" && this.state.password !== "") {
            // console.log(this.state.username);
            // return  <Redirect to="/" />
            history.push("/");
        } else {
            alert("Username or password is empty !");
        }
    };

    onInputUsername = (event) => {
        this.setState({username: event.target.value});
    };

    onInputPassword = (event) => {
        this.setState({password: event.target.value});
    };

    render() {
        return (
            <div className="Login">
                <div>
                    <label><b>Username</b></label>
                    <input onChange={this.onInputUsername} value={this.state.username} type="text"
                           placeholder="Enter Username" name="uname" required/>

                    <label><b>Password</b></label>
                    <input onChange={this.onInputPassword} value={this.state.password} type="password"
                           placeholder="Enter Password" name="psw" required/>

                    <button onClick={this.clickLogin} type="submit">Login</button>
                </div>
            </div>
        );
    };
};

export default compose(withRouter, connect(null, null))(Login);
