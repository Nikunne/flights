from fastapi import FastAPI
import requests
import json
import xmltodict

app = FastAPI()


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
    result = json.dumps(response_dict, indent=4) #turns into json

    jsonreader = json.loads(result)
    flights = jsonreader['airport']['flights']['flight']

    return flights
