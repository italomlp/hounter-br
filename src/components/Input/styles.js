import styled from "styled-components"

import { Colors } from "../../../data"

export const Container = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  padding: 5px;
  border-bottom: 1px solid ${Colors.primary};
  color: ${Colors.darker};

  .icon {
    margin-right: 10px;
    color: ${Colors.dark};
  }
`

export const Input = styled.input`
  background-color: transparent;
  margin: 0;
  padding: 5px;
  border: 0;
  height: 25px;

  &::placeholder {
    color: ${Colors.dark};
    font-weight: 100;
    font-style: italic;
    margin: 0;
    padding: 0;
    padding-top: auto;
  }
`
