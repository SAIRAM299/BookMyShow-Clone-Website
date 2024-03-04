import { Form,message,Modal,Button,Input } from 'antd';
import React from 'react';
import {  useSelector } from "react-redux";
import { addtheater, editgiventheater } from '../../Api/theaterapi';


const Theaterform = ({
    theaterform,
         settheaterform,
          formtype,
          selecttheater,
      setselecttheater,
          gettheater
}) => {


    const {user}= useSelector((state)=>state.userstore)

    const onFinish=async(values)=>{
        values.owner=user._id;
        try{
            let response=null;
            if(formtype==="add"){
              response=  await addtheater(values)
            }
else{
 response=await editgiventheater({
  ...values,
  theaterid:selecttheater._id
 })
}

if(response.success){
    message.success(response.message)
settheaterform(false);
gettheater()
}
        }
catch(err){
    message.error(err.message)
}
    }



    return (
        <div>
            <Modal
             title={formtype === "add" ? "ADD THEATER" : "EDIT THEATER"}
             style={{textAlign:"center"}}
  open={theaterform}
  onCancel={() => {
    settheaterform(false);
    setselecttheater(null);
  }}
  footer={null}
  width={400}
>

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
      background:"black",
    }}
    initialValues={selecttheater}
    onFinish={onFinish}
  >

    <Form.Item
      label={<span style={{color:"white"}}>Theater</span>}
      name="name"
      rules={[
        {
          required: true,
          message: 'Please input your theater',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label={<span style={{color:"white"}}>Address</span>}
      name="address"
      rules={[
        {
          required: true,
          message: 'Please input your address',
        },
      ]}
    >
      <Input/>
    </Form.Item>

    <Form.Item
      label={<span style={{color:"white"}}>Email</span>}
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your email',
        },
      ]}
    >
      <Input/>
    </Form.Item>

            
    <Form.Item
      label={<span style={{color:"white"}}>Phone</span>}
      name="phone"
      rules={[
        {
          required: true,
          message: 'Please input your phone',
        },
      ]}
    >
      <Input/>
    </Form.Item>

<Form.Item
 wrapperCol={{
  span: 25,
}}
 >
<div style={{paddingTop:"2rem", display:"flex",justifyContent:"center",alignItems:"center",gap:"2rem"}}>
<Button


            onClick={() => {
             setselecttheater(null);
             settheaterform(false)
            }}
          >Cancel</Button>

          
                 <Button type="primary" htmlType="submit" style={{background:"crimson"}}>
                   save
                 </Button>
                 </div>

                 </Form.Item>
                 
      </Form>

      </Modal>
        </div>
    );
}

export default Theaterform;
