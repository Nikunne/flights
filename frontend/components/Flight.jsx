
function Flight({date="test", ...rest}){
    return (
        <div className={"flight"}>
            <h2>This is a flight {rest.flightnumber}</h2>
            <p>Departing from {rest.dep} to {rest.arr} at {date} </p>
        </div>
    )
}

export default Flight