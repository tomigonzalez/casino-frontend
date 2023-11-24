import React from "react";
import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import LoginInput from "../../components/UI/logininput/LoginInput";
import Submit from "../../components/UI/submit/Submit";

import { loginInitialValues, loginValidationSchema } from "../../formik";
import useRedirect from "../../hooks/useRedirect";
import {
  LoginContainerStyled,
  LoginEmailStyled,
  LoginPasswordStyled,
} from "./LoginStyle";
import axios from "axios";
import { backendUrl } from "../../apiConfig";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../redux/user/user-action";

const Login = () => {
  useRedirect("/");
  const dispatch = useDispatch();

  return (
    <LoginContainerStyled>
      <h1>Iniciar Sesión</h1>
      <Formik
        initialValues={loginInitialValues}
        validationSchema={loginValidationSchema}
        onSubmit={async (values) => {
          try {
            const response = await axios.post(`${backendUrl}/auth/login`, {
              email: values.email,
              password: values.password,
            });
            // Manejar la respuesta del servidor, por ejemplo, redirigir al usuario
            console.log("Inicio de sesión exitoso:", response);
            localStorage.setItem("authToken", response.data.accessToken);
            // Obtener el token de autenticación de localStorage

            const traerinfo = await axios.get(`${backendUrl}/casino/usuario`, {
              headers: {
                Authorization: `Bearer ${response.data.accessToken}`, // Reemplaza accessToken con el token de autenticación válido
              },
            });
            dispatch(setCurrentUser(traerinfo.data));
          } catch (error) {
            console.error("Error en el inicio de sesión:", error);
            alert("Credenciales incorrectas");
          }
        }}
      >
        <Form>
          <LoginInput name="email" type="text" placeholder="Email" />
          <LoginInput name="password" type="password" placeholder="Password" />
          <Link to="/forgotpassword">
            <LoginPasswordStyled>
              ¿Olvidaste la contraseña? Reestablecela
            </LoginPasswordStyled>
          </Link>

          {/* <LoginButtonGoogleStyled type="button" onClick={signInWithGoogle}>
            <img
              src="https://res.cloudinary.com/dcatzxqqf/image/upload/v1656648432/coding/NucbaZappi/Assets/google-icon_jgdcr1.png"
              alt="Google logo"
            />
            Google
          </LoginButtonGoogleStyled> */}
          <Link to="/register">
            <LoginEmailStyled>¿No tenes cuenta? Crea una</LoginEmailStyled>
          </Link>
          <Submit>Ingresar</Submit>
        </Form>
      </Formik>
    </LoginContainerStyled>
  );
};

export default Login;
