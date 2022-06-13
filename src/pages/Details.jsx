import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import api from "../services/api";
import { ContainerDetail, Detalle} from "../style/style.js";

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
      <Container>
        <h1>{character?.name}</h1>
        <hr />
        <ContainerDetail>
          <div className="bg-dark" >
            <img src={character?.image} alt="" />
          </div>
          <div className="bg-dark text-white">
            <h1 className="m-3">Informacion</h1>
            <Detalle>
              <h5>Specie: {character?.species}</h5>
              <h5>Status: {character?.status}</h5>
              <h5>Gender: {character?.gender}</h5>
              <h5>Origin: {character?.origin?.name}</h5>
              <h5>Location: {character?.location?.name}</h5>      
            </Detalle>
          </div>
        </ContainerDetail>
      </Container>
    </div>
  );
};

export default Details;
