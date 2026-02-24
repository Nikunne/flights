import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Flight from "../components/Flight.jsx";

function App() {

  return (
    <>
        <div>
            <h1>The react template is no more</h1>
            <Flight dep="Mumbai" arr="Delhi" date="dategoeshere"/>
            <Flight dep="Oslo" arr="Trondheim" date="dategoeshere2" flightnumber="DY132"/>
            <Flight dep="Oslo" arr="Alesund" date="dategoeshere4" flightnumber={"SK1312"}/>
        </div>
    </>
  )
}

export default App
