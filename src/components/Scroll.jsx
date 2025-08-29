import React from "react";

const Scroll = (props) => {
    return (
        <div style={{overflowY:'scroll', borderTop:'3px solid #0206125a', height:'500px'}}>
            {props.children}
        </div>      
    )
}

export default Scroll