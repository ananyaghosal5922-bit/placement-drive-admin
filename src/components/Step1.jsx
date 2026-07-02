import { Field, ErrorMessage, useFormikContext  } from "formik";

function Step1({ setStep }) {
const { validateForm } = useFormikContext();

  return (
    <>
      <h2>Company Details</h2>

      <Field
        name="companyName"
        placeholder="Company Name"
      />
      <ErrorMessage
       name="companyName"
       component="div"
     />
      <br /><br />

      <Field
        name="website"
        placeholder="Website URL"
      />
      <ErrorMessage
       name="website"
       component="div"
       />

      <br /><br />

      <Field
        name="industry"
        placeholder="Industry Type"
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

    if (
      !errors.companyName &&
      !errors.website &&
      !errors.industry
    ) {
      setStep(2);
    }
  }}
  > Next
    </button>
    </>
  );
}

export default Step1;