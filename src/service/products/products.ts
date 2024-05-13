import request from "../config/config";
import { Request } from "../../interface/product";



const product: Request = {
    get_products: (params) => request.get("/products", {params}),
    create_product: (data) => request.post("/product", data),
}

export default product;