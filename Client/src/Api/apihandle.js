import axios from "axios"


export const axioscontrol=axios.create({
    headers:{
        credential:"includes",
        method:"post",
        "Content-Type":"application/json",
        authorization:`Bearer ${localStorage.getItem("token")}`
    }
}
)