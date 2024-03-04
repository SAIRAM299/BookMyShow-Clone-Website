import { axioscontrol } from "./apihandle";

export const addmovie= async(payload)=>{
    try{
    const response=await axioscontrol.post("http://localhost:7777/movie/addmovie",payload)
    return response.data
}
catch (err){
return err;
}
}



export const getgivenmovie= async()=>{
    try{
    const response=await axioscontrol.get("http://localhost:7777/movie/getgivenmovie")
    return response.data
}
catch (err){
return err;
}
}

export const deletegivenmovie = async (id) => {
    try {
      const response = await axioscontrol.post(
        "http://localhost:7777/movie/deletemovie",id
        
      );
      return response.data;
    } catch (err) {
      return err;
    }
  };

  export const editmovie= async(payload)=>{
    try{
    const response=await axioscontrol.post("http://localhost:7777/movie/editmovie",payload)
    return response.data
}
catch (err){
return err;
}
}