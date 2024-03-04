

import React from 'react';
import { Link } from 'react-router-dom';
import "./Land.css";
import video from "../../assests/Land.mp4"

const Land = () => {
    return (
        <div className='landbody'>
            <video src={video} autoPlay loop muted className='vide'/>
            <div className='box'>
            <h1 style={{color:"crimson"}}>WELCOME TO BOOK MY SEAT</h1>
            <div className='butt'>
            <Link to={"/login"}><button className='btn'>LOGIN</button></Link>   
            <Link to={"/register"}><button className='btn'>REGISTER</button></Link> 
            </div>
            </div>
        </div>
    );
}

export default Land;
