import { Field, ErrorMessage, useFormikContext  } from "formik";

function Step1({ setStep }) {
const { validateForm } = useFormikContext();

  return (
    <>
      <h2>Company Details</h2>

      <label>
       Company Name <span style={{ color: "red" }}>*</span>
      </label>
      <Field
        name="companyName"
        placeholder="Enter Company Name"
      />
      <ErrorMessage
       name="companyName"
       component="div"
     />
      <br /><br />
      <label>
       Website URL <span style={{ color: "red" }}>*</span>
      </label>
      <Field
        name="website"
        placeholder="Enter Website URL"
      />
      <ErrorMessage
       name="website"
       component="div"
       />

      <br /><br />
      <label>
      Industry Type <span style={{ color: "red" }}>*</span>
      </label>
      <Field
        name="industry"
        placeholder="Enter Industry Type"
      />
      <ErrorMessage
       name="industry"
       component="div"
      />

      <br /><br />

      <button
        type="button"
  onClick={async () => {
    const errors = await validateForm();

   if (Object.keys(errors).length === 0) {
  setStep(2);
  }
  }}
  > Next
    </button>
    </>
  );
}

export default Step1;