import * as yup from "yup";

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const zipRegex = /^[0-9]{5}(?:-[0-9]{4})?$/;

export const schema = yup.object().shape({
  name: yup.string().required("Enter your name!"),
  email: yup.string().matches(emailRegex, { message: "Wrong email format!" }).required("Enter email!"),
  phone: yup.number().typeError("Enter phone number!").integer().required("Enter phone number!"),
  address: yup.string().required("Enter address!"),
  zipCode: yup
    .string()
    .matches(zipRegex, { message: "Wrong Zip Code format!" })
    .typeError("Wrong Zip Code format!")
    .required("Enter Zip Code!"),
  city: yup.string().required("Enter city!"),
  country: yup.string().required("Enter country!"),
});
