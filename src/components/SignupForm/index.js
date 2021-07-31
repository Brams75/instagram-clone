import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import MyTextInput from "./MyTextInput";
import Button from "./Button";

const SignupForm = () => {
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          fullName: "",
          userName: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string().email("Invalid email address").required("Required"),
          fullName: Yup.string().max(20, "Must be 20 characters or less").required("Required"),
          userName: Yup.string().max(15, "Must be 15 characters or less").required("Required"),
          password: Yup.string().max(20, "Must be 20 characters or less").required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            // alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className="flex flex-col items-center">
          <MyTextInput label="Email" name="email" type="email" placeholder="E-mail" />

          <MyTextInput label="Full Name" name="fullName" type="text" placeholder="Nom complet" />

          <MyTextInput
            label="Username"
            name="userName"
            type="text"
            placeholder="Nom d'utilisateur"
          />

          <MyTextInput
            label="Password"
            name="password"
            type="password"
            placeholder="Mot de passe"
          />

          <Button className="min-w-full rounded m-1 active:opacity-25" type="submit">
            S&apos;incrire
          </Button>
        </Form>
      </Formik>
    </>
  );
};

export default SignupForm;
