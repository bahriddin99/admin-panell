import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Field, Formik, Form,} from "formik";
import {
  Button,
  TextField,
 
} from "@mui/material";

import { createProduct } from "../../../interface/product";
import { validationSchema } from "../../../utils/validation";
import useProductsStore from "../../../store/productstore";

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

export default function ProductsAdd() {
  const [open, setOpen] = React.useState(false);
  const { createProduct, getData } = useProductsStore();
  const [params] = React.useState({
    page: 1,
    limit: 10,
  });
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const initialValues: createProduct = {
    product_name: "",
    color: "",
    size: "",
    made_in: "",
    category_id: "",
    cost: "",
    discount: "",
    count: "",
    description: "",
    age_max: "",
    age_min: "",
    for_gender: "",
  };

  const handleSubmit = async (data: any) => {
    createProduct(data);
    getData(params);
    handleClose();
  };

  return (
    <div>
      <button
        onClick={handleOpen}
        className="py-2 px-6 text-white font-semibold bg-[#2389DA] duration-200 rounded-lg"
      >
        Add product
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
            {({ isSubmitting }) => (
              <Form>
                <h1 className="font-bold text-2xl text-center">Add products</h1>
                <div className="grid grid-cols-2 gap-x-5 justify-between items-center">
 
                  <Field
                    name="product_name"
                    type="text"
                    as={TextField}
                    label="Product name"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                  />
                  <Field
                    as={TextField}
                    label="Last Name"
                    name="last_name"
                    className="w-full mb-3"
                  />
                  <Field
                    name="color"
                    type="text"
                    as={TextField}
                    label="Color"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                  />
                  <Field
                    name="size"
                    type="number"
                    as={TextField}
                    label="Size"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                  />
                  <Field
                    name="made_in"
                    type="text"
                    fullWidth
                    as={TextField}
                    label="Made in"
                    margin="normal"
                    variant="outlined"
                  />
                  <Field
                    name="category_id"
                    type="text"
                    fullWidth
                    as={TextField}
                    label="Category"
                    margin="normal"
                    variant="outlined"
                  />
                  <Field
                    name="cost"
                    type="number"
                    as={TextField}
                    label="Cost"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                  />
                  <Field
                    name="discount"
                    type="number"
                    as={TextField}
                    label="Discount"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                  />
                  <Field
                    name="count"
                    type="number"
                    as={TextField}
                    label="Count"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                  />
                  <Field
                    name="description"
                    type="text"
                    as={TextField}
                    label="Description"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                  />
                  <Field
                    name="age_max"
                    type="number"
                    as={TextField}
                    label="Age max"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                  />
                  <Field
                    name="age_min"
                    type="number"
                    as={TextField}
                    label="Age min"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                  />
                </div>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  disabled={isSubmitting}
                  className="mt-5"
                >
                  {isSubmitting ? "Adding..." : "Add"}
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Modal>
    </div>
  );
}
