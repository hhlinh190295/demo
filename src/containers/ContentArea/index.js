import React from "react";

import "./style.css";
import Header from "./Header";
import Content from "./Content";

function ContentArea() {
    return (
        <main className="FlexContentArea">
            <Header />
            <Content />
        </main>
    );
}
export default ContentArea;
