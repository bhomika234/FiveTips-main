import * as yup from "yup";

export const userValidations = yup.object().shape({
  userName: yup.string()
    .required("Username is required")
    .matches(/^[a-zA-Z0-9]+$/, "Username must contain only letters and numbers"),
  email: yup.string().email("Invalid Email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password is too short"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
});

// login validation
export const loginValidations = yup.object().shape({
  email: yup.string().email("Invalid Email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

export const postValidations = yup.object().shape({
  description: yup.string().required("Description is required"),
  image: yup.string().required("Image is required"),
});

// forgot password validation

export const forgotPasswordValidations = yup.object().shape({
  email: yup.string().email("Invalid Email").required("Email is required"),
});
