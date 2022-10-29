import React, { useState } from "react";
import "./InnerPane.css";

function InnerPane() {
    const [group, setGroup] = useState("");
    const updateGroup = (event) => {
        setGroup(event.target.value);
    };
    return (
        <div className="inner-pane">
            <textarea placeholder="...notes" className="notes"></textarea>
            <input
                placeholder="group"
                value={group}
                onChange={updateGroup}
            ></input>
        </div>
    );
}

export default InnerPane;
