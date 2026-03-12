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

    #Code to find city name from airport code
    airport_name = airport
    airport_name = "Oslo"
    baseURL += f"{airport_name}/flytider/flyinfo/?flightid={elem.get('flight_id')}-{airport}-{elem.get("airport")}-"
    date = elem.get("schedule_time")
    date = date[:10]
    f = date.split("-")
    date_link = ""
    for elems in f:
        date_link += elems
    baseURL += f"{date_link}"
    elem.update({"link": baseURL})

def convert_XXX_to_city(str):
    return 0

iata_airorts = airportsdata.load('IATA')
print(iata_airorts)
print(type(iata_airorts))

print(iata_airorts['OSL']['name'].split()[0])