import React, { useEffect, useState } from 'react';
import moment from "moment";
import { Button,  Form, Input, Modal,  Table, message } from "antd"
import { getgivenmovie } from '../../Api/movieapi';
import { addshow, deleteshow, getshow } from '../../Api/theaterapi';
import { MdDelete } from "react-icons/md";

const Show = ({showform,setshowform,theater}) => {

const[movie,setmovie]=useState([])
const[show,setshow]=useState([])
const[view,setview]=useState("table")


const getdata=async()=>{
    try{
        const response=await getgivenmovie()

        if(response.success){
            setmovie(response.data)
            message.success(response.message)
        }
        else{
            message.error(response.message)
        }
 
        const showresponse=await getshow({theaterid:theater._id})
        
        if(showresponse.success){
            setshow(showresponse.data)
            message.success(showresponse.message)
        }
        else{
            message.error(showresponse.message)
        }
    }
    catch (err){
        message.error(err.message)
    }
}


const handleadd=async(values)=>{
try{
    const response=await addshow({...values,theater:theater._id})
    if(response.success){
        message.success(response.message)
        getdata()
        setview("table")
    }
    else{
        message.error(response.message)
    }
}
catch (err){
    message.error(err.message)
}
}

const handledelete=async(id)=>{
    try{
        const response=await deleteshow({showid:id})
        if(response.success){
            message.success(response.message)
            getdata()          
        }
        else{
            message.error(response.message)
        }
    }
    catch (err){
        message.error(err.message)
    }
}


const columns = [
    {
        title: "Show Name",
        dataIndex: "name",
    },
    {
        title: "Date",
        dataIndex: "date",
        render: (text, record) => {
         return moment(text).format("MMM Do YYYY");
        },
    },
    {
        title: "Time",
        dataIndex: "time",
    },
    {
        title: "Movie",
        dataIndex: "movie",
        render: (text, record) => {
            return record.movie.title;
        },
    },
    {
        title: "Ticket Price",
        dataIndex: "ticketprice",
    },
    {
        title: "Total Seats",
        dataIndex: "totalseat",
    },
    {
        title: "Available Seats",
        dataIndex: "availableseat",
        render: (text, record) => {
            return record.totalSeats - record?.bookedSeats?.length;
        },
    },
    {
        title: "Action",
        dataIndex: "action",
        render: (text, record) => {
            return (
                <div >
                    {record?.bookedSeats?.length === 0 && (
                        <MdDelete
                            className="icon"
                        onClick={() => {
                          handledelete(record._id);
                        }}
                        ></MdDelete>
                    )}
                </div>
            );
        },
    },
];

useEffect(() => {
    getdata();
  }, []);

    return (
        <div>
           <Modal title=""
            open={showform}
            onCancel={() => setshowform(false)}
            width={1400}
            footer={null}>

            <h1 >
                Theatre : {theater.name}
            </h1>

            <hr />

            <div style={{paddingBottom:"1rem"}}>
                <h1 >
                    {view === "table" ? "Shows" : "Add Show"}
                </h1>
                {(
                    <Button
                        className='button'
                        onClick={() => {
                            setview("form");
                        }}
                    >Add Show</Button>
                )}
            </div>


            {view === 'table' && <Table columns={columns} dataSource={show} />}

<div style={{paddingLeft:"20rem"}}>
            {view === "form" && (
                <Form 
                labelCol={{
                  span: 6,
                }}
                wrapperCol={{
                  span: 16,
                }}
                style={{
                  maxWidth: 700,
                  padding:"2rem",
                  background:"black",
                  
                }}
                onFinish={handleadd}>
                    
                            <Form.Item
                                label={<span style={{color:"white"}}>Show Name</span>}
                                name="name"
                                rules={[{ required: true, message: "Please input show name!" }]}
                            >
                                <Input />
                            </Form.Item>
        
                            <Form.Item
                                label={<span style={{color:"white"}}>Date</span>}
                                name="date"
                                rules={[{ required: true, message: "Please input show date!" }]}
                            >
                                <Input
                                    type="date"
                                    min={new Date()}
                                />
                            </Form.Item>
                  
                            <Form.Item
                                label={<span style={{color:"white"}}>Time</span>}
                                name="time"
                                rules={[{ required: true, message: "Please input show time!" }]}
                            >
                                <Input type="time" />
                            </Form.Item>
                    
                            <Form.Item
                                label={<span style={{color:"white"}}>Movie</span>}
                                name="movie"
                                rules={[{ required: true, message: "Please select movie!" }]}
                            >
                                <select>
                                    <option value="">Select Movie</option>
                                    {movie.map((movie) => (
                    <option value={movie._id}>{movie.title}</option>
                  ))}
                                </select>
                            </Form.Item>
                      
                            <Form.Item
                                label={<span style={{color:"white"}}>Ticket Price</span>}
                                name="ticketprice"
                                rules={[
                                    { required: true, message: "Please input ticket price!" },
                                ]}
                            >
                                <Input type="number" />
                            </Form.Item>
                     
                            <Form.Item
                                label={<span style={{color:"white"}}>Total Seats</span>}
                                name="totalseat"
                                rules={[
                                    { required: true, message: "Please input total seats!" },
                                ]}
                            >
                                <Input type="number" />
                            </Form.Item>
                    
                    

                            <div style={{paddingTop:"2rem", display:"flex",justifyContent:"center",alignItems:"center",gap:"2rem"}}>
<Button
            onClick={() => {
            setview("table")
            }}
          >Cancel</Button>

          
                 <Button type="primary" htmlType="submit" style={{background:"crimson"}}>
                   Save
                 </Button>
                 </div>

                </Form>


            )}
            </div>


        </Modal>


</div>
    );
}

export default Show;
