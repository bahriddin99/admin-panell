import {
  Box,
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@mui/material";
import { TableProps } from "../../interface/global";
import { worker } from "../../service/worker/worker";
import Notifation from "../../utils/notifation";
// import delet from "../../assets/delet.svg";
import Delet from "../../assets/delet";

import WorkerEdit from "../modals/worker-edit/workeredit";

const Tables = ({ headers, body, isLoading, editItem }: TableProps) => {
  const deleteItem = (id: string) => {
    try {
      Notifation({ title: "Ma'lumot muvaffaqiyatli o'chdi", type: "success" });
      worker.delete(id);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-label="tableTitle" size="medium">
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

                              <WorkerEdit />
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
  );
};

export default Tables;
