
import { axioscontrol } from "./apihandle";

export const registeruser= async(payload)=>{
try{
const response= await axioscontrol.post("http://localhost:7777/user/register",payload)
return response.data
}
catch (err){
return err;
}
}

export const loginuser= async(payload)=>{
    try{
const response=await axioscontrol.post("http://localhost:7777/user/login",payload)
return response.data
    }
    catch(err){
        return err;
    }
}

export const crntusers= async()=>{
    try{
const response=await axioscontrol.get("http://localhost:7777/user/getcurrentuser")
return response.data
    }
    catch(err){
        return err;
    }
}