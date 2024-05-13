import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Field, Formik, Form, ErrorMessage } from "formik";
import {
  Button,
  TextField,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";

import { PostData, worker } from "../../../service/worker/worker";
import { validationSchema } from "../../../utils/validation";

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

export default function WorkerAdd() {


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const initialValues: PostData = {
    email: "",
    first_name: "",
    gender: "",
    last_name: "",
    password: "",
  };

  const handleSubmit = async (values: PostData) => {
    const status = await worker.post(values);
    if (status === 201) {
      handleClose();
    } else {
      handleClose();
    }
  };

  return (
    <div>
      <button
        onClick={handleOpen}
        className="py-2 px-6 text-white font-semibold bg-[#2389DA] duration-200 rounded-lg"
      >
        Add a worker
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="max-w-[600px] w-full flex flex-col gap-[12px]">
              <h1 className="text-center mb-2 text-[26px] font-bold">
                Add a worker
              </h1>
              <Field
                as={TextField}
                label="Email"
                name="email"
                className="w-full mb-3"
              />
              <ErrorMessage
                name="email"
                component="p"
                className="mb-3 text-red-500 text-center"
              />

              <Field
                as={TextField}
                label="First Name"
                name="first_name"
                className="w-full mb-3"
              />
              <ErrorMessage
                name="first_name"
                component="p"
                className="mb-3 text-red-500 text-center"
              />

              <Field
                as={RadioGroup}
                aria-label="gender"
                name="gender"
                className="flex items-center mb-4"
              >
                <div className="flex items-center justify-between">
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                </div>
              </Field>
              <ErrorMessage
                name="gender"
                component="p"
                className="mb-3 text-red-500 text-center"
              />

              <Field
                as={TextField}
                label="Last Name"
                name="last_name"
                className="w-full mb-3"
              />
              <ErrorMessage
                name="last_name"
                component="p"
                className="mb-3 text-red-500 text-center"
              />

             
              <Field
                name="password"
                type="string"
                as={TextField}
                label="Password"
                helperText={
                  <ErrorMessage
                    name="password"
                    component="p"
                    className="text-red-500 text-[15px]"
                  />
                }
              />
              <ErrorMessage
                name="password"
                component="p"
                className="mb-3 text-red-500 text-center"
              />

              <Button variant="contained" type="submit">
                add
              </Button>
            </Form>
          </Formik>
        </Box>
      </Modal>
    </div>
  );
}
