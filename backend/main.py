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
        arrival = elem.get('airport')
        #Code to find city name from airport code
        airport_name = airport
        airport_name = "Oslo"
        baseURL += f"{airport_name}/flytider/flyinfo/?flightid={elem.get('flight_id')}-{airport}-{arrival}-"
        date = elem.get("schedule_time")
        dateTime = date[:16]
        date = date[:10]

        clockTime = dateTime[-5:]

        f = date.split("-")
        date_link = ""
        for elems in f:
            date_link += elems
        baseURL += f"{date_link}"
        elem.update({"link": baseURL})
        elem.update({"clockTime": clockTime})
        elem.update({"dato": date})


        dep_airport = iata_airports[airport]["name"].split()[0]
        arr_airport = iata_airports[arrival]["name"].split()[0]

        elem.update({"dep_name":dep_airport})
        elem.update({"arr_name":arr_airport})

    return flights
