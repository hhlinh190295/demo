import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const SideBar = () => {
    return (
        <div className="FlexSidaBar">
            <ul>
                <li className="SpaceLine">
                    <Link to="/tab1">Tab 1</Link>
                </li>
                <li className="SpaceLine">
                    <Link to="/tab2">Tab 2</Link>
                </li>
                <li className="SpaceLine">
                    <Link to="/tab3">Tab 3</Link>
                </li>
            </ul>
        </div>
    );
};
export default SideBar;
