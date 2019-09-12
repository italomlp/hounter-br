import React from "react"

import { Container } from "./styles"

const Footer = () => (
  <Container>
    <label>© {new Date().getFullYear()}, Feito por</label>
    {` `}
    <a href="https://www.italomlp.com">Italo Menezes</a>
  </Container>
)

export default Footer
