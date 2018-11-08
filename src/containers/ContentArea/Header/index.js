import React, {Component} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import "./style.css";

class Content extends Component {
    logout = () => {
        const { history } = this.props;
        history.push("/login");
    };
    render() {
        return (
            <header className="Header">
                <h2>Header</h2>
                <button onClick={this.logout} className="Button">Logout</button>
            </header>
        );
    }

}

export default compose(withRouter,  connect(null, null))(Content);
