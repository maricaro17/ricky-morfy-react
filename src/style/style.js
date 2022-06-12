import styled from "styled-components";
//Login
export const CustomButtonStyle = styled.button`
  border: ${(props) => (props.border ? props.border : "none")};
  border-radius: 5px;
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  padding: 10px;
  display: flex;
  margin: 5px;
`;

export const Google = styled.button`
  border: 0px solid #ea4335;
  color: #ffff;
  width: 20%;
  height: 48px;
  border-radius: 10px;
  margin-top: 2em;
  margin-left: 2em;
  box-sizing: border-box;
`;
export const Boton = styled.button`
  display: block;
  background-color: #046db5;
  color: #ffff;
  border: 0px;
  border-radius: 15px;
  height: 48px;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
  box-sizing: border-box;
  width: 100%;
  margin-top: 0.5em;
`;
export const Subtitulo = styled.h5`
  text-align: center;
  font-size: 14px;
  margin: 2em;
`;
export const Label = styled.input`
  width: 100%;
  height: 3em;
  margin: 0.7em;
  border-radius: 25px;
  background: #f5f5f5;
  border: #f5f5f5;
  font-size: 14px;
`;
export const Redes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  display: flex;
  background-color: #f5f5f5;
  border-radius: 25px;
  margin-bottom: 15px;
`;
export const Icon = styled.span`
  margin-left: 20px;
  margin-right: 20px;
  position: absolute;
`;

export const InputText = styled.input`
  width: 100%;
  height: 3em;
  border-radius: 25px;
  background: #f5f5f5;
  border: #f5f5f5;
  font-size: 14px;
  padding-left: 60px;
  padding-right: 20px;
`;

export const InputSelect = styled.select`
  width: 100%;
  height: 3em;
  border-radius: 25px;
  background: #f5f5f5;
  border: #f5f5f5;
  font-size: 14px;
  padding-left: 60px;
  background-image: url(https://pitogyros.com/wp-content/uploads/intense-cache/icons/plugin/font-awesome/arrow-circle-down.svg);
  background-size: 20px;
  background-position: calc(100% - 20px);
  background-repeat: no-repeat;
  appearance: none;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
  }
`;

//HEADER

export const HeaderContainer = styled.div`
  background-image: url("https://res.cloudinary.com/dxvzsg7fa/image/upload/v1654991392/5b667d877265b876259a1633403b0ec9_jddvkq.jpg");
  background-size: 100%;
  width: 100%;
  height: 650px;
  background-repeat: no-repeat;
`;
