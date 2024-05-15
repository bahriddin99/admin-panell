import { useEffect, useState } from "react";
import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import WorkerAdd from "../../components/modals/worker-add/workeradd";
import { worker } from "../../service/worker/worker";
import Workertabel from "../../components/ui/worker-tabel";
import Paginations from "../../components/ui/pagination";

function Workers() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      const respons = await worker.get({page:1, limit:10});
      console.log(respons);
      if (respons.status === 200) {
        setData(respons.data.user);
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
    { title: "First Name", value: "first_name" },
    { title: "Last Name", value: "last_name" },
    { title: "Gender", value: "gender" },
    { title: "Email", value: "email" },
    { title: "Action", value: "action" },
  ];

  return (
    <>
      <div>
        <div className="py-3 flex justify-between items-center">
          <div className="w-96">
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
          <WorkerAdd />
        </div>
        <Workertabel headers={theder} body={data} isLoading={isLoading} />
        <Paginations/>
      </div>
    </>
  );
}

export default Workers;
