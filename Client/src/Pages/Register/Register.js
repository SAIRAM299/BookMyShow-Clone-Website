import React from 'react';
import { Button, Form, Input, message } from 'antd';
import { registeruser } from '../../Api/userapi';
import {Link } from 'react-router-dom';
import video from "../../assests/reg.mp4"
import "./Register.css"

const Register = () => {

  const onFinish = async (values) => {
    try{
   const response=await registeruser(values)
   if(response.success){
     message.success(response.message)
     console.log(response.message);
   }
   else{
     message.error(response.message)
   }
    }
    catch(err){
   console.log(err,"error");
    }
   };


    return (
      <div className='regbody'>
<video src={video} autoPlay loop muted className='vide'/>
        <div className='regform' style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",width:"400px",background:"black"}}>
          <h1 style={{color:"crimson"}}>Register To Join Us</h1>
            <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 400,
      padding:"2rem",
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    autoComplete="off"
  >

    <Form.Item
      label={<span style={{color:"white"}}>Username</span>}
      name="name"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label={<span style={{color:"white"}}>Email</span>}
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input/>
    </Form.Item>

    <Form.Item
      label={<span style={{color:"white"}}>Password</span>}
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
   
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit" style={{background:"crimson",display:"flex",justifyContent:"center"}}>
        Submit
      </Button>
    </Form.Item>
    <Link to="/login" style={{color:"crimson",display:"flex",justifyContent:"center"}}>
                {" "}
                Already have an account? Login
              </Link>
  </Form>
        </div>
        </div>
    );
}

export default Register;
