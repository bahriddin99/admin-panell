export interface ModalProps {
    open: boolean,
    handleClose:()=>void
}
export interface createWorkers{
    email: string,
    first_name: string,
    gender: string,
    last_name: string,
    password: string
}

export interface Header {
    title:string,
    value:string
}
export interface BodyItem {
    id: string,
    [key:string]:any
}



export interface TableProps {
    headers: Header[],
    body: BodyItem[],
    isLoading?: boolean,
    // action?: any[]
    // editItem?: any,
    // deletIdData:(id:string)=> any
}