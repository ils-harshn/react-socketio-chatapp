import { useState } from "react";
import XButton from "../../Button/XButton/XButton";
import ModalWrapper from "../Wrapper";
import styles from "./CreateChannelModal.module.css";
import { AddchannelIcon, CloseIcon } from "../../../assests/icons";
import TextInput from "../../Input/TextInput";
import * as Yup from "yup";
import { useFormik } from "formik";
import FormInputError from "../../Error";

const MultiStepForm = () => {
  const [step, setStep] = useState(0);
  const initialValues = {
    channelName: "",
    adminName: "",
    channelDescription: "",
  };
  const steps = [
    {
      label: "What's the name of your company or team?",
      validationSchema: Yup.object().shape({
        channelName: Yup.string().required("Channel name is required"),
      }),
      content: (formik) => (
        <div className="step1">
          <h1 className="mb-16">What's the name of your company or team?</h1>
          <p className="mb-16">
            This will be the name of your ChatApp workspace - choose something
            that your team will recognise.
          </p>
          <TextInput
            placeholder="Enter workspace name"
            width="full"
            size="lg"
            name="channelName"
            type="text"
            value={formik.values.channelName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.channelName && formik.errors.channelName && (
            <FormInputError className="mt-4">
              {formik.errors.channelName}
            </FormInputError>
          )}
        </div>
      ),
    },
    {
      label: "What's your name?",
      validationSchema: Yup.object().shape({
        adminName: Yup.string().required("Your name is required"),
      }),
      content: (formik) => (
        <div className="step2">
          <h1 className="mb-16">What's your name?</h1>
          <p className="mb-16">
            Adding your name helps your teammates to recognise and connect with
            you more easily
          </p>
          <TextInput
            placeholder="Enter your name"
            width="full"
            size="lg"
            name="adminName"
            type="text"
            value={formik.values.adminName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.adminName && formik.errors.adminName && (
            <FormInputError className="mt-4">
              {formik.errors.adminName}
            </FormInputError>
          )}
        </div>
      ),
    },
    {
      label: "What's your team working on right now?",
      validationSchema: Yup.object().shape({
        channelDescription: Yup.string().required("Description is required"),
      }),
      content: (formik) => (
        <div className="step3">
          <h1 className="mb-16">What's your team working on right now?</h1>
          <p className="mb-16">
            This could be anything; a project, campaign, event or the deal
            you're trying to close.
          </p>
          <TextInput
            placeholder="E.g. QA budget, autumn campaign"
            width="full"
            size="lg"
            name="channelDescription"
            type="text"
            value={formik.values.channelDescription}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.channelDescription &&
            formik.errors.channelDescription && (
              <FormInputError className="mt-4">
                {formik.errors.channelDescription}
              </FormInputError>
            )}
        </div>
      ),
    },
  ];

  const currentValidationSchema = steps[step].validationSchema;

  const formik = useFormik({
    initialValues,
    validationSchema: currentValidationSchema,
    onSubmit: (values) => {
      if (step === steps.length - 1) {
        // Final submission
        console.log("Form submitted", values);
      } else {
        setStep(step + 1);
      }
    },
  });

  const handleBack = () => {
    setStep(step - 1);
  };

  return (
    <div className="step-container">
      <p className="font-s-12 mb-16">
        Step {step + 1} of Step {steps.length}
      </p>
      <form onSubmit={formik.handleSubmit}>
        {steps[step].content(formik)}
        <div className="mt-16">
          {step > 0 && (
            <XButton className="mr-16" type="button" onClick={handleBack}>
              BACK
            </XButton>
          )}
          <XButton type="submit">
            {step === steps.length - 1 ? "CREATE" : "NEXT"}
          </XButton>
        </div>
      </form>
    </div>
  );
};

const ModalBody = ({ closeModal }) => {
  return (
    <>
      <div className="banner">
        <span className="title">
          <AddchannelIcon className="title-icon" />
          Create Channel
        </span>
        <CloseIcon className="close" onClick={closeModal} />
      </div>

      <div className="modal-body">
        <MultiStepForm />
      </div>
    </>
  );
};

export const CreateChannelModal = () => {
  const [open, setOpen] = useState(false);
  const [isExited, setExited] = useState(false);

  const closeModal = () => {
    setExited(true);
    setTimeout(() => {
      setOpen(false);
    }, 100);
  };

  const openModal = () => {
    setExited(false);
    setOpen(true);
  };

  return (
    <>
      <XButton onClick={openModal}>CREATE A NEW CHANNEL</XButton>
      <ModalWrapper
        isOpen={open}
        className={`${isExited ? "close" : ""}`}
        onClose={closeModal}
      >
        <div className={`modal ${styles.modal}`}>
          <ModalBody closeModal={closeModal} />
        </div>
      </ModalWrapper>
    </>
  );
};

export default CreateChannelModal;
