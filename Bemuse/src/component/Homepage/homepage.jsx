import React from "react";
import homepagepic from '../public/bemusepic.avif'
import './homepage.css'

const Homepage = () => {
    return (
        <div container className="Home-video">
            <div className="landing-image">
                <img src={homepagepic} alt="" className="homepage-pic" />
            </div>
        </div>
    )
}

export default Homepage