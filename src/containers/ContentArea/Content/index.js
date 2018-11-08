import React from "react";
import { Switch, Route } from "react-router-dom";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";
import Home from "./Home";
import "./style.css";
import Error from "./Error";

function Content() {
    return (
        <main className="FlexContent">
            <Switch>
                <Route path="/tab1" component={Tab1} />
                <Route path="/tab2" component={Tab2} />
                <Route path="/tab3" component={Tab3} />
                <Route path="*" component={Error} />

            </Switch>
        </main>
    );
}
export default Content;
