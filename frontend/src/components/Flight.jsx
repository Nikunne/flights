function Flight({date="defaultdate", ...rest}){
    return (
        <a href={rest.link} className={"flight"}>
            <div >
                <h2>Flightnumber {rest.flightnumber} </h2>
                <p>Departing from {rest.dep} to {rest.arr} at <strong>{date}</strong> from gate {rest.gate}</p>
                <p>Unique debugging ID: {rest.keyID}</p>
            </div>
        </a>

    )
}

export default Flight