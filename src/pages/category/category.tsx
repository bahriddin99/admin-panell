import { useEffect, useState } from "react";
import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ToastContainer } from "react-toastify";
import Tables from "../../components/ui/tabel";
import CategorMadalAdd from "../../components/modals/category-add/categoryadd";
import { category } from "../../service/category/category";
import Paginations from "../../components/ui/pagination";

function Category() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [change , setChange] = useState("")

  const getData = async () => {
    setLoading(true);
    try {
      const params ={
        page:1,
        limit:10,
        name: change
}
      const respons = await category.get(params);
      console.log(respons);
      if (respons.status === 200) {
        setData(respons?.data?.categories);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);


 

  const theder = [
    { title: "T/R", value: "index" },
    { title: "Category Name", value: "category_name" },
    { title: "Action", value: "action" },
  ];

  return (
    <>
      <ToastContainer />
      <div className="flex items-center justify-between py-3">
        <div className="w-96">
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              width: 400,
              alignItems: "center",
              display: "flex",
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Qidiruv"
              inputProps={{ "aria-label": "serch google maps" }}
              onChange={(e)=>setChange(e.target.value)}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
          
        </div>
        <div className="flex items-center gap-2">
          <CategorMadalAdd />
        </div>
      </div>

      <Tables
        headers={theder}
        body={data}
        isLoading={isLoading}
        
      />
      <Paginations/>
    </>
  );
}

export default Category;
