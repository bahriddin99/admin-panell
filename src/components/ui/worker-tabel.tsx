import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import { Skeleton } from "@mui/material";
import { worker } from "../../service/worker/worker";
import Notifation from "../../utils/notifation";
import { ToastContainer } from "react-toastify";
import Edit from "../../assets/edit";
import { TableProps } from "../../interface/global";
import Delet from "../../assets/delet";
import EditModal from "../modals/worker-edit/workeredit";

const Workertabel = ({ headers, body, isLoading }: TableProps) => {
  const deleteItem = (id: string) => {
    try {
      Notifation({ title: "Ma'lumot muvaffaqiyatli o'chdi", type: "success" });
      worker.delete(id);
    } catch (error) {
      console.log(error);
    }
    setTimeout(() => {
      window.location.reload();
    }, 300);
  };

  return (
    <>
      <ToastContainer />
      <Box sx={{ width: "100%" }}>
        <Paper sx={{ width: "100%", mb: 2 }}>
          <TableContainer>
            <Table
              sx={{ minWidth: 750 }}
              size="medium"
              aria-labelledby="tableTitle"
            >
              <TableHead>
                <TableRow>
                  {headers?.map((header, index) => (
                    <TableCell key={index}>
                      <TableSortLabel>{header.title}</TableSortLabel>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {isLoading
                  ? Array.from(new Array(5)).map((_, index) => (
                      <TableRow key={index}>
                        {headers?.map((_, i) => (
                          <TableCell key={i}>
                            <Skeleton />
                          </TableCell>
                        ))}
                      </TableRow>
                    ))
                  : body?.map((item, index) => (
                      <TableRow key={index}>
                        {headers?.map((header, i) => (
                          <TableCell
                            key={i}
                            className={item[header.value]?.class}
                          >
                            {header.value === "action" ? (
                              <div className="flex gap-3 cursor-pointer items-center">
                                <div onClick={() => deleteItem(item.id)}>
                                  <Delet />
                                </div>

                               <EditModal/>
                              </div>
                            ) : header.value === "index" ? (
                              index + 1
                            ) : (
                              item[header.value]
                            )}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </>
  );
};

export default Workertabel;
