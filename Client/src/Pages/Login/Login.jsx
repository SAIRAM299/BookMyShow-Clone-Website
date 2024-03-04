import React, { useEffect } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, message, Form, Input } from 'antd';
import { loginuser } from '../../Api/userapi';
import video from "../../assests/log.mp4"
import {Link , useNavigate } from "react-router-dom";
import "./Login.css"

const Login = () => {
const navigate= useNavigate()

const onFinish = async (values) => {
  try{
 const response=await loginuser(values)
 if(response.success){
   message.success(response.message)
   console.log(response.message);

   localStorage.setItem("token",response.data)
   console.log(response.data,"DSfdsifh");
   navigate("/home")
 }
 else{
   message.error(response.message)
 }
  }
  catch(err){
 console.log(err,"error");
  }
 };

//        useEffect(()=>{
// if(localStorage.getItem("token")){
//   navigate("/home")
// }
//        },[])
    
    
        return (
         
            <div className='full'>
              <video src={video} autoPlay loop muted className='vide'/>
            <div className='loginbody'  style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",background:"black", width:"400px"}}>
                <h1 style={{color:"crimson"}}>WELCOME TO RYOMEN </h1>
               <Form
               name="normal_login"
               className="login-form"
               initialValues={{ remember: true }}
               style={{
                padding:"2rem",
                paddingBottom:"0",
                
               }}
               onFinish={onFinish}
             >
               <Form.Item
                 name="email"
                 rules={[{ required: true, message: 'Please input your Username!' }]}
               >
                 <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
               </Form.Item>
               <Form.Item
                 name="password"
                 rules={[{ required: true, message: 'Please input your Password!' }]}
               >
                 <Input
                   prefix={<LockOutlined className="site-form-item-icon" />}
                   type="password"
                   placeholder="Password"
                 />
               </Form.Item>
         
               <Form.Item>
                 <Button type="primary" htmlType="submit" className="login-form-button" style={{background:"crimson"}}>
                   Log in
                 </Button>
                 <Link to="/register" style={{color:"crimson",lineHeight:3,display:"flex",justifyContent:"center"}}>
              {" "}
              Don't have an account? Register
            </Link>
               </Form.Item>
             </Form>
            </div>
            </div>
        );
}

export default Login;
