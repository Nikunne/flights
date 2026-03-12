from fastapi import FastAPI
import requests
import json
import xmltodict
import airportsdata

app = FastAPI()


iata_airports = airportsdata.load('IATA')

@app.get("/")
async def root():
    return {"message": "Hello World"}



# @app.get("/api/flights")
# async def get_flights(airport: str):
#     return [
#         {"airport": airport}
#     ]



@app.get("/api/flights")
async def get_flights(airport: str):
    response = requests.get(f"https://asrv.avinor.no/XmlFeed/v1.0?TimeFrom=1&TimeTo=7&airport={airport}&direction=D&lastUpdate=2024-08-08T09:30:00Z")
    response_dict = xmltodict.parse(response.text)
    # result = json.dumps(response_dict, indent=4) #turns into json
    #
    # jsonreader = json.loads(result)
    flights = response_dict['airport']['flights']['flight']
    iata_airports = airportsdata.load('IATA')
    for elem in flights:
        baseURL = "https://www.avinor.no/flyplass/"

        #Code to find city name from airport code
        airport_name = airport
        airport_name = iata_airports[airport]['name'].split()[0]
        airport_name = 'Oslo' # WORKS for now since avinor is lazy
        baseURL += f"{airport_name}/flytider/flyinfo/?flightid={elem.get('flight_id')}-{airport}-{elem.get("airport")}-"
        date = elem.get("schedule_time")
        date = date[:10]
        f = date.split("-")
        date_link = ""
        for elems in f:
            date_link += elems
        baseURL += f"{date_link}"
        elem.update({"link": baseURL})

    return flights
