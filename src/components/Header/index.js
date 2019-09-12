import PropTypes from "prop-types"
import React from "react"

import { Container, Logo, LogoFrame } from "./styles"

const Header = ({ siteTitle }) => (
  <Container>
    <LogoFrame>
      <Logo to="/">{siteTitle}</Logo>
    </LogoFrame>
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
