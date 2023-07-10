import React from "react";
import Feed from "../../components/feed";
import Navbar from "../../components/navbar";

import './index.css';

const Home = () => {
    return(
        <div id="home-container">
            <Navbar />
            <Feed />
        </div>

    )
}

export default Home;