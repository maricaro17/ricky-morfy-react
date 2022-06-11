import React from "react";
import { Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomButton from "../components/CustomButton";
import { FaKey, FaUser } from "react-icons/fa";
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
import { login, loginGoogle } from "../redux/actions/authAction";
const Login = () => {
  const dispatch = useDispatch();
  const [formValue, handleInputChange, rest] = useForm({
    email: "",
    password: "",
  });

  const { email, password } = formValue;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
    rest();
  };

  const handleGoogle = () => {
    dispatch(loginGoogle());
  };
  return (
    <div>
      <Container>
        <Form onSubmit={handleSubmit}>
          <div>
            <h1 className=" text-black">Inicio de Sesion</h1>
          </div>
          <ContainerInput>
            <Icon>
              <FaUser color="gray" size={24} />
            </Icon>
            <InputText
              type="email"
              placeholder="Usuario"
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
      </Container>
    </div>
  );
};

export default Login;
