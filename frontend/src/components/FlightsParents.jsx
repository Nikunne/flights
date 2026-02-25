import {useEffect, useState} from "react";
import Flight from "./Flight.jsx";
import getFlights from "/src/api/flights.js"

function FlightsParents(props){
    const [flights, setFlights] = useState([])

    //Will getflights from airport from the props, and then set the flights-constant array.
    useEffect(() => {
        getFlights(props.airport)
            .then(data => {
                setFlights(data)
            })
            .catch(console.error)
        console.log("useeffect is runned")
    }, [])

    return (
        <div className={"flightPage"}>
            <h2>Flights from {props.airport}</h2>
            {flights.map(flight =>
                (
                    <Flight
                    key={flight["@uniqueID"]} keyID={flight["@uniqueID"]} arr={flight.airport} dep={props.airport} gate={flight.gate} flightnumber={flight.flight_id} date={flight.schedule_time.slice(0,16)} {...flight}
                />
            ))}
        </div>
    )
}

export default FlightsParents