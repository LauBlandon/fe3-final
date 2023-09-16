import React from 'react'
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  return (
    <main>
      <h1>Home</h1>
      <div className='card-grid'>
        <Card/>
      </div>
    </main>
  )
}

export default Home