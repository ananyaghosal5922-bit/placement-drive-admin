import * as Yup from "yup";

export const step1Schema = Yup.object({
  companyName: Yup.string()
    .required("Company name is required"),

  website: Yup.string()
    .url("Enter a valid URL")
    .required("Website is required"),

  industry: Yup.string()
    .required("Industry is required"),
});