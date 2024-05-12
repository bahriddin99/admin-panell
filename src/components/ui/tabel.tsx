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
  // import WorkersEdit from "../modals/worker-edit/workeredit";
  import { TableProps } from "../../interface/global";
//   import dele from "../../assets/imgs/dele.svg";
//   import edit from "../../assets/imgs/item.svg";
  
  const Tables = ({ headers, body, isLoading, deletIdData}: TableProps) => {

    // const deleteItem = (id: number) => {
    //   console.log(id);
    // };
    // const editItem = (id: number) => {
    //   console.log(id);
    // };
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
                            <Skeleton/>
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
                               <div className="flex items-center gap-2">
                               {/* <button
                                 className=" text-gray-500"
                                 onClick={() => deletIdData(body?.id)}
                               >
                                 <DeleteIcon />
                               </button>
                               <WorkersEdit data={body} /> */}
                             </div>
                            ) : item[header?.value].title ? (
                              item[header?.value].title
                            ) : (
                              item[header?.value]
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
  