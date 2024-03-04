import React, { useEffect, useState } from 'react';
import { Button, message, Table } from "antd";
import { getalltheater, updatetheater } from '../../Api/theaterapi';

const Theaterlist = () => {

const[theater,settheater]=useState([])

const gettheater = async()=>{
  try{
    const response=await getalltheater();
    if(response.success){
      message.success(response.message)
      settheater(response.data)
    }
    else{
      message.error(response.message)
    }
  }
  catch(err){
message.error(err.message)
  }
};

const handlestatus=async(theater)=>{
  try{
let response=await updatetheater({
  theaterid:theater._id,
  ...theater,
  isactive:!theater.isactive,
})
if(response.success){
  message.success(response.message)
  gettheater()
}
else{
  message.error(response.message)
}
  }catch(err){
  message.error(err.message)
  }
}


 const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Owner",
      dataIndex: "owner",
      render: (text, record) => {
        return record.owner.name;
      },
    },
    {
      title: "Status",
      dataIndex: "isactive",
      render: (text, record) => {
        if (text) {
          return "Approved";
        } else {
          return "Pending / Blocked";
        }
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => {
        return (
          <div >
            {record.isactive && (
           <Button className='button'
                 onClick={() => handlestatus(record)}>Block</Button>   
            )}

            {!record.isactive && (
           <Button className='button'
           onClick={() => handlestatus(record)}>Active</Button>  
            )}
          </div>
        );
      },
    },
  ];

  useEffect(() => {
     gettheater();
  }, []);

    return (
        <div>
          <Table columns={columns} dataSource={theater}  />
        </div>
    );
}

export default Theaterlist;
