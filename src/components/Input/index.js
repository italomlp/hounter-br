import React from "react"

import { Container, Input as RawInput } from "./styles"

const Input = ({ icon: IconElement, className, ...restProps }) => (
  <div className={className}>
    <Container>
      {IconElement && <IconElement className="icon" />}
      <RawInput {...restProps} />
    </Container>
  </div>
)

export default Input
