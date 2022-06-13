import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import api from "../services/api";
import { ContainerDetail, ContainerImg, ContainerInformacion, Detalle, ImgDetalle} from "../style/style.js";

const Details = () => {
    const params = useParams()
    const [character, setCharater] = useState({}) 
    useEffect(()=>{
        if (params.id){
           api.getCharterById(params.id).then((result)=>{
            setCharater(result)
           })
           
        }
    },[character, params.id])

  return (
    <div>
      <Container /* className="my-5 mx-5" */>
        <h1 className="mt-5">{character?.name}</h1>
        <hr />
        <ContainerDetail>
          <ContainerImg className="bg-dark" >
            <ImgDetalle src={character?.image} alt="" />
          </ContainerImg>
          <ContainerInformacion className="bg-dark text-white">
            <h1 className="m-3">Informacion</h1>
            <Detalle>
              <h5>Specie: {character?.species}</h5>
              <h5>Status: {character?.status}</h5>
              <h5>Gender: {character?.gender}</h5>
              <h5>Origin: {character?.origin?.name}</h5>
              <h5>Location: {character?.location?.name}</h5>      
            </Detalle>
          </ContainerInformacion>
        </ContainerDetail>
      </Container>
    </div>
  );
};

export default Details;
