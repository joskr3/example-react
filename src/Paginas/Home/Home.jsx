import React from 'react'
import Banner from '../../Componentes/Banner/Banner'
import Footer from '../../Componentes/Footer/Footer'
import Header from '../../Componentes/Header/Header'
import Informacion from '../../Componentes/Informacion/Informacion'
import Sponsors from '../../Componentes/Sponsors/Sponsors'

export default function Home() {
  return (
    <>
      <Header />
      <Banner/>
      <Informacion/>
      <Sponsors/>
      <Footer />
    </>
  )
}
