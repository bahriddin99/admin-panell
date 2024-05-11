import axios from "axios";

const request = axios.create({baseURL:"http://store.go-clothes.uz:5555/v1"})
request.interceptors.request.use((config)=>{
    const token = ""
    if(token){
   config.headers["Authorization"] = `Bearer ${token}`
    }
   return config
    
})

export default request 