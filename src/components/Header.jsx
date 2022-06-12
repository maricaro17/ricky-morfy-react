import React from 'react'
import { ContainerBienvenida, HeaderContainer } from '../style/style'

const Header = ({name}) => {
  return (
    <div>
        <HeaderContainer>
        <ContainerBienvenida>
        <h1 className='text-white'>Bienvenido, {name}</h1>
        </ContainerBienvenida>
        </HeaderContainer>
    
    </div>
  )
}

export default Header