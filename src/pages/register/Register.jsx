import React from "react";
import { Formik } from "formik";
import axios from "axios";
import LoginInput from "../../components/UI/logininput/LoginInput";
import Submit from "../../components/UI/submit/Submit";

import { Form, LoginContainerStyled, LoginEmailStyled } from "./RegisterStyles";
import { registerInitialValues, registerValidationSchema } from "../../formik";
// import { createUser, signInWithGoogle } from "../../firebase/firebase-utils";
import useRedirect from "../../hooks/useRedirect";
import { useLocation } from "react-router-dom";
import { backendUrl } from "../../apiConfig";

const Register = () => {
  const { state } = useLocation();
  useRedirect(state?.redirectedFromCheckout ? "/checkout" : "/");

  return (
    <LoginContainerStyled>
      <h1>Crea tu cuenta</h1>
      <Formik
        initialValues={registerInitialValues}
        validationSchema={registerValidationSchema}
        onSubmit={async (values, action) => {
          try {
            const response = await axios.post(`${backendUrl}/auth/register`, {
              email: values.email,
              name: values.name,
              password: values.password,
            });
            console.log("Registro exitoso:", response.data);
          } catch (error) {
            if (error.response) {
              // Error en la respuesta del servidor (por ejemplo, error de validación)
              console.error(
                "Error en la respuesta del servidor:",
                error.response.data
              );
              alert(
                "Hubo un error en el registro: " + error.response.data.message
              );
            } else if (error.request) {
              // Error en la solicitud (por ejemplo, el servidor no responde)
              console.error("Error en la solicitud:", error.request);
              alert("Hubo un error en la solicitud al servidor.");
            } else {
              // Error general (por ejemplo, problema de red)
              console.error("Error general:", error.message);
              alert("Hubo un error en la solicitud al servidor.");
            }
          }

          action.resetForm();
        }}
      >
        <Form>
          <LoginInput name="name" type="text" placeholder="Nombre" />
          <LoginInput name="email" type="text" placeholder="Email" />
          <LoginInput name="password" type="password" placeholder="Password" />
          <p>O podés ingresar con</p>
          {/* <LoginButtonGoogleStyled type="button" onClick={signInWithGoogle}>
            <img
              src="https://res.cloudinary.com/dcatzxqqf/image/upload/v1656648432/coding/NucbaZappi/Assets/google-icon_jgdcr1.png"
              alt="Google logo"
            />
            Google
          </LoginButtonGoogleStyled> */}
          <LoginEmailStyled to="/login">
            <p>¿Ya tenes cuenta? Inicia sesión</p>
          </LoginEmailStyled>
          <Submit>Registrarte</Submit>
        </Form>
      </Formik>
    </LoginContainerStyled>
  );
};

export default Register;
