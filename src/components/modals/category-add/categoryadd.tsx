import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { toast } from "react-toastify";
import { Field, Formik, Form, ErrorMessage } from "formik";
import { Button, TextField } from "@mui/material";
import CategoryStore from "../../../store/category/categorystore";
import { CategoryValidationSchema } from "../../../utils/validation";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  
  boxShadow: 24,
  p: 4,
};

export default function CategorMadalAdd() {
  const { postData } = CategoryStore();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  type postData = {
    category_name: string;
  };

 

  const initialValues: postData = {
    category_name: "",
  };

  const handelSubmit = async (value: postData) => {
    const status = await postData(value);
    if (status === 201) {
      toast.success("success full");
      handleClose();
    } else {
      toast.error("Error :" + status);
      handleClose();
    }
  };

 

  return (
    <div>
      <button
        onClick={handleOpen}
        className="py-2 px-6 text-white font-semibold bg-[#2389DA] hover:bg-blue-800 active:bg-[#2389DA] duration-200 rounded-lg"
      >
        To add
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
          <Formik
            initialValues={initialValues}
            validationSchema={CategoryValidationSchema}
            onSubmit={handelSubmit}
            
          >
            <Form className=" max-w-[600px]  w-full flex flex-col gap-[12px]">
              <h1 className="text-center mb-2 text-[26px] font-bold">
                Add a category
              </h1>
              <Field
                as={TextField}
                label="category name"
                sx={{ "& input": { color: "#00000", fontSize: "20px" } }}
                type="text"
                name="category_name"
                className=" w-[100%]  mb-3 outline-none py-0"
              />
              <ErrorMessage
                name="category_name"
                component="p"
                className="mb-3 text-red-500 text-center"
              />
              <Button
                sx={{ fontSize: "16px", fontWeight: "600" }}
                variant="contained"
                type="submit"
                className="w-[100%] py-3"
              >
                to add
              </Button>
            </Form>
          </Formik>
        </Box>
      </Modal>
    </div>
  );
}
