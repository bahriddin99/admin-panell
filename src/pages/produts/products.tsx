import { useEffect, useState } from "react";
import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Tables from "../../components/ui/tabel";
import ProductsAdd from "../../components/modals/products-add/productsadd";
import Paginations from "../../components/ui/pagination";
import product from "../../service/products/products";

export default function Products() {
  const [data,setData] = useState([])
  const [isLoading,setLoading] = useState(false)
  const [change , setChange] = useState("")
  

  const getData = async () => {
    setLoading(true)
    try {
        const params ={
                page:1,
                limit:10,
                name: change
        }
        const respons = await product.get_products(params)
        console.log(respons);
        if(respons.status === 200){
            setData(respons?.data?.products)
            setLoading(false)
        }

        
    }catch(error){
        console.log(error);
        
    }


} 

useEffect(()=>{
    getData()
},[change])

  const theder = [
    { title: "T/R", value: "index" },
    { title: "Product Name", value: "product_name" },
    // { title: "Age Min", value: "age_min" },
    // { title: "Age Max", value: "age_max" },
    { title: "Color", value: "color" },
    { title: "Size", value: "size" },
    { title: "Price", value: "cost" },
    { title: "Discount", value: "discount" },
    // { title: "Category", value: "category_id" },
    { title: "Gender", value: "for_gender" },
    { title: "Action", value: "action" },
  ];

 
  return (
    <>
      <div className="py-3 flex justify-between items-center">
        <div className="">
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 400,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Products"
              inputProps={{ "aria-label": "search google maps" }}
              onChange={(e)=>setChange(e.target.value)}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>

        </div>
        <div className="flex items-center gap-2">
        <ProductsAdd/>
        </div>
        </div>


          <Tables
        
// deletIdDataa={deletIdData}
            headers={theder}
            body={data}
            isLoading={isLoading}
          />
          <Paginations/>

      
    </>
  );
}
