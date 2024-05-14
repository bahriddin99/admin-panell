import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { TextField } from "@mui/material";
import { WorkersvalidationSchema } from "../../../utils/validation";
import { createWorkers } from "../../../interface/global";
import Edit from "../../../assets/edit";

import { worker } from "../../../service/worker/worker";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 3,
  p: 4,
};

export default function WorkerEdit() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const initialValues: createWorkers = {
    email: "",
    first_name: "",
    gender: "",
    last_name: "",
    password: "",
  };
  const handleSubmit = async (values: createWorkers) => {
    try {
      console.log(values);
      const res = await worker.post(values);
      console.log(res);
      handleClose();
      setTimeout(() => {
        window.location.reload();
      }, 300);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div onClick={handleOpen} >
        <Edit />
      </div>

      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="keep-mounted-modal-title"
            className="text-center"
            variant="h5"
            component="h5"
          >
            Worker Create
          </Typography>
          <Formik
            initialValues={initialValues}
            validationSchema={WorkersvalidationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <Field
                name="email"
                type="email"
                as={TextField}
                fullWidth
                label="Email"
                margin="normal"
                variant="outlined"
                helperText={
                  <ErrorMessage
                    name="email"
                    component="p"
                    className="text-red-500 text-[15px]"
                  />
                }
              />
              <Field
                name="first_name"
                type="string"
                as={TextField}
                fullWidth
                label="FirstName"
                margin="normal"
                variant="outlined"
                helperText={
                  <ErrorMessage
                    name="first_name"
                    component="p"
                    className="text-red-500 text-[15px]"
                  />
                }
              />
              <Field
                name="last_name"
                type="string"
                as={TextField}
                label="LastName"
                fullWidth
                margin="normal"
                variant="outlined"
                helperText={
                  <ErrorMessage
                    name="last_name"
                    component="p"
                    className="text-red-500 text-[15px]"
                  />
                }
              />
              <Field
                name="gender"
                type="string"
                as={TextField}
                label="Gender"
                fullWidth
                margin="normal"
                variant="outlined"
                helperText={
                  <ErrorMessage
                    name="gender"
                    component="p"
                    className="text-red-500 text-[15px]"
                  />
                }
              />

              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                Submit
              </Button>
            </Form>
          </Formik>
        </Box>
      </Modal>
    </div>
  );
}
