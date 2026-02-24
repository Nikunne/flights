
function Flight({date="defaultdate", ...rest}){
    return (
        <div className={"flight"}>
            <h2>Flightnumber {rest.flightnumber}</h2>
            <p>Departing from {rest.dep} to {rest.arr} at {date} from gate {rest.gate}</p>
        </div>
    )
}

export default Flight