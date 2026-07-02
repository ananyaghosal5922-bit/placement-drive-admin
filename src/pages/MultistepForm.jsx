import { useState } from "react";
import { Formik, Form } from "formik";

import { step1Schema } from "../validation/validation";
import useDriveStore from "../store/DriveStore";

import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";
import Step4 from "../components/Step4";

function MultiStepForm() {
  const [step, setStep] = useState(1);
  const { addDrive } = useDriveStore();

  return (
    <Formik
      initialValues={{
        companyName: "",
        website: "",
        industry: "",
        role: "",
        designation: "",
        ctc: "",
        location: "",
        cgpa: "",
        batch: "",
        branches: [],
        email: "",
        deadline: "",
      }}
      validationSchema={step === 1 ? step1Schema : null}
      onSubmit={(values) => {
        console.log("Submitted!");
        addDrive({
       id: Date.now(),
      ...values,
     }); 
        console.log(values);
        alert("Placement Drive Created Successfully!");
      }}
    >
      <Form>
        <h1>Create Placement Drive</h1>

        {step === 1 && <Step1 setStep={setStep} />}
        {step === 2 && <Step2 setStep={setStep} />}
        {step === 3 && <Step3 setStep={setStep} />}
        {step === 4 && <Step4 setStep={setStep} />}
      </Form>
    </Formik>
  );
}

export default MultiStepForm;