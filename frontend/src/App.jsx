import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Flight from "./components/Flight.jsx";
import FlightsParents from "./components/FlightsParents.jsx";
import DropdownComponent from "./components/Dropdown.jsx";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Airports from "./pages/Airports.jsx";

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
                <Link className={"nav-link"} to={"/"}>Home</Link>
                <Link className={"nav-link"} to={"/airports"}>Airports</Link>
                <Link className={"nav-link"} to={"/contact"}>Contact</Link>
            </nav>
            <nav>
                <Link className={"nav-link2"} to={"/airports/OSL"}>OSL</Link>
                <Link className={"nav-link2"} to={"/airports/TRD"}>TRD</Link>
                <Link className={"nav-link2"} to={"/airports/BGO"}>BGO</Link>
                <Link className={"nav-link2"} to={"/airports/AES"}>AES</Link>
            </nav>

            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/airports"} element={<h3>Here will come som airport stuff</h3>}/>
                <Route path={"/airports/:airport"} element={<Airports/>}/>
            </Routes>

            <div>
                <p>--------Router things stops here-----</p>
                <h1>The react template is no more</h1>
                <p>The links currently works for non Oslo-airport due to Avinor Laziness</p>
                <p>Dynamic data</p>

                <Link to={"/airports/OSL"}>OSL</Link>


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
