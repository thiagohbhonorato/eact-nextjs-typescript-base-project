import React from 'react'
import Head from 'next/head'

import Logo from '../assets/logo.svg'
import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>ReactJS Base Project</title>
      </Head>

      <Logo />
      <h1>ReactJS Base Project</h1>
      <p>A ReactJS + Next.js base project made by Thiago Honorato.</p>
    </Container>
  )
}

export default Home
