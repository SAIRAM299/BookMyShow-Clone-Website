import React from 'react';
import {Form,message,Modal,Button,Input} from "antd"
import { addmovie, editmovie } from '../../Api/movieapi';

const Movieform = ({
    movieform,
    setmovieform,
    selectmovie,
    setselectmovie,
    formtype,
    getmoviedata,
}) => {

const onFinish=async(value)=>{
    try{
let response=null;
if(formtype==="add"){
    response=await addmovie(value)
}
else{
  response = await editmovie({
    ...value ,
    movieid: selectmovie._id,
  });
}
   
    if (response.success) {
        getmoviedata();
        message.success(response.message);
        setmovieform(false);
      } else {
        message.error(response.message);
      }
}
catch(err){
    message.err(err.message)
}
}


    return (
        <div className='formback'>

<Modal
  title={formtype === "add" ? "ADD MOVIE" : "EDIT MOVIE"}
  style={{textAlign:"center"}}
  open={movieform}
  onCancel={() => {
    setmovieform(false);
    setselectmovie(null);
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
    initialValues={selectmovie}
    onFinish={onFinish}
  >

    <Form.Item
      label={<span style={{color:"white"}}>Movie</span>}
      name="title"
      rules={[
        {
          required: true,
          message: 'Please input your movie',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label={<span style={{color:"white"}}>Description</span>}
      name="description"
      rules={[
        {
          required: true,
          message: 'Please input your description',
        },
      ]}
    >
      <Input/>
    </Form.Item>

    <Form.Item
      label={<span style={{color:"white"}}>Duration</span>}
      name="duration"
      rules={[
        {
          required: true,
          message: 'Please input your description',
        },
      ]}
    >
      <Input/>
    </Form.Item>

    <Form.Item
      label={<span style={{color:"white"}}>Language</span>}
      name="language"
      rules={[
        {
          required: true,
          message: 'Please input your language',
        },
      ]}
    >
       <select name="" id="">
       <option value="">Select Language</option>
       <option value="Telugu">Telugu</option>
       <option value="English">English</option>
       <option value="Hindi">Hindi</option>
       <option value="Tamil">Tamil</option>
     </select>
    </Form.Item>
            
    <Form.Item
      label={<span style={{color:"white"}}>Release Date</span>}
      name="releasedate"
      rules={[
        {
          required: true,
          message: 'Please input your date',
        },
      ]}
    >
      <Input type='date'/>
    </Form.Item>
          
    <Form.Item
      label={<span style={{color:"white"}}>Genre</span>}
      name="genre"
      rules={[
        {
          required: true,
          message: 'Please input your genre',
        },
      ]}
    >
      <select name="" id="">
                <option value="">Select Genre</option>
                <option value="Action">Action</option>
                <option value="Comedy">Comedy</option>
                <option value="Drama">Drama</option>
                <option value="Romance">Romance</option>
              </select>
    </Form.Item>

    <Form.Item
      label={<span style={{color:"white"}}>Poster Url</span>}
      name="poster"
      rules={[
        {
          required: true,
          message: 'Please input your poster',
        },
      ]}
    >
      <Input type='text'/>
    </Form.Item>
           

<Form.Item 
 wrapperCol={{
  span:25,
}}>
<div style={{ paddingTop:"2rem", display:"flex",justifyContent:"center",alignItems:"center",gap:"4rem"}}>
<Button


            onClick={() => {
              setmovieform(false);
              setselectmovie(null);
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

export default Movieform;
