import React from 'react'
import Title from '../components/Title'
import Body from '../components/Body'

const Home = () => {
  return (
    <main className="bg-dark dark:bg-light w-screen h-screen p-12">
        <Title/>
        <Body />
    </main>
  )
}

export default Home