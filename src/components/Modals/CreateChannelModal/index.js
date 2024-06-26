import { useEffect, useRef, useState } from "react";
import XButton from "../../Button/XButton/XButton";
import ModalWrapper from "../Wrapper";
import styles from "./CreateChannelModal.module.css";
import { AddchannelIcon, CloseIcon } from "../../../assests/icons";
import TextInput from "../../Input/TextInput";
import * as Yup from "yup";
import { useFormik } from "formik";
import FormInputError from "../../Error";
import { useChannelCreateMutation } from "../../../api/channel/queryHooks";
import notify from "../../../utils/notify";
import { useLocation } from "react-router-dom";
import ROUTES from "../../../router/ROUTES";
import { useQueryClient } from "react-query";
import QUERY_KEYS from "../../../api/queryKeys";

const Step1 = ({ formik }) => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current?.focus();
  }, [inputRef]);

  return (
    <div className="step1">
      <h1 className="mb-16">What's the name of your company or team?</h1>
      <p className="mb-16">
        This will be the name of your ChatApp workspace - choose something that
        your team will recognise.
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
        innerRef={inputRef}
      />
      {formik.touched.channelName && formik.errors.channelName && (
        <FormInputError className="mt-4">
          {formik.errors.channelName}
        </FormInputError>
      )}
    </div>
  );
};

const Step2 = ({ formik }) => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current?.focus();
  }, [inputRef]);

  return (
    <div className="step2">
      <h1 className="mb-16">What's your name?</h1>
      <p className="mb-16">
        Adding your name helps your teammates to recognise and connect with you
        more easily
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
        innerRef={inputRef}
      />
      {formik.touched.adminName && formik.errors.adminName && (
        <FormInputError className="mt-4">
          {formik.errors.adminName}
        </FormInputError>
      )}
    </div>
  );
};

const Step3 = ({ formik }) => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current?.focus();
  }, [inputRef]);

  return (
    <div className="step3">
      <h1 className="mb-16">What's your team working on right now?</h1>
      <p className="mb-16">
        This could be anything; a project, campaign, event or the deal you're
        trying to close.
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
        innerRef={inputRef}
      />
      {formik.touched.channelDescription &&
        formik.errors.channelDescription && (
          <FormInputError className="mt-4">
            {formik.errors.channelDescription}
          </FormInputError>
        )}
    </div>
  );
};

const MultiStepForm = ({ closeModal, setProcessing }) => {
  const pathname = useLocation().pathname;
  const queryClient = useQueryClient();
  const [step, setStep] = useState(0);
  const initialValues = {
    channelName: "",
    adminName: "",
    channelDescription: "",
  };
  const steps = [
    {
      validationSchema: Yup.object().shape({
        channelName: Yup.string().required("Channel name is required"),
      }),
      content: (formik) => <Step1 formik={formik} />,
    },
    {
      validationSchema: Yup.object().shape({
        adminName: Yup.string().required("Your name is required"),
      }),
      content: (formik) => <Step2 formik={formik} />,
    },
    {
      validationSchema: Yup.object().shape({
        channelDescription: Yup.string().required("Description is required"),
      }),
      content: (formik) => <Step3 formik={formik} />,
    },
  ];

  const currentValidationSchema = steps[step].validationSchema;
  const [isLoading, setLoading] = useState(false);
  const { mutate } = useChannelCreateMutation({
    onSuccess: () => {
      closeModal();
      if (pathname === ROUTES.DASHBOARD || pathname === "/")
        queryClient.invalidateQueries([QUERY_KEYS.LISTCHANNEL]);
    },
    onError: () => {
      setLoading(false);
      setProcessing(false);
    },
  });

  const handleCreateChannel = async (channelData) => {
    notify.promise(
      new Promise((resolve, reject) => {
        mutate(channelData, {
          onSuccess: resolve,
          onError: reject,
        });
      }),
      {
        pending: "Please wait...",
        success: "Channel created successfully!",
        error: "Error creating channel",
      }
    );
  };

  const formik = useFormik({
    initialValues,
    validationSchema: currentValidationSchema,
    onSubmit: (values) => {
      if (step === steps.length - 1) {
        setLoading(!isLoading);
        setProcessing(true);
        handleCreateChannel(values);
      } else {
        setStep(step + 1);
      }
    },
    validateOnBlur: false,
  });

  const handleBack = () => {
    setStep(step - 1);
  };

  useEffect(() => {
    setProcessing(false);
  }, [setProcessing]);

  return (
    <div className="step-container">
      <p className="font-s-12 mb-16">
        Step {step + 1} of Step {steps.length}
      </p>
      <form onSubmit={formik.handleSubmit}>
        {steps[step].content(formik)}
        <div className="mt-16">
          {step > 0 && (
            <XButton
              className="mr-16"
              type="button"
              onClick={handleBack}
              disabled={isLoading}
            >
              BACK
            </XButton>
          )}
          <XButton type="submit" disabled={isLoading}>
            {step === steps.length - 1 ? "CREATE" : "NEXT"}
          </XButton>
        </div>
      </form>
    </div>
  );
};

const ModalBody = ({ closeModal, setProcessing }) => {
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
        <MultiStepForm closeModal={closeModal} setProcessing={setProcessing} />
      </div>
    </>
  );
};

export const CreateChannelModal = () => {
  const [open, setOpen] = useState(false);
  const [isExited, setExited] = useState(false);
  const [isProcessing, setProcessing] = useState(false);

  const closeModal = () => {
    if (isProcessing === false) {
      setExited(true);
      setTimeout(() => {
        setOpen(false);
      }, 100);
    }
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
          <ModalBody closeModal={closeModal} setProcessing={setProcessing} />
        </div>
      </ModalWrapper>
    </>
  );
};

export default CreateChannelModal;
