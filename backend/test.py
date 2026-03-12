import json
import requests
import xmltodict
import airportsdata

airport="TRD"
response = requests.get(f"https://asrv.avinor.no/XmlFeed/v1.0?TimeFrom=1&TimeTo=7&airport={airport}&direction=D&lastUpdate=2024-08-08T09:30:00Z")
response_dict = xmltodict.parse(response.text)

flights = response_dict['airport']['flights']['flight']

#Tricks out the URL of
for elem in flights:
    baseURL = "https://www.avinor.no/flyplass/"
    print(elem)
    #Code to find city name from airport code
    airport_name = airport
    airport_name = "Oslo"
    baseURL += f"{airport_name}/flytider/flyinfo/?flightid={elem.get('flight_id')}-{airport}-{elem.get("airport")}-"
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
    elem.update({"date": date})

    elem.update

def convert_XXX_to_city(str):
    return 0



iata_airorts = airportsdata.load('IATA')


