import React, { useEffect, useState } from 'react';
import { deletegivenmovie, getgivenmovie } from '../../Api/movieapi';
import {Table, message } from 'antd';
import Movieform from './Movieform';
import { MdDelete } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";
import moment from "moment"

const Movielist = () => {

const [movieinfo,setmovieinfo]=useState([])
const [movieform,setmovieform]=useState(false)
const [selectmovie,setselectmovie]=useState(null)
const [formtype,setformtype]=useState("add")

const getmoviedata= async()=>{
    try{
    const response=await getgivenmovie()
    if(response.success){
        setmovieinfo(response.data)
    }
    else{
        message.error(response.message)
    }
}
catch(error){
    message.error(error.message)
}
}

const handledelete = async (movieid) => {
  try {
    const response = await deletegivenmovie({
      movieid,
    });
    if (response.success) {
      message.success(response.message);
      getmoviedata();
    } else {
      message.error(response.message);
    }
  } catch (error) {
    message.error(error.message);
  }
};
    

    const columns = [
        {
          title: "Poster",
          style:{background:"rgb(224,224,224)"},
          dataIndex: "poster",
          render: (text, record) => {
            return (
              <img
                src={record.poster}
                alt="poster"
                height="100"
                width="200"
                className="br-1"
              />
            );
          },
        },
        {
          title: "Name",
          dataIndex: "title",
        },
    
        {
          title: "Description",
          dataIndex: "description",
        },
        {
          title: "Duration",
          dataIndex: "duration",
        },
        {
          title: "Genre",
          dataIndex: "genre",
        },
        {
          title: "Language",
          dataIndex: "language",
        },
        {
          title: "Release Date",
          dataIndex: "releaseDate",
          render: (text, record) => {
            return  moment(record.releaseDate).format("DD-MM-YYYY");
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
                    handledelete(record._id);
                  }}/>

           <MdEditSquare className='iconss'
            onClick={() => {
                    setselectmovie(record);
                    setformtype("edit");
                    setmovieform(true);
                  }}/>
           </div>      
                
             
            );
          },
        },
      ];
      useEffect(()=>{
        getmoviedata()
      },[])

    return (
        <div >
 
 <div style={{display:"flex",justifyContent:"flex-end",paddingBottom:"1rem"}}>
       
       <button 
       className='button'
       onClick={() => {
        setmovieform(true);
            setformtype("add");
          }}>
Add Movie
       </button>
       </div>
    

      <Table columns={columns} dataSource={movieinfo}  />

{movieform && (
  <Movieform
    movieform={movieform}
    setmovieform={setmovieform}
    selectmovie={selectmovie}
    setselectmovie={setselectmovie}
    formtype={formtype}
     getmoviedata={getmoviedata}
  />
)}
        </div>
    );
}

export default Movielist;
