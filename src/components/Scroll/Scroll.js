import React from "react";

const Scroll = (props) => {
    return (
        <div style={
            {
                border: "3px solid gold",
                borderRadius: "10px",
                overflowY: "scroll",
                height: "63vh"
            }
        }>
            {props.children}
        </div>
    );
};

export default Scroll;