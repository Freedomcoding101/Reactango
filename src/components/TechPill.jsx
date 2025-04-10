import React from "react";
import "../App.css";

function TechPill({ label }) {
    return (
        <span className="tech-pill">
            {label}
        </span>
    );
}

export default TechPill;