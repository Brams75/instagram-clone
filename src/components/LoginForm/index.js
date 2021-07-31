import React from "react";
import { FacebookOutlined } from "@ant-design/icons";
import Link from "next/link";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Container, { Ou, Facebook } from "./styles";
import MyTextInput from "../SignupForm/MyTextInput";
import Button from "../SignupForm/Button";
// import db from "../../config/firebase";

const LoginForm = () => {
  // const onFinish = (values) => {
  // db.createUserWithEmailAndPassword(values.username, values.password)
  //   .then((userCredential) => {
  //     // Signed in
  //     const { user } = userCredential;
  //     console.log(user);
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     // ..
  //   });
  // db.signInWithEmailAndPassword(values.username, values.password)
  //   .then((userCredential) => {
  //     // Signed in
  //     const { user } = userCredential;
  //     console.log(user);
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //   });
  // };
  // const onFinishFailed = (errorInfo) => {
  //   console.log("Failed:", errorInfo);
  // };
  return (
    <Container>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string().email("Invalid email address").required("Required"),

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
          <MyTextInput
            label="Email"
            name="email"
            type="email"
            placeholder="Num. téléphone, nom d’utilisateur ou e-mail"
          />

          <MyTextInput
            label="Password"
            name="password"
            type="password"
            placeholder="Mot de passe"
          />

          <Button className="min-w-full rounded m-1 active:opacity-25" type="submit">
            Connexion
          </Button>
        </Form>
      </Formik>

      <Ou>
        <div className="line" />
        <div className="text">ou</div>
        <div className="line" />
      </Ou>
      <Facebook>
        <FacebookOutlined />
        <span>Se connecter avec Facebook</span>
      </Facebook>
      <Link href="/#" passHref>
        <a href="replace" className="text-center">
          Mot de passe oublié ?
        </a>
      </Link>
    </Container>
  );
};

export default LoginForm;
