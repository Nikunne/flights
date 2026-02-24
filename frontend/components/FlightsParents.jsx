import {useEffect, useState} from "react";
import Flight from "./Flight.jsx";

function FlightsParents(){
    const [flights, setFlights] = useState([])

    // Will be hardcoded for Oslo for now
    useEffect(() => {
        getFlights("Oslo")
            .then(setFlights)
            .catch(console.error)
    })

    return (
        <div className={"flightPage"}>
            {flights.map(flight =>
                (<Flight
                    key={flight.flightnumber} {...flight}
                />
            ))}
        </div>
    )
}

export default FlightsParents