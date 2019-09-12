import React, { useState, useEffect, useRef } from "react"
import { FaSearchDollar, FaCoins, FaClock } from "react-icons/fa"

import { Layout, Seo } from "../../components"

import GlobalStyles from "../../styles/global"

import {
  Container,
  HoursResult,
  CalcContainer,
  Input,
  InputContainer,
  Button,
} from "./styles"

const IndexPage = () => {
  const [hours, setHours] = useState("")
  const [hourValue, setHourValue] = useState("")
  const [totalValue, setTotalValue] = useState("")

  const totalHours = useRef(0)
  const averageHours = useRef(0)

  const resetAll = () => {
    totalHours.current = 0
    averageHours.current = 0
    setHours("")
    setHourValue("")
    setTotalValue("")
  }

  const onChangeHours = value => {
    if (value < 0) {
      return
    }

    setHours(value)

    if (!value) return

    const average = value / 6
    const total = average * 30

    if (averageHours.current !== average) {
      averageHours.current = +average.toFixed(2)
    }

    if (totalHours.current !== total) {
      setHourValue("")
      setTotalValue("")
      totalHours.current = +total.toFixed(2)
    }
  }

  const onChangeHourValue = value => {
    if (value < 0) {
      return
    }

    setHourValue(value)
  }

  const onChangeTotalValue = value => {
    if (value < 0) {
      return
    }

    setTotalValue(value)
  }

  useEffect(() => {
    const result = totalValue / totalHours.current
    if (result && result >= 0.05) {
      setHourValue(+result.toFixed(2))
    }
  }, [totalValue])

  useEffect(() => {
    const result = hourValue * totalHours.current
    if (result && result >= 0.05) {
      setTotalValue(+result.toFixed(2))
    }
  }, [hourValue])

  return (
    <Layout>
      <GlobalStyles />
      <Seo title="Home" />
      <Container>
        <div>
          <p>
            O <strong>Hounter-br</strong> é um site para calcular o número de
            horas trabalhadas por um programador PJ, seguindo a legislação
            trabalhista.
          </p>
          <p>
            De acordo com o artigo 64 da{" "}
            <a
              target="blank"
              href="http://www.planalto.gov.br/ccivil_03/Decreto-Lei/Del5452.htm"
            >
              CLT (Consolidação das Leis de Trabalho)
            </a>
            :
          </p>
          <div className="citation">
            <cite>
              "O salário-hora normal, no caso de empregado mensalista, será
              obtido dividindo-se o salário mensal correspondente à duração do
              trabalho, a que se totalHoursere o art. 58, por 30 (trinta) vezes
              o número de horas dessa duração."
            </cite>
          </div>
          <p>
            Sendo assim, o programador/empreendedor PJ informa o número de horas
            trabalhadas semanalmente e obtem o número de horas mensais totais. E
            com esse número, é possível informar o valor hora que pretende
            cobrar e obter o valor do salário final, ou vice versa.
          </p>
        </div>

        <CalcContainer>
          <InputContainer>
            <label>Horas semanais</label>
            <Input
              placeholder="Digite o total de horas semanais"
              type="number"
              max="50"
              value={hours}
              icon={FaClock}
              onChange={e => onChangeHours(e.target.value)}
            />
          </InputContainer>

          <HoursResult>
            Média de <strong>{averageHours.current || 0}</strong> horas/dia.
            Total de <strong>{totalHours.current || 0}</strong> horas/mês.
          </HoursResult>

          <InputContainer>
            <label>Valor/Hora</label>
            <Input
              placeholder="Digite o valor/hora desejado"
              type="number"
              value={hourValue}
              icon={FaCoins}
              onChange={e => onChangeHourValue(e.target.value)}
            />
          </InputContainer>

          <InputContainer>
            <label>Salário</label>
            <Input
              placeholder="Digite o salário desejado"
              type="number"
              value={totalValue}
              icon={FaSearchDollar}
              onChange={e => onChangeTotalValue(e.target.value)}
            />
          </InputContainer>
        </CalcContainer>
        <Button onClick={resetAll}>Limpar</Button>
      </Container>
    </Layout>
  )
}

export default IndexPage
