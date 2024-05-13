import * as Yup from "yup"

export const signInValidationSchema = Yup.object().shape({
    email: Yup.string().email("Invalit email").required("Email is require"),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
        "Passpord must be at least 6 characters and contain at least one uppercase and one lowercase letter"
      )
      .required("Password is required"),
   
  });
  export const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    first_name: Yup.string().required("First Name is required"),
    gender: Yup.string().required("Gender is required"),
    last_name: Yup.string().required("Last Name is required"),
    password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
      "Passpord must be at least 6 characters and contain at least one uppercase and one lowercase letter"
    )
    .required("Password is required"),
  });


 export const CategoryValidationSchema = Yup.object().shape({
    category_name: Yup.string().required("Name is required"),
  });
  export const WorkersvalidationSchema = Yup.object().shape({
        email: Yup.string().email("Invalid email").required("Email is required"),
        first_name: Yup.string().required("First Name is required"),
        gender: Yup.string().required("Gender is required"),
        last_name: Yup.string().required("Last Name is required"),
        password: Yup.string()
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
          "Passpord must be at least 6 characters and contain at least one uppercase and one lowercase letter"
        )
        .required("Password is required"),
        phone_number: Yup.string().required("Phone Number is required"),
        access_token: Yup.string().required("Access Token is required"),
        age: Yup.number().required("Age is required"),
        id: Yup.string().required("ID is required"),
        refresh_token: Yup.string().required("Refresh Token is required"),
      });