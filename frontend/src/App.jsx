import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Flight from "./components/Flight.jsx";
import FlightsParents from "./components/FlightsParents.jsx";
import DropdownComponent from "./components/Dropdown.jsx";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";

function Home() {
    return (<>
    <h1>Home</h1></>);
}

function App() {

    let [airport, setAirport] = useState("OSL")

  return (
    <>
        <BrowserRouter>
            <nav>
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/contact"}>Contact</Link>
            </nav>

            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/about"} element={<h1>About</h1>}/>
                <Route path={"/contact"} element={<h1>Contact</h1>}/>
            </Routes>

            <div>
                <p>--------Router things stops here-----</p>
                <h1>The react template is no more</h1>
                <p>The links currently works for non Oslo-airport due to Avinor Laziness</p>
                <p>Dynamic data</p>

                <select onChange={(e) => setAirport(e.target.value)}>
                    <option value={"OSL"}>OSL</option>
                    <option value={"AES"}>AES</option>
                    <option value={"TRD"}>TRD</option>
                    <option value={"HOV"}>HOV</option>
                    <option value={"BGO"}>BGO</option>
                    <option value={"SVG"}>SVG</option>
                </select>


                <div className={"airports"}>
{/*                    <FlightsParents airport={"OSL"}>

                    </FlightsParents>
                    <FlightsParents airport={"AES"}>

                    </FlightsParents>
                    <FlightsParents airport={"TRD"}></FlightsParents>*/}
                    <FlightsParents airport={airport}></FlightsParents>
                </div>

            </div>
        </BrowserRouter>

    </>
  )
}

export default App
