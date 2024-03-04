import { axioscontrol } from "./apihandle";

export const addtheater= async(payload)=>{
    try{
    const response=await axioscontrol.post("http://localhost:7777/theater/addtheater",payload)
    return response.data
}
catch (err){
return err;
}
}

export const gettheaterbyowner= async(payload)=>{
    try{
    const response=await axioscontrol.post("http://localhost:7777/theater/gettheaterbyowner",payload)
    return response.data
}
catch (err){
return err;
}
}

export const getalltheater= async()=>{
    try{
    const response=await axioscontrol.get("http://localhost:7777/theater/getalltheater")
    return response.data
}
catch (err){
return err;
}
}

export const updatetheater= async(payload)=>{
    try{
    const response=await axioscontrol.post("http://localhost:7777/theater/updatetheater",payload)
    return response.data
}
catch (err){
return err;
}
}

export const deletegiventheater= async (id) => {
    try {
      const response = await axioscontrol.post(
        "http://localhost:7777/theater/deletetheater",id
        
      );
      return response.data;
    } catch (err) {
      return err;
    }
  };

  export const editgiventheater= async (payload) => {
    try {
      const response = await axioscontrol.post(
        "http://localhost:7777/theater/edittheater",payload
        
      );
      return response.data;
    } catch (err) {
      return err;
    }
  };

  
  export const addshow= async(payload)=>{
    try{
    const response=await axioscontrol.post("http://localhost:7777/theater/addshow",payload)
    return response.data
}
catch (err){
return err;
}
}

export const getshow= async(payload)=>{
  try{
  const response=await axioscontrol.post("http://localhost:7777/theater/getshowbytheater",payload)
  return response.data
}
catch (err){
return err;
}
}



export const deleteshow= async (id) => {
  try {
    const response = await axioscontrol.post(
      "http://localhost:7777/theater/deleteshow",id
      
    );
    return response.data;
  } catch (err) {
    return err;
  }
};