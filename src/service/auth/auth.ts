import request from "../config/config";
import { Request } from "../../interface/auth-interface";


const auth:Request = {
    sign_in: (data) => request.post("/login", data)
}
export default auth
