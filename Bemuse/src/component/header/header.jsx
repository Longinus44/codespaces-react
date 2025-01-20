import React from "react";
import { Search, SearchOutlined } from "@mui/icons-material";
import './header.css'
import { Typography } from "@mui/material";

const Header =()=>{
    return(
        <div className="container" style={{backgroundColor:'crimson'}}>
            <div className="Title" >
            <Typography variant="h5">
    The <br /> BEM
  </Typography>
            </div>
            <div className="navbar-text">
                <h3>visit</h3>
                <h3>Exhibition and Event</h3>
                <h3>Art</h3>
                <h3>Learn with Us</h3>
                <h3>Research</h3>
                <h3>Shop</h3>
            </div>
            <div className="navbar-search">
            <h3><Search /> Search</h3> 

            </div>
        </div>
    )
}

export default Header
