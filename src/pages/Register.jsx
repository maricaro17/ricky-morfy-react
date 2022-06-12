import React from "react";
import { Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { startRegisterWithEmailPasswordName } from "../redux/actions/authAction";
import CustomButton from "../components/CustomButton";
import { ContainerInput, Icon, InputText } from "../style/style";
import { FaKey, FaEnvelope, FaUser } from "react-icons/fa";

const Register = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      password2: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "El nombre es muy corto")
        .required("Escribe tu nombre"),
      lastname: Yup.string()
        .min(3, "El nombre es muy corto")
        .required("Escribe tus apellidos"),
      email: Yup.string().email("Email invalido").required("Email requerido"),
      password: Yup.string()
        .min(8, "La contraseña es muy corta - debe tener minimo 8 caracteres.")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[\w*\W*]/,
          "La contraseña debe tener minimo un numero, una mayuscula y un minuscula."
        )
        .required("Escribe tu contraseña."),
      password2: Yup.string()
        .oneOf([Yup.ref("password"), null], "Las contraseñas deben ser iguales")
        .required("Escribe tu contraseña."),
    }),
    onSubmit: (data) => {
      dispatch(startRegisterWithEmailPasswordName(data));
      formik.resetForm(formik.initialStatus);
    },
  });
  const { name, email, password, password2 } = formik.values;
  return (
    <>
    <Container>
      <div className="d-flex align-items-center my-5 mx-5">
      <div className="w-50">
        <img src="https://res.cloudinary.com/dxvzsg7fa/image/upload/v1654996215/Rick-And-Morty-Wallpaper-Transparent-PNG_i5mswe.png" height={400} alt="" />
      </div>
      <div className="w-50">
      <Form onSubmit={formik.handleSubmit} className="m-auto">
        <h1 className="my-5 text-dark">Registro</h1>
        <ContainerInput className="mb-3">
          <Icon>
            <FaUser color="gray" size={24} />
          </Icon>
          <InputText
            className="mb-1"
            type="text"
            placeholder="Nombre"
            name="name"
            value={name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </ContainerInput>
        {formik.touched.name && formik.errors.name ? (
          <Container className="error-validation">
            {formik.errors.name}
          </Container>
        ) : null}
        <ContainerInput className="mb-3">
        <Icon>
              <FaEnvelope color="gray" size={24} />
            </Icon>
          <InputText
            className="mb-1"
            type="email"
            placeholder="Ingrese su Email"
            name="email"
            value={email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </ContainerInput>
        {formik.touched.email && formik.errors.email ? (
          <Container className="error-validation">
            {formik.errors.email}
          </Container>
        ) : null}
        <ContainerInput className="mb-3">
          <Icon>
            <FaKey color="gray" size={24} />
          </Icon>
          <InputText
            className="mb-1"
            type="password"
            placeholder="Ingrese su Contraseña"
            name="password"
            value={password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </ContainerInput>
        {formik.touched.password && formik.errors.password ? (
          <Container className="error-validation">
            {formik.errors.password}
          </Container>
        ) : null}
        <ContainerInput className="mb-3">
          <Icon>
            <FaKey color="gray" size={24} />
          </Icon>
          <InputText
            className="mb-1"
            type="password"
            placeholder="Confirme su contraseña"
            name="password2"
            value={password2}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </ContainerInput>
        {formik.touched.password2 && formik.errors.password2 ? (
          <Container className="error-validation">
            {formik.errors.password2}
          </Container>
        ) : null}
        <CustomButton
          custom="primary"
          type="submit"
          className="my-1 btn-socials align-self-center"
          value="Registrar"
        />
        <p>
          ¿Ya Tienes una cuenta?{" "}
          <span>
            <Link to="/login" className="custom-text-primary">
              Iniciar Sesión
            </Link>
          </span>
        </p>
      </Form>
      </div>
      </div>
    </Container>
    </>
    
  );
};

export default Register;
