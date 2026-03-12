import {useParams} from "react-router-dom";
import Flight from "../components/Flight.jsx";
import FlightsParents from "../components/FlightsParents.jsx";

function Airports() {
    const {airport} = useParams()
    return (
        <div>
            <h1>Airport page for {airport}</h1>
            <FlightsParents airport = {airport}/>
        </div>

    )
}

export default Airports;