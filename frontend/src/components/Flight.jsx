function Flight({date="defaultdate", ...rest}){
    return (
        <a href={rest.link} className={"flight"}>
            <div>

                <h2>Flightnumber {rest.flightnumber} </h2>
                <img className={"flight_picture"} src={`/public/airlines/${rest.airline}.png`} alt={`image for ${rest.airline} missing`}/>
                <p>{rest.dep_name} - {rest.arr_name}</p>
                <p>Departing from {rest.dep} to {rest.arr} at <strong>{rest.clockTime}</strong> (GMT) from gate {rest.gate}</p>
                <p>{rest.dato}</p>
                <p>Unique debugging ID: {rest.keyID}</p>
                <p>{rest.airline}</p>

            </div>
        </a>

    )
}

export default Flight