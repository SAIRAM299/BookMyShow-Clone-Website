import React, { useEffect, useState } from 'react';
import { message, Table } from "antd";
import { useNavigate } from "react-router-dom";
import Theaterform from './Theaterform';
import { MdDelete } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";
import {useSelector } from "react-redux";
import { deletegiventheater, gettheaterbyowner } from '../../Api/theaterapi';
import Show from './Show';

const Applytheater = () => {

  const {user}= useSelector((state)=>state.userstore)
  const [theaterinfo,settheaterinfo]=useState([])
const [theaterform,settheaterform]=useState(false)
const [selecttheater,setselecttheater]=useState(null)
const [formtype,setformtype]=useState("add")
const [showform,setshowform]=useState(false)

const gettheater=async()=>{
  try{
const response= await gettheaterbyowner({owner:user._id})
if(response.success){
  settheaterinfo(response.data)
}
else{
  message.error(response.message)
}

  }
  catch(err){
message.error(err.message)
  }
}

const deletetheater=async(id)=>{
  try{
const response= await deletegiventheater({theaterid:id})
if(response.success){
  settheaterinfo(response.data)
  gettheater()
}
else{
  message.error(response.message)
}

  }
  catch(err){
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
              <div>
                < MdDelete className='iconss'
                  onClick={() => {
                    deletetheater(record._id);
                  }}/>

           <MdEditSquare className='iconss'
            onClick={() => {
                    setselecttheater(record);
                    setformtype("edit");
                    settheaterform(true);
                  }}/>

              </div>
            );
          },
        },
        {
          title: "Show",
          dataIndex: "show",
          render: (text, record) => {
            return (
              <div>
                {record.isactive && (
                  <button
                    className="button"
                    onClick={() => {
                      setselecttheater(record);
                         setshowform(true);
                    }}
                  >
                    Shows
                  </button>
                )}
              </div>
            );
          },
        },
      ];

      useEffect(()=>{
        gettheater()
      },[])

    return (
        <div>

             <div>
             <div style={{display:"flex",justifyContent:"flex-end",paddingBottom:"1rem"}}>
       
       <button 
       className='button'
       onClick={() => {
        settheaterform(true);
            setformtype("add");
          }}>
Add theater
       </button>
       </div>

      <Table columns={columns} dataSource={theaterinfo}/>

      {theaterform&& (
        <Theaterform
        theaterform={theaterform}
         settheaterform={settheaterform}
          formtype={formtype}
          setformtype={setformtype}
          selecttheater={selecttheater}
      setselecttheater={setselecttheater}
          gettheater={gettheater}
        />
      )}

      {showform && (
        <Show
          showform={showform}
          setshowform={setshowform}
          theater={selecttheater}
        />
      )}
    </div>
        </div>
    );
}

export default Applytheater;

