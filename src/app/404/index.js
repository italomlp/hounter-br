import React from "react"

import { Layout, Seo } from "../../components"
import GlobalStyles from "../../styles/global"

const NotFoundPage = () => (
  <Layout>
    <GlobalStyles />
    <Seo title="404: Não encontrado" />
    <div align="center">
      <h1>Não encontrado</h1>
      <label>Página não encontrada.</label>
    </div>
  </Layout>
)

export default NotFoundPage
