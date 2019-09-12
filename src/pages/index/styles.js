import styled from "styled-components"

import { Colors } from "../../../data"
import { Input as DefaultInput } from "../../components"

export const Input = styled(DefaultInput)`
  div,
  input {
    width: 100%;
    max-width: 600px;
  }
`

export const Button = styled.button`
  cursor: pointer;
  background-color: ${Colors.primary};
  color: ${Colors.darker};
  border: 1px solid ${Colors.dark};
  font-weight: 700;
  padding: 5px 15px;
  border-radius: 5px;
  justify-self: center;
  align-self: center;

  &:hover {
    color: #fff;
    background-color: ${Colors.secondary};
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20%;
  justify-content: flex-start;

  p {
    margin-bottom: 20px;

    &::before {
      content: "♯";
      margin-right: 8px;
    }
  }

  .citation {
    margin-bottom: 20px;
    padding-left: 20px;

    cite {
      color: ${Colors.dark};
    }
  }

  @media (max-width: 1024px) {
    margin: 0 10%;
  }
`

export const InputContainer = styled.div`
  label {
    font-weight: 700;
  }

  @media (min-width: 769px) {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: auto;
  }
`

export const HoursResult = styled.div`
  margin-bottom: 30px;
`

export const CalcContainer = styled.div`
  margin-bottom: 30px;

  &,
  input {
    font-size: larger;
  }
`
