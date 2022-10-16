import React from "react";
import { useHistory } from "react-router-dom";

export default function Tag (props) {
    const history = useHistory()
    return (
        <div className="tagbox" onClick={() => history.push(props.link)} ><span className="tag-btn">{props.text}</span></div>
    );
}