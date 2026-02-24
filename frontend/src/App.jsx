import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Flight from "./components/Flight.jsx";
import FlightsParents from "./components/FlightsParents.jsx";

function App() {

  return (
    <>
        <div>
            <h1>The react template is no more</h1>
            <p>Static data</p>
            <Flight dep="Mumbai" arr="Delhi" date="dategoeshere"/>
            <Flight dep="Oslo" arr="Trondheim" date="dategoeshere2" flightnumber="DY132"/>
            <Flight dep="Oslo" arr="Alesund" date="dategoeshere4" flightnumber={"SK1312"}/>
            <p>Dynamic data</p>
            <div className={"airports"}>
                <FlightsParents airport={"OSL"}>

                </FlightsParents>
                <FlightsParents airport={"AES"}>

                </FlightsParents>
                <FlightsParents airport={"TRD"}></FlightsParents>
            </div>

        </div>
    </>
  )
}

export default App
