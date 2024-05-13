import { useEffect, useState } from "react";
import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ToastContainer } from "react-toastify";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import Tables from "../../components/ui/tabel";
import CategorMadalAdd from "../../components/modals/category-add/categoryadd";
import { category } from "../../service/category/category";

function Category() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      const respons = await category.get({ page: 1, limit: 10 });
      console.log(respons);
      if (respons.status === 200) {
        setData(respons.data.categories);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const theder = [
    { title: "T/R", value: "index" },
    { title: "Category Name", value: "category_name" },
    { title: "Category Id", value:"category_id" },
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
      <div className="flex items-center justify-end gap-3">
        <button className="py-1 px-1 border rounded-lg hover:shadow-md active:shadow-sm  duration-200 cursor-pointer ">
          <ArrowLeftIcon />
        </button>
        <span className="text-[20px] text-center">5</span>
        <button className="py-1 px-1 border rounded-lg hover:shadow-md active:shadow-sm  duration-200 cursor-pointer ">
          <ArrowRightIcon />
        </button>
      </div>
    </>
  );
}

export default Category;
