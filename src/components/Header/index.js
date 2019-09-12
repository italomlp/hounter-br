import PropTypes from "prop-types"
import React from "react"
import { FaGithub } from "react-icons/fa"

import { Container, Logo, LogoFrame, IconContainer } from "./styles"

const Header = ({ siteTitle }) => (
  <Container>
    <LogoFrame>
      <Logo to="/">{siteTitle}</Logo>
    </LogoFrame>
    <IconContainer>
      <a target="blank" href="https://github.com/italomlp/hounter-br">
        <FaGithub />
      </a>
    </IconContainer>
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
