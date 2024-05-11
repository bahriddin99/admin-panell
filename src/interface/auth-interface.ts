
export interface SignIn {
    email: string;
    password: string;
    
  }



export interface Request {
    sign_in:(data:SignIn)=>any
}