import React, {useState, useEffect } from 'react';
import { crntusers } from '../Api/userapi';
import {useNavigate} from "react-router-dom"
import {useDispatch,useSelector} from "react-redux"
import { Setuser } from '../redux/Slicecomponent/userslice';
import { message } from 'antd';
import { GiTheater } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { RiLogoutBoxRFill } from "react-icons/ri";
import "./protectorRouter.css"

const ProtectorRouter = ({ children }) => {
const navigate=useNavigate()
const dispatch=useDispatch()
const {user}= useSelector((state)=>state.userstore)

const getprecentuser=async()=>{
    try{
        const response= await crntusers();
        if(response.success){
            dispatch(Setuser(response.data))
        }
        else{
            dispatch(Setuser(null))
            message.error(response.message)
            localStorage.removeItem("token")
            navigate("/login")
        }

    }
catch(e){
    dispatch(Setuser(null))
    console.log(e,"error");
}
}

useEffect(()=>{
    if(localStorage.getItem("token")){
        getprecentuser()
    }
    else(
        navigate("/login")
    )
},[])



    const[nav,setnav]=useState('navy')
    const show=()=>{
        setnav('navy activenavbar')
    }

const unshow=()=>{
        setnav('navy')
    }

    const logout=()=>{
        localStorage.removeItem("token")
    }

    const log=()=>{
        if(user?.isadmin){
            navigate("/admin")
        }
        else{
            navigate("/profile")
        }
    }

    return (
       
           user&&(
            <div >
            <div className="cont">
                <div className="heady">
                    <div className="logo">
                        <a href='' className='logoname'>
                            <h1 className='hw1'>< GiTheater className='ican'/>RYOMEN</h1>
                        </a>
                    </div>
        
                    <div className={nav}>
                        <ul className='navlist'>
                            <li className='navitem'><a href='' className=' navlink'>Home</a></li>
                            <li className='navitem'><a href='' className=' navlink'>Movie</a></li>
                            <li className='navitem'><a href='' className=' navlink'>Screen</a></li>
                            <li className='navitem'><a href='' className=' navlink'>Payments</a></li>
                            <li className='navitem'><a href='' className=' navlink'>About</a></li>
                            <li className='navitem'><a href='' className=' navlink'>Contact</a></li>

                            <li className='navitem'><a href='' className=' navlink'><button className='btns' onClick={log} >User:
                                {user.name}
                                
                                 </button></a></li>

                                 <li className='navitem'><a href='' className=' navlink'><button className='btns ' onClick={logout}>Logout
                                <RiLogoutBoxRFill className='icon'/>
                                 </button></a></li>

                        </ul>
                        <div className='end' onClick={unshow}>
                            < AiFillCloseCircle className='ican'/>
                        </div>
                    </div>
                    <div className='toggy' onClick={show}>
                    <TbGridDots className='ican'/>
                    </div>
                </div>
            </div>

            <div  className="content mt-1 p-1">
                {children}
            </div>
        </div>
           )
        
    );
}

export default ProtectorRouter;
