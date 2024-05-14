import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { signInValidationSchema } from "../../utils/validation";
import login from "../../assets/login.png";
import { SignIn } from "../../interface/auth-interface";
import { useState } from "react";
import Notifation from "../../utils/notifation";
import auth from "../../service/auth/auth";

import { setDataToCookie } from "../../utils/data-server";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const LoginIn = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const initialValues: SignIn = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values: SignIn) => {
    // console.log(values);

    try {
      const response = await auth.sign_in(values);
      if (response.status === 200) {
        setDataToCookie("token", response?.data.access_token);
        setDataToCookie("email", response?.data.email);
        localStorage.setItem("token", response.data.access_token);
        Notifation({
          title: "Tizimga muvaffaqiyatli kirdingiz",
          type: "success",
        });
        setTimeout(()=>{navigate("/main")},1000)
      }
    } catch (error) {
      console.log(error);
      Notifation({ title: "Xatolik mavjud", type: "error" });
    }
  };
  return (
    <div>
      <ToastContainer />
      <div className=" absolute mt-[197px] w-[430px] h-[130px]">
        {" "}
        <img src={login} alt="" />
      </div>
      <div className=" mt-[100px] shadow-lg shadow-indigo-500/40  w-[480px] ml-[450px] h-[400px] rounded-md border-2 flex items-center justify-center flex-col  p-5 ">
        <h1 className="text-[35px] font-bold ">Login</h1>
        <div>
          <Formik
            initialValues={initialValues}
            validationSchema={signInValidationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <Field
                  name="email"
                  type="email"
                  as={TextField}
                  label="Email"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  helperText={
                    <ErrorMessage
                      name="email"
                      component="p"
                      className="text-[red] text-[15px]"
                    />
                  }
                />
                <Field
                  name="password"
                  type={showPassword ? "text" : "password"}
                  as={TextField}
                  label="Password"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  helperText={
                    <ErrorMessage
                      name="password"
                      component="p"
                      className="text-[red] text-[15px]"
                    />
                  }
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />

                <div className="pt-6">
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    sx={{ padding: "10px" }}
                  >
                    {isSubmitting ? "Submitting" : "Tizimga kirish"}
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default LoginIn;
