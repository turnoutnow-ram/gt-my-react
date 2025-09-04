import React from "react";
import { Link } from "react-router-dom";

/**
 * Home component - displays the main landing page
 * @returns {JSX.Element} Home page component
 */
const Home = () => {
    return (
        <div>
            <h1>Welcome to My React App</h1>
            <p>This is the home page. Navigate to <Link to="/nokia">/nokia</Link> to see the Nokia component.</p>
        </div>
    );
};

export default Home;
