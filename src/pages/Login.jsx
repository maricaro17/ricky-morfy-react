import React from "react";
import { Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomButton from "../components/CustomButton";
import { FaKey, FaEnvelope } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import {
  Boton,
  ContainerInput,
  Icon,
  InputText,
  Redes,
  Subtitulo,
} from "../style/style";
import useForm from "../hooks/useForm";
import { useDispatch } from "react-redux";
import { loginEmailPassword, loginGoogle } from "../redux/actions/authAction";
const Login = () => {
  const dispatch = useDispatch();
  const [formValue, handleInputChange, rest] = useForm({
    email: "",
    password: "",
  });

  const { email, password } = formValue;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginEmailPassword(email, password));
    rest();
  };

  const handleGoogle = () => {
    dispatch(loginGoogle());
  };
  return (
    <div>
      <Container className="justify-content-center">
        <div className="d-flex align-items-center my-5 mx-5">
        <div className="w-50">
          <Form onSubmit={handleSubmit}>
            <div>
              <h1 className=" text-dark my-5">Inicio de Sesion</h1>
            </div>
            <ContainerInput>
              <Icon>
                <FaEnvelope color="gray" size={24} />
              </Icon>
              <InputText
                type="email"
                name="email"
                placeholder="Email"
                autoComplete="off"
                value={email}
                onChange={handleInputChange}
              />
            </ContainerInput>

            <ContainerInput>
              <Icon>
                <FaKey color="gray" size={24} />
              </Icon>
              <InputText
                type="password"
                name="password"
                placeholder="Contraseña"
                autoComplete="off"
                value={password}
                onChange={handleInputChange}
              />
            </ContainerInput>
            <Redes>
              <CustomButton
                onClick={handleGoogle}
                color="black"
                backgroundColor="white"
                Icon={FcGoogle}
                value="Iniciar Sesion con Google"
                iconSize="24"
                border="1px solid black"
              ></CustomButton>
            </Redes>
            <Subtitulo>
              {"¿No tienes cuenta? "}
              <Link className="text-primary" to="/registro">
                Registrate
              </Link>
            </Subtitulo>
            <Boton>Iniciar Sesion</Boton>
          </Form>
        </div>
        <div className="w-50 d-flex justify-content-end">
        <img src="https://res.cloudinary.com/dxvzsg7fa/image/upload/v1654915311/Rick-And-Morty-PNG-Images-HD_exn9qs.png" height={400} alt="" />
        </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
