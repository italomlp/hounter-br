import styled from "styled-components"

import { Colors } from "../../../data"

export const Container = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-top: 20px;
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* padding: 20px;
  margin-top: 20px; */

  a {
    color: #000;
    margin-left: 5px;
  }
`

export const IconContainer = styled.div`
  @media (max-width: 768px) {
    display: block;
  }

  display: none;
  margin-top: 10px;
  color: ${Colors.dark};
  font-weight: 100;
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;

    label {
      cursor: pointer;
      margin-left: 5px;
    }
  }
`
