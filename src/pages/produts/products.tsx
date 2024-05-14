import { useEffect, useState } from "react";
import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Tables from "../../components/ui/tabel";
import useProductsStore from "../../store/productstore";
import ProductsAdd from "../../components/modals/products-add/productsadd";

export default function Products() {
  const { getData, data, isLoading,} = useProductsStore();
  const [params] = useState({
    page: 1,
    limit: 10,
  });

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

  const action = [{ action: "show", action1: "baxa" }];
  useEffect(() => {
    getData(params);
  }, [params]);

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
            action={action}
            isLoading={isLoading}
          />

      
    </>
  );
}
