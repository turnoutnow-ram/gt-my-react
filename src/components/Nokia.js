import React from "react";
import { Link } from "react-router-dom";

/**
 * Nokia component - displays Nokia-related content
 * @returns {JSX.Element} Nokia component
 */
const Nokia = () => {
    return (
        <div>
            <h1>Nokia</h1>
            <p>Welcome to the Nokia page!</p>
            <p><Link to="/home">← Back to Home</Link></p>
        </div>
    );
};

export default Nokia;
