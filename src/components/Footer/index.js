import React from "react"
import { FaGithub } from "react-icons/fa"

import { Container, Content, IconContainer } from "./styles"

const Footer = () => (
  <Container>
    <Content>
      <label>© {new Date().getFullYear()}, Feito por</label>
      {` `}
      <a target="blank" href="https://www.italomlp.com">
        Italo Menezes
      </a>
    </Content>
    <IconContainer>
      <a target="blank" href="https://github.com/italomlp/hounter-br">
        <FaGithub />
        <label>Ir para o repositório</label>
      </a>
    </IconContainer>
  </Container>
)

export default Footer
